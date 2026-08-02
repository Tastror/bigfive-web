import { getItems, getInfo, type Question } from '@bigfive-org/questions';
import { Survey } from './survey';
import { useTranslations } from 'next-intl';
import { saveTest } from '@/actions';
import { unstable_setRequestLocale } from 'next-intl/server';
import simplifiedChineseQuestions from '../../../../../packages/questions/src/data/zh-cn/questions';
import simplifiedChineseChoices from '../../../../../packages/questions/src/data/zh-cn/choices';

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
  if (language !== 'zh-cn') return getItems(language);

  return simplifiedChineseQuestions.map((question, index) => ({
    ...question,
    num: index + 1,
    choices:
      simplifiedChineseChoices[
        question.keyed as keyof typeof simplifiedChineseChoices
      ]
  }));
}
