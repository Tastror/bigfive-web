import {
  getChoices,
  getItems,
  getInfo,
  type Choice,
  type Question
} from '@bigfive-org/questions';
import { Survey } from './survey';
import { useTranslations } from 'next-intl';
import { saveTest } from '@/actions';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getLocalizedQuestions } from '@/lib/localized-questions';

const questionLanguages = getInfo().languages;

interface Props {
  params: { locale: string };
}

export default function TestPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const localeQuestionLanguage =
    locale === 'zh-hans' ? 'zh-cn' : locale === 'zh-hant' ? 'zh-hk' : locale;
  const language = questionLanguages.some(
    (item) => item.id === localeQuestionLanguage
  )
    ? localeQuestionLanguage
    : 'en';
  const questions = getQuestions(language);
  const t = useTranslations('test');
  return (
    <Survey
      questions={questions}
      nextText={t('next')}
      prevText={t('back')}
      resultsText={t('seeResults')}
      saveTest={saveTest}
      language={language}
    />
  );
}

function getQuestions(language: string): Question[] {
  const questions = getLocalizedQuestions(language);
  if (!questions) return getItems(language);

  const choices = getChoices(language) as unknown as Record<
    'plus' | 'minus',
    Choice[]
  >;

  return questions.map((question, index) => ({
    ...question,
    num: index + 1,
    choices: choices[question.keyed as 'plus' | 'minus']
  }));
}
