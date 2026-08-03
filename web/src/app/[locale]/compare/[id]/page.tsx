import { base64url } from '@/lib/helpers';
import { getTestResult, type Report } from '@/actions';
import { title } from '@/components/primitives';
import { DomainComparePage } from './domain';
import { BarChartCompare } from '@/components/bar-chart-generic';
import { getReportLanguage } from '@/lib/localized-results';
import { getTranslations } from 'next-intl/server';
import { validId } from '@/lib/helpers';
import { getErrorMessages } from '@/lib/error-messages';
import { Alert } from '@/components/alert';
import { notFound } from 'next/navigation';

interface ComparePageProps {
  params: {
    id: string;
    locale: string;
  };
}

export async function generateMetadata({
  params: { locale }
}: ComparePageProps) {
  const t = await getTranslations({ locale, namespace: 'getCompare' });
  return {
    title: t('title'),
    description: t('description1')
  };
}

type Person = {
  id: string;
  name: string;
};

function decodePeople(id: string): Person[] | null {
  try {
    const people: unknown = base64url.decode(id);
    if (!Array.isArray(people) || people.length < 2) return null;

    if (
      !people.every(
        (person) =>
          person &&
          typeof person === 'object' &&
          typeof person.id === 'string' &&
          validId(person.id) &&
          typeof person.name === 'string' &&
          person.name.trim().length > 0
      )
    ) {
      return null;
    }

    return people as Person[];
  } catch {
    return null;
  }
}

export default async function ComparePage({
  params: { id, locale }
}: ComparePageProps) {
  const t = await getTranslations({ locale, namespace: 'results' });
  const errors = getErrorMessages(locale);
  const reportLanguage = getReportLanguage(locale);
  const people = decodePeople(id);

  if (!people) {
    return (
      <Alert title={errors.invalidComparisonTitle}>
        <p>{errors.invalidComparison}</p>
      </Alert>
    );
  }

  let reports: { name: string; report: Report }[];
  try {
    reports = await Promise.all(
      people.map(async (person) => {
        const report = await getTestResult(person.id, reportLanguage);
        if (!report) {
          const missingResult = new Error('Missing result');
          missingResult.name = 'NotFoundError';
          throw missingResult;
        }
        return {
          name: person.name,
          report
        };
      })
    );
  } catch (error) {
    if (error instanceof Error && error.name === 'NotFoundError') {
      notFound();
    }

    console.error(error);
    return (
      <Alert title={errors.loadFailedTitle}>
        <p>{errors.comparisonLoadFailed}</p>
      </Alert>
    );
  }

  const categories = reports[0].report.results.map((result) => result.title);

  const series = reports.map(({ name, report }) => {
    return {
      name,
      data: report.results.map((result) => result.score)
    };
  });
  const getNamedFacets = (domain: string) =>
    reports.map((report) => {
      const domainResult = report.report.results.find(
        (result) => result.domain === domain
      );
      return {
        name: report.name,
        facets: domainResult?.facets
      };
    });

  return (
    <>
      <h1 className={title()}>{t('overview')}</h1>
      <BarChartCompare max={120} categories={categories} series={series} />
      {reports[0].report.results.map((domain) => (
        <DomainComparePage
          key={domain.domain}
          title={domain.title}
          shortDescription={domain.shortDescription}
          // @ts-ignore
          domain={getNamedFacets(domain.domain)}
        />
      ))}
    </>
  );
}
