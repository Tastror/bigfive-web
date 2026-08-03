import { getTranslations } from 'next-intl/server';

export type SiteConfig = typeof siteConfig;

export const basePath = 'https://big5.tastror.com';

export const supportEmail = 'bigfive-test@rubynor.com';

export type Language = {
  code: string;
  name: string;
  countryCode?: string;
  map?: string[];
};

const preferredLanguages: Language[] = [
  {
    code: 'zh-hans',
    name: '简体中文',
    countryCode: 'cn',
    map: ['zh', 'zh-CN', 'zh-SG']
  },
  {
    code: 'zh-hant',
    name: '繁體中文',
    countryCode: 'hk',
    map: ['zh-TW', 'zh-HK', 'zh-MO']
  },
  { code: 'en', name: 'English', countryCode: 'us', map: ['en-GB'] }
];

const additionalLanguages: Language[] = [
  { code: 'ar', name: 'العربية', map: ['ar-sa'] },
  { code: 'bg', name: 'Български', map: ['bg-BG'] },
  { code: 'bn', name: 'বাংলা', map: ['bn-BD'] },
  { code: 'ca', name: 'Català', map: ['ca-ES'] },
  { code: 'cs', name: 'Čeština', map: ['cs-CZ'] },
  { code: 'da', name: 'Dansk', countryCode: 'dk' },
  { code: 'de', name: 'Deutsch', countryCode: 'de', map: ['de-DE'] },
  {
    code: 'es',
    name: 'Español',
    countryCode: 'es',
    map: ['es-ES', 'es-US', 'es-MX']
  },
  { code: 'et', name: 'Eesti', map: ['et-EE'] },
  { code: 'fa', name: 'فارسی', map: ['fa-IR'] },
  { code: 'fi', name: 'Suomi', countryCode: 'fi' },
  { code: 'fr', name: 'Français', countryCode: 'fr', map: ['fr-FR', 'fr-CA'] },
  { code: 'he', name: 'עברית', map: ['he-IL', 'iw'] },
  { code: 'hi', name: 'हिन्दी', countryCode: 'in' },
  { code: 'hr', name: 'Hrvatski', map: ['hr-HR'] },
  { code: 'hu', name: 'Magyar', map: ['hu-HU'] },
  { code: 'hy', name: 'Հայերեն', map: ['hy-AM'] },
  { code: 'id', name: 'Bahasa Indonesia', countryCode: 'id' },
  { code: 'is', name: 'Íslenska', countryCode: 'is' },
  { code: 'it', name: 'Italiano', countryCode: 'it', map: ['it-IT'] },
  { code: 'ja', name: '日本語', countryCode: 'jp' },
  { code: 'ko', name: '한국어', countryCode: 'kr' },
  { code: 'nl', name: 'Nederlands', map: ['nl-NL', 'nl-BE'] },
  { code: 'no', name: 'Norsk', countryCode: 'no', map: ['nb', 'nn'] },
  { code: 'pl', name: 'Polski', countryCode: 'pl' },
  {
    code: 'pt',
    name: 'Português',
    countryCode: 'pt',
    map: ['pt-PT']
  },
  { code: 'pt-br', name: 'Português (Brasil)', map: ['pt-BR'] },
  { code: 'ro', name: 'Română', map: ['ro-RO'] },
  { code: 'ru', name: 'Русский', countryCode: 'ru' },
  { code: 'sl', name: 'Slovenščina', map: ['sl-SI'] },
  { code: 'sq', name: 'Shqip', map: ['sq-AL'] },
  { code: 'sr', name: 'Srpski', map: ['sr-RS'] },
  { code: 'ss', name: 'siSwati', map: ['ss-SZ'] },
  { code: 'sv', name: 'Svenska', countryCode: 'se' },
  { code: 'th', name: 'ไทย', countryCode: 'th' },
  { code: 'tr', name: 'Türkçe', map: ['tr-TR'] },
  { code: 'uk', name: 'Українська', countryCode: 'ua' },
  { code: 'ur', name: 'اردو', map: ['ur-PK'] },
  { code: 'vi', name: 'Tiếng Việt', map: ['vi-VN'] }
];

const languageNameCollator = new Intl.Collator('en', {
  sensitivity: 'base',
  usage: 'sort'
});

export const languages: Language[] = [
  ...preferredLanguages,
  ...additionalLanguages.sort((first, second) =>
    languageNameCollator.compare(first.name, second.name)
  )
];

export const locales = languages.map((lang) => lang.code) as string[];

export const siteConfig = {
  name: 'Big Five Personality Test',
  creator: '@Tastror',
  description:
    'Learn to know yourself better with a free, open-source personality test.',
  navItems: [
    {
      label: 'home',
      href: '/'
    },
    {
      label: 'result',
      href: '/result'
    },
    {
      label: 'compare',
      href: '/compare'
    },
    {
      label: 'personality',
      href: '/personality'
    }
  ],
  navMenuItems: [
    {
      label: 'home',
      href: '/'
    },
    {
      label: 'see_results',
      href: '/result'
    },
    {
      label: 'compare_with',
      href: '/compare'
    },
    {
      label: 'personality',
      href: '/personality'
    }
  ],
  links: {
    github: 'https://github.com/Tastror/bigfive-web'
  }
};

export const getNavItems = async ({
  locale,
  linkType
}: {
  locale: string;
  linkType: 'navItems' | 'navMenuItems';
}) => {
  const t = await getTranslations({ locale, namespace: 'toolbar' });
  const { getPersonalityGuideMessages } = await import(
    '@/lib/personality-guide'
  );
  return siteConfig[linkType].map((link) => ({
    label:
      link.label === 'personality'
        ? getPersonalityGuideMessages(locale).title
        : t(`${link.label}`),
    href: link.href
  }));
};
