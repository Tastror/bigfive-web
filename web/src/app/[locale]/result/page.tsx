import { title } from '@/components/primitives';
import { useTranslations } from 'next-intl';
import { GetResultPage } from './get-result';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getErrorMessages } from '@/lib/error-messages';

interface Props {
  params: { locale: string };
}

export default function ResultPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('getResult');
  const errors = getErrorMessages(locale);

  return (
    <div className='h-[calc(60vh)]'>
      <h1 className={title()}>{t('result')}</h1>
      <p className='mt-8'>{t('explanation')}</p>
      <GetResultPage
        viewPreviousText={t('viewPrevious')}
        getResultsText={t('getResult')}
        invalidIdText={errors.invalidResultId}
        locale={locale}
      />
    </div>
  );
}
