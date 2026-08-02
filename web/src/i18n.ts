import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales } from './config/site';

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  const messageLocale =
    locale === 'zh-hans' || locale === 'zh-hant' ? 'zh' : locale;

  return {
    messages: (await import(`./messages/${messageLocale}.js`)).default
  };
});
