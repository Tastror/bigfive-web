import { Image } from '@nextui-org/image';
import { headers } from 'next/headers';
import { title } from '@/components/primitives';
import { getErrorMessages } from '@/lib/error-messages';
import { NotFoundBackButton } from '@/components/not-found-back-button';

export type NotFoundKind = 'page' | 'result' | 'comparison';

export function NotFoundView({ kind }: { kind: NotFoundKind }) {
  const locale = headers().get('x-bigfive-locale') ?? 'zh-hans';
  const messages = getErrorMessages(locale);
  const heading =
    kind === 'result'
      ? messages.resultNotFoundTitle
      : kind === 'comparison'
        ? messages.comparisonNotFoundTitle
        : messages.pageNotFoundTitle;
  const description =
    kind === 'result'
      ? messages.resultNotFound
      : kind === 'comparison'
        ? messages.comparisonNotFound
        : messages.pageNotFound;

  return (
    <main className='flex h-full flex-col items-center justify-center'>
      <h1 className={title()}>{heading}</h1>
      <h2 className='text-center mt-4'>{description}</h2>
      <NotFoundBackButton label={messages.goBack} />
      <Image src='/not_found.webp' alt='' className='mt-5' />
    </main>
  );
}
