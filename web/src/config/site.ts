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

export const languages: Language[] = [
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
  { code: 'en', name: 'English', countryCode: 'us', map: ['en-GB'] },
  { code: 'ar', name: 'العربية', map: ['ar-sa'] },
  { code: 'de', name: 'Deutsch', countryCode: 'de', map: ['de-DE'] },
  {
    code: 'es',
    name: 'Español',
    countryCode: 'es',
    map: ['es-ES', 'es-US', 'es-MX', 'ca']
  },
  { code: 'fr', name: 'Français', countryCode: 'fr', map: ['fr-FR', 'fr-CA'] },
  { code: 'id', name: 'Bahasa Indonesia', countryCode: 'id' },
  { code: 'it', name: 'Italiano', countryCode: 'it', map: ['it-IT'] },
  { code: 'no', name: 'Norsk', countryCode: 'no', map: ['nb', 'nn'] },
  {
    code: 'pt',
    name: 'Português',
    countryCode: 'pt',
    map: ['pt-BR', 'pt-PT']
  },
  { code: 'sv', name: 'Svenska', countryCode: 'se' },
  { code: 'uk', name: 'Українська', countryCode: 'ua' },
  { code: 'da', name: 'Dansk', countryCode: 'dk' },
  { code: 'fi', name: 'Suomi', countryCode: 'fi' },
  { code: 'hi', name: 'हिन्दी', countryCode: 'in' },
  { code: 'is', name: 'Íslenska', countryCode: 'is' },
  { code: 'ja', name: '日本語', countryCode: 'jp' },
  { code: 'ko', name: '한국어', countryCode: 'kr' },
  { code: 'pl', name: 'Polski', countryCode: 'pl' },
  { code: 'ru', name: 'Русский', countryCode: 'ru' },
  { code: 'th', name: 'ไทย', countryCode: 'th' }
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
  return siteConfig[linkType].map((link) => ({
    label: t(`${link.label}`),
    href: link.href
  }));
};
