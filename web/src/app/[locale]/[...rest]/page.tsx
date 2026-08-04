import { notFound } from 'next/navigation';

export default function CatchAllPage({
  params
}: {
  params: { locale: string; rest: string[] };
}) {
  console.error(
    `[route-mismatch-404] /${params.locale}/${(params.rest ?? []).join('/')}`
  );
  notFound();
}
