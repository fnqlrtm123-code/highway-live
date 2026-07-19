import { redirect } from 'next/navigation';
import { serviceAreas } from '@/lib/data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  serviceAreas.forEach((area) => {
    params.push({ slug: area.slug });
    const encoded = encodeURIComponent(area.slug);
    if (encoded !== area.slug) {
      params.push({ slug: encoded });
    }
  });
  return params;
}

export default async function ServiceAreaRedirectPage({ params }: Props) {
  const { slug } = await params;
  redirect(`/rest-areas/${slug}`);
}
