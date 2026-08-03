import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getPersonalityGuideMessages } from '@/lib/personality-guide';
import { PersonalityGuide } from './guide';

interface Props {
  params: { locale: string };
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

export default function PersonalityGuidePage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  return <PersonalityGuide locale={locale} />;
}
