import { redirect } from 'next/navigation';
import { serviceAreas } from '@/lib/data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return serviceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export default async function ServiceAreaRedirectPage({ params }: Props) {
  const { slug } = await params;
  redirect(`/rest-areas/${slug}`);
}
