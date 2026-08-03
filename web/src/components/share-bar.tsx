'use client';

import { Button, Tooltip } from '@nextui-org/react';
import { CopyIcon, FacebookIcon, PDFIcon, TwitterIcon } from './icons';
import { basePath } from '@/config/site';
import { Link as NextUiLink } from '@nextui-org/link';
import { Report } from '@/actions/index';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { useLocale, useTranslations } from 'next-intl';
import { getUiMessages } from '@/lib/ui-messages';

interface ShareBarProps {
  report: Report;
}

export default function ShareBar({ report }: ShareBarProps) {
  const [_, copy] = useCopyToClipboard();
  const t = useTranslations('shareLinks');
  const ui = getUiMessages(useLocale());

  const handleCopy = (text: string) => async () => await copy(text);

  return (
    <>
      <Tooltip color='secondary' content={t('shareFacebook')}>
        <Button
          isIconOnly
          aria-label={t('shareFacebook')}
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
      <Tooltip color='secondary' content={t('shareTwitter')}>
        <Button
          isIconOnly
          aria-label={t('shareTwitter')}
          radius='full'
          size='md'
          variant='light'
          target='_blank'
          as={NextUiLink}
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(t('shareResults'))}&url=${basePath}/result/${report.id}`}
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
      <Tooltip color='secondary' content={t('copyLink')}>
        <Button
          isIconOnly
          aria-label={t('copyLink')}
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
