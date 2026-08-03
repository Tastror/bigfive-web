import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { getTestResult, type Report } from '@/actions';
import { Alert } from '@/components/alert';
import { getErrorMessages } from '@/lib/error-messages';
import { validId } from '@/lib/helpers';
import { getReportLanguage } from '@/lib/localized-results';
import { getPersonalityGuideMessages } from '@/lib/personality-guide';
import { PersonalityGuide } from '../guide';

interface Props {
  params: { id: string; locale: string };
}

export async function generateMetadata({
  params: { locale }
}: Props): Promise<Metadata> {
  const messages = getPersonalityGuideMessages(locale);

  return {
    title: messages.title,
    description: messages.seoDescription
  };
}

export default async function PersonalizedPersonalityGuidePage({
  params: { id, locale }
}: Props) {
  unstable_setRequestLocale(locale);
  const errors = getErrorMessages(locale);

  if (!validId(id)) {
    return (
      <Alert title={errors.invalidResultIdTitle}>
        <p>{errors.invalidResultId}</p>
      </Alert>
    );
  }

  let report: Report | undefined;

  try {
    report = await getTestResult(id, getReportLanguage(locale));
  } catch (error) {
    if (error instanceof Error && error.name === 'NotFoundError') {
      notFound();
    }

    console.error(error);
    return (
      <Alert title={errors.loadFailedTitle}>
        <p>{errors.resultLoadFailed}</p>
      </Alert>
    );
  }

  if (!report) notFound();

  const t = await getTranslations({ locale, namespace: 'results' });

  return (
    <PersonalityGuide locale={locale} report={report} scoreLabel={t('score')} />
  );
}
