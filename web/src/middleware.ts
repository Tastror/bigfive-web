import { NextRequest, NextResponse } from 'next/server';
import { locales } from './config/site';

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [, requestedLocale = '', ...segments] = pathname.split('/');
  const localeAliases: Record<string, string> = {
    zh: 'zh-hans',
    'zh-cn': 'zh-hans',
    'zh-sg': 'zh-hans',
    'zh-tw': 'zh-hant',
    'zh-hk': 'zh-hant',
    'zh-mo': 'zh-hant'
  };
  const canonicalLocale = localeAliases[requestedLocale.toLowerCase()];

  if (canonicalLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${canonicalLocale}${segments.length ? `/${segments.join('/')}` : ''}`;
    return NextResponse.redirect(url, 308);
  }

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocalePrefix) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === '/' ? '' : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(en|ar|de|es|fr|id|it|no|pt|sv|uk|da|fi|hi|is|ja|pl|ru|th|zh)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};
