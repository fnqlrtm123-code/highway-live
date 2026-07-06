'use client';

import { useEffect, useRef, useState } from 'react';

interface CctvPlayerProps {
  x: number;
  y: number;
  cctvId: string;
  cctvName: string;
}

export default function CctvPlayer({ x, y, cctvId, cctvName }: CctvPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [apiKey, setApiKey] = useState<string>('');
  const [streamUrl, setStreamUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showKeyInput, setShowKeyInput] = useState<boolean>(false);

  // 로컬스토리지 및 Env에서 API 키 로드
  useEffect(() => {
    const savedKey = localStorage.getItem('cctv_api_key');
    const envKey = process.env.NEXT_PUBLIC_CCTV_API_KEY;
    
    if (savedKey) {
      setApiKey(savedKey);
    } else if (envKey) {
      setApiKey(envKey);
    } else {
      setShowKeyInput(true);
    }
  }, []);

  // API 키가 있고 좌표가 변경될 때 스트림 URL 조회
  useEffect(() => {
    if (!apiKey || !x || !y) {
      setStreamUrl(null);
      return;
    }

    const fetchCctvUrl = async () => {
      setLoading(true);
      setError(null);
      
      // CCTV 설치 지점 중심 반경 0.005도 범위의 바운딩 박스 계산
      const minX = (x - 0.005).toFixed(5);
      const maxX = (x + 0.005).toFixed(5);
      const minY = (y - 0.005).toFixed(5);
      const maxY = (y + 0.005).toFixed(5);

      const targetUrl = `https://openapi.its.go.kr:9443/cctvInfo?apiKey=${apiKey}&type=ex&cctvType=1&minX=${minX}&maxX=${maxX}&minY=${minY}&maxY=${maxY}&getType=json`;

      try {
        const response = await fetch(targetUrl);
        if (!response.ok) throw new Error('API 호출 실패');
        
        const data = await response.json();
        const cctvList = data.response?.data;

        if (cctvList && cctvList.length > 0) {
          // 일치하는 CCTV URL 추출 (보통 첫 번째 결과)
          const liveUrl = cctvList[0].cctvurl;
          if (liveUrl) {
            setStreamUrl(liveUrl);
          } else {
            throw new Error('CCTV 스트리밍 URL을 찾을 수 없습니다.');
          }
        } else {
          throw new Error('이 지점의 CCTV 카메라를 찾을 수 없습니다.');
        }
      } catch (err: any) {
        console.error(err);
        setError(err.message || 'CCTV 로딩 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchCctvUrl();
  }, [apiKey, x, y]);

  // HLS.js 플레이어 마운트 및 재생 관리
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !streamUrl) return;

    // 브라우저 네이티브 HLS 지원 여부 확인 (예: Safari)
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = streamUrl;
      video.play().catch(e => console.log("Auto-play blocked:", e));
    } else {
      // Chrome/Firefox 등을 위해 Hls.js 스크립트 로드
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/hls.js@1.5.8/dist/hls.min.js';
      script.onload = () => {
        const Hls = (window as any).Hls;
        if (Hls.isSupported()) {
          const hls = new Hls({
            maxBufferSize: 0, // 레이턴시 최소화
            maxBufferLength: 5,
            liveSyncDuration: 3,
          });
          hls.loadSource(streamUrl);
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            video.play().catch(e => console.log("Auto-play blocked:", e));
          });
          hls.on(Hls.Events.ERROR, (event: any, data: any) => {
            if (data.fatal) {
              switch (data.type) {
                case Hls.ErrorTypes.NETWORK_ERROR:
                  hls.startLoad();
                  break;
                case Hls.ErrorTypes.MEDIA_ERROR:
                  hls.recoverMediaError();
                  break;
                default:
                  setError('스트리밍 재생 에러가 발생했습니다.');
                  break;
              }
            }
          });
        } else {
          setError('해당 브라우저는 실시간 HLS 스트리밍 재생을 지원하지 않습니다.');
        }
      };
      document.head.appendChild(script);

      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, [streamUrl]);

  // API 키 저장 핸들러
  const handleSaveKey = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const key = formData.get('apiKey') as string;
    if (key.trim()) {
      localStorage.setItem('cctv_api_key', key.trim());
      setApiKey(key.trim());
      setShowKeyInput(false);
      setError(null);
    }
  };

  return (
    <div className="relative w-full h-full bg-slate-950 flex flex-col justify-center items-center overflow-hidden">
      {/* 1. 로딩 상태 */}
      {loading && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-slate-950/80 text-white gap-3">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-xs font-bold tracking-tight text-slate-400">{cctvName} 실시간 피드 받아오는 중...</span>
        </div>
      )}

      {/* 2. API 인증키가 없거나 설정 활성화 시 인풋 표시 */}
      {showKeyInput && (
        <div className="absolute inset-0 z-40 bg-slate-900/95 flex flex-col items-center justify-center p-6 text-center text-white">
          <div className="max-w-md space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 mx-auto border border-blue-500/20">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <h4 className="text-[15px] font-black">CCTV 오픈 API 인증키 등록</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              국토교통부 CCTV 화상자료를 표시하기 위해 공공데이터포털(data.go.kr) 또는 ITS에서 발급받은 OpenAPI **인증키(apiKey)**가 필요합니다.
            </p>
            
            <form onSubmit={handleSaveKey} className="flex gap-2 mt-4">
              <input 
                type="text" 
                name="apiKey"
                placeholder="인증키(apiKey)를 입력해주세요"
                className="flex-grow px-3 py-2 text-xs rounded bg-slate-800 border border-slate-700 focus:outline-none text-white font-mono"
                defaultValue={apiKey}
                required
              />
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-xs font-black px-4 py-2 rounded shrink-0 transition-colors"
              >
                저장
              </button>
            </form>
            <p className="text-[10px] text-slate-500">※ 입력한 인증키는 브라우저(localStorage)에 안전하게 저장됩니다.</p>
          </div>
        </div>
      )}

      {/* 3. 에러 발생 시 안내 */}
      {error && !loading && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-950 p-6 text-center text-slate-400 gap-3">
          <svg className="h-12 w-12 text-red-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div className="space-y-1">
            <p className="text-xs font-bold text-slate-200">{error}</p>
            <p className="text-[10.5px] text-slate-500">인증키가 유효한지 또는 미승인 상태인지 확인해주세요.</p>
          </div>
          <button 
            onClick={() => setShowKeyInput(true)}
            className="mt-3 text-[11px] font-bold text-blue-400 hover:text-blue-300 underline"
          >
            인증키 다시 입력하기
          </button>
        </div>
      )}

      {/* 4. 비디오 플레이어 본체 */}
      {streamUrl ? (
        <video 
          ref={videoRef}
          controls
          autoPlay
          muted
          playsInline
          className="w-full h-full object-contain"
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-center p-6 text-slate-600 gap-2">
          <svg className="h-14 w-14 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span className="text-xs font-bold text-slate-400">{cctvName} CCTV 대기중</span>
          <button 
            onClick={() => setShowKeyInput(true)}
            className="text-[11px] text-blue-400 hover:text-blue-300 font-medium"
          >
            [API 키 변경]
          </button>
        </div>
      )}
    </div>
  );
}
