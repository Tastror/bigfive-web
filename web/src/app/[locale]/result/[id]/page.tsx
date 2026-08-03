import { Report, getTestResult } from '@/actions';
import { Snippet } from '@nextui-org/snippet';
import { useTranslations } from 'next-intl';
import { title } from '@/components/primitives';
import { DomainPage } from './domain';
import { Domain } from '@bigfive-org/results';
import { getTranslations } from 'next-intl/server';
import { BarChart } from '@/components/bar-chart';
import { Link } from '@/navigation';
import { Alert } from '@/components/alert';
import { supportEmail } from '@/config/site';
import ShareBar from '@/components/share-bar';
import { DomainTabs } from './domain-tabs';
import { Chip } from '@nextui-org/react';
import { getReportLanguage } from '@/lib/localized-results';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'results' });
  return {
    title: t('seo.title'),
    description: t('seo.description')
  };
}

interface ResultPageParams {
  params: { id: string; locale: string };
  searchParams: { showExpanded?: boolean };
}

export default async function ResultPage({
  params,
  searchParams
}: ResultPageParams) {
  let report;

  try {
    const reportLanguage = getReportLanguage(params.locale);
    report = await getTestResult(params.id.substring(0, 24), reportLanguage);
  } catch (error) {
    console.error(error);
    throw new Error('Could not retrieve report');
  }

  if (!report)
    return (
      <Alert title='Could not retrive report'>
        <>
          <p>We could not retrive the following id {params.id}.</p>
          <p>Please check that it is correct or contact us at {supportEmail}</p>
        </>
      </Alert>
    );

  return (
    <Results
      report={report}
      locale={params.locale}
      showExpanded={searchParams.showExpanded}
    />
  );
}

interface ResultsProps {
  report: Report;
  locale: string;
  showExpanded?: boolean;
}

const Results = ({ report, locale, showExpanded }: ResultsProps) => {
  const t = useTranslations('results');

  return (
    <>
      <div className='flex justify-end'>
        <Chip>
          {new Intl.DateTimeFormat(locale).format(new Date(report.timestamp))}
        </Chip>
      </div>
      <div className='text-center mt-4'>
        <span className='font-bold'>{t('important')}</span> &nbsp;
        {t('saveResults')} &nbsp;
        <Link href={`/compare/?id=${report.id}`} className='underline'>
          {t('compare')}
        </Link>{' '}
        &nbsp;
        {t('toOthers')}
      </div>
      <div className='flex mt-4'>
        <Snippet
          hideSymbol
          color='danger'
          className='w-full justify-center'
          size='lg'
        >
          {report.id}
        </Snippet>
      </div>
      <div className='flex mt-5 justify-end w-full gap-x-1 print:hidden'>
        <ShareBar report={report} />
      </div>
      <div className='flex mt-10'>
        <h1 className={title()}>{t('theBigFive')}</h1>
      </div>
      <BarChart max={120} results={report.results} />
      <DomainTabs
        results={report.results}
        showExpanded={!!showExpanded}
        scoreText={t('score')}
        allText={t('all')}
        selectDomainText={t('selectDomain')}
        moreText={t('readMore')}
        lessText={t('readLess')}
      />
    </>
  );
};
