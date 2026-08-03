'use client';

import { Button, Tooltip } from '@nextui-org/react';
import { CopyIcon, FacebookIcon, PDFIcon, TwitterIcon } from './icons';
import { basePath } from '@/config/site';
import { Link as NextUiLink } from '@nextui-org/link';
import { Report } from '@/actions/index';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { useLocale } from 'next-intl';
import { getUiMessages } from '@/lib/ui-messages';

interface ShareBarProps {
  report: Report;
  shareFacebookText: string;
  shareTwitterText: string;
  shareResultsText: string;
  copyLinkText: string;
}

export default function ShareBar({
  report,
  shareFacebookText,
  shareTwitterText,
  shareResultsText,
  copyLinkText
}: ShareBarProps) {
  const [_, copy] = useCopyToClipboard();
  const ui = getUiMessages(useLocale());

  const handleCopy = (text: string) => async () => await copy(text);

  return (
    <>
      <Tooltip color='secondary' content={shareFacebookText}>
        <Button
          isIconOnly
          aria-label={shareFacebookText}
          radius='full'
          size='md'
          variant='light'
          as={NextUiLink}
          isExternal
          href={`https://www.facebook.com/sharer/sharer.php?u=${basePath}/result/${report.id}`}
        >
          <FacebookIcon size={48} />
        </Button>
      </Tooltip>
      <Tooltip color='secondary' content={shareTwitterText}>
        <Button
          isIconOnly
          aria-label={shareTwitterText}
          radius='full'
          size='md'
          variant='light'
          target='_blank'
          as={NextUiLink}
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareResultsText)}&url=${basePath}/result/${report.id}`}
        >
          <TwitterIcon size={42} />
        </Button>
      </Tooltip>
      <Tooltip color='secondary' content={ui.downloadPdf}>
        <Button
          isIconOnly
          aria-label={ui.downloadPdf}
          radius='full'
          size='md'
          variant='light'
          onPress={() => window.print()}
        >
          <PDFIcon size={32} />
        </Button>
      </Tooltip>
      <Tooltip color='secondary' content={copyLinkText}>
        <Button
          isIconOnly
          aria-label={copyLinkText}
          radius='full'
          size='md'
          variant='light'
          onPress={handleCopy(`${basePath}/result/${report.id}`)}
        >
          <CopyIcon size={42} />
        </Button>
      </Tooltip>
    </>
  );
}
