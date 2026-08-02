import getResults, {
  Domain,
  generateResult as generateResultFromTemplate
} from '@bigfive-org/results';
import fi from '@/data/result-text/fi.json';
import hi from '@/data/result-text/hi.json';
import ja from '@/data/result-text/ja.json';
import ko from '@/data/result-text/ko.json';
import pl from '@/data/result-text/pl.json';
import ru from '@/data/result-text/ru.json';
import sv from '@/data/result-text/sv.json';
import th from '@/data/result-text/th.json';
import uk from '@/data/result-text/uk.json';
import zhCn from '@/data/result-text/zh-cn.json';
import zhHant from '@/data/result-text/zh-hant.json';

type Score = 'low' | 'neutral' | 'high';
type TranslationFields = Record<string, string>;

interface ResultTemplate {
  domain: string;
  title: string;
  shortDescription: string;
  description: string;
  results: { score: Score; text: string }[];
  facets: { facet: number; title: string; text: string }[];
}

const translatedReports: Record<string, TranslationFields> = {
  fi,
  hi,
  ja,
  ko,
  pl,
  ru,
  sv,
  th,
  uk,
  'zh-cn': zhCn,
  'zh-hk': zhHant
};

const domainIds = ['O', 'C', 'E', 'A', 'N'];

const reportLocaleAliases: Record<string, string> = {
  'zh-hans': 'zh-cn',
  'zh-hant': 'zh-hk',
  pt: 'pt-br'
};

export function getReportLanguage(locale: string): string {
  return reportLocaleAliases[locale] ?? locale;
}

function createTemplate(fields: TranslationFields): ResultTemplate[] {
  return domainIds.map((domain) => ({
    domain,
    title: fields[`${domain}.title`],
    shortDescription: fields[`${domain}.shortDescription`],
    description: fields[`${domain}.description`],
    results: Array.from({ length: 3 }, (_, index) => ({
      text: fields[`${domain}.results[${index}].text`],
      score: fields[`${domain}.results[${index}].score`] as Score
    })),
    facets: Array.from({ length: 6 }, (_, index) => ({
      title: fields[`${domain}.facets[${index}].title`],
      facet: Number(fields[`${domain}.facets[${index}].facet`]),
      text: fields[`${domain}.facets[${index}].text`]
    }))
  }));
}

export function getLocalizedResults(
  language: string,
  scores: Parameters<typeof getResults>[0]['scores']
): Domain[] {
  const translatedReport = translatedReports[language];

  if (!translatedReport) return getResults({ lang: language, scores });

  return generateResultFromTemplate(scores, createTemplate(translatedReport));
}
