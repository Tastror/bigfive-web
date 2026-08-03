import arabic from '../../../packages/questions/src/data/ar/questions';
import danish from '../../../packages/questions/src/data/da/questions';
import german from '../../../packages/questions/src/data/de/questions';
import spanish from '../../../packages/questions/src/data/es/questions';
import finnish from '../../../packages/questions/src/data/fi/questions';
import french from '../../../packages/questions/src/data/fr/questions';
import indonesian from '../../../packages/questions/src/data/id/questions';
import italian from '../../../packages/questions/src/data/it/questions';
import japanese from '../../../packages/questions/src/data/ja/questions';
import korean from '../../../packages/questions/src/data/ko/questions';
import norwegian from '../../../packages/questions/src/data/no/questions';
import polish from '../../../packages/questions/src/data/pl/questions';
import brazilianPortuguese from '../../../packages/questions/src/data/pt-br/questions';
import swedish from '../../../packages/questions/src/data/sv/questions';
import thai from '../../../packages/questions/src/data/th/questions';
import ukrainian from '../../../packages/questions/src/data/uk/questions';
import simplifiedChinese from '../../../packages/questions/src/data/zh-cn/questions';
import traditionalChinese from '../../../packages/questions/src/data/zh-hk/questions';
import simplifiedChineseChoices from '../../../packages/questions/src/data/zh-cn/choices';
import traditionalChineseChoices from '../../../packages/questions/src/data/zh-hk/choices';
import bengali from '@/data/questions/bn.json';
import portuguese from '@/data/questions/pt.json';
import vietnamese from '@/data/questions/vi.json';

type QuestionText = {
  domain: string;
  facet: number;
  id: string;
  keyed: string;
  text: string;
};

const localizedQuestions: Record<string, QuestionText[]> = {
  ar: arabic,
  bn: bengali.questions as QuestionText[],
  da: danish,
  de: german,
  es: spanish,
  fi: finnish,
  fr: french,
  id: indonesian,
  it: italian,
  ja: japanese,
  ko: korean,
  no: norwegian,
  pl: polish,
  pt: portuguese.questions as QuestionText[],
  'pt-br': brazilianPortuguese,
  sv: swedish,
  th: thai,
  uk: ukrainian,
  vi: vietnamese.questions as QuestionText[],
  'zh-cn': simplifiedChinese,
  'zh-hk': traditionalChinese
};

export function getLocalizedQuestions(language: string) {
  return localizedQuestions[language];
}

const localizedChoices: Record<string, unknown> = {
  bn: bengali.choices,
  pt: portuguese.choices,
  vi: vietnamese.choices,
  'zh-cn': simplifiedChineseChoices,
  'zh-hk': traditionalChineseChoices
};

export function getLocalizedChoices(language: string) {
  return localizedChoices[language];
}
