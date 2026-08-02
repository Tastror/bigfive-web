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

type QuestionText = {
  domain: string;
  facet: number;
  id: string;
  keyed: string;
  text: string;
};

const localizedQuestions: Record<string, QuestionText[]> = {
  ar: arabic,
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
  'pt-br': brazilianPortuguese,
  sv: swedish,
  th: thai,
  uk: ukrainian,
  'zh-cn': simplifiedChinese,
  'zh-hk': traditionalChinese
};

export function getLocalizedQuestions(language: string) {
  return localizedQuestions[language];
}
