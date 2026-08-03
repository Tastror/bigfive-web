import { Link as NextUILink } from '@nextui-org/link';
import { siteConfig } from '@/config/site';

const officialLocales = new Set([
  'sq',
  'ar',
  'hy',
  'bn',
  'pt-br',
  'bg',
  'ca',
  'zh-cn',
  'zh-hant',
  'hr',
  'cs',
  'da',
  'de',
  'nl',
  'en',
  'et',
  'fi',
  'fr',
  'he',
  'hi',
  'hu',
  'is',
  'id',
  'it',
  'ja',
  'ko',
  'no',
  'fa',
  'pl',
  'pt',
  'ro',
  'ru',
  'sr',
  'ss',
  'sl',
  'es',
  'sv',
  'th',
  'tr',
  'uk',
  'ur',
  'vi'
]);

function getOfficialLocale(locale: string) {
  const mappedLocale = locale === 'zh-hans' ? 'zh-cn' : locale;
  return officialLocales.has(mappedLocale) ? mappedLocale : 'en';
}

export default function Footer({ locale }: { locale: string }) {
  const year = new Date().getFullYear();
  const officialLocale = getOfficialLocale(locale);
  return (
    <footer className='container mx-auto max-w-7xl px-4 py-8'>
      <div className='flex flex-col items-center gap-2 text-center text-sm text-gray-500 sm:py-2'>
        <div className='flex flex-wrap justify-center gap-x-2' dir='ltr'>
          <bdi>© 2024 B5 Holding AS</bdi>
          <span aria-hidden='true'>·</span>
          <bdi>© {year} Tastror</bdi>
        </div>
        <div className='flex flex-wrap justify-center gap-x-2' dir='ltr'>
          <NextUILink
            isExternal
            href={`https://bigfive-test.com/${officialLocale}`}
            className='text-sm text-gray-500 hover:underline'
          >
            BigFive Test
          </NextUILink>
          <span aria-hidden='true'>·</span>
          <NextUILink
            isExternal
            href={`${siteConfig.links.github}/blob/master/LICENSE`}
            className='text-sm text-gray-500 hover:underline'
          >
            MIT License
          </NextUILink>
        </div>
      </div>
    </footer>
  );
}
