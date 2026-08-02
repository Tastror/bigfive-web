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
    const url = getPublicUrl(
      request,
      `/${canonicalLocale}${segments.length ? `/${segments.join('/')}` : ''}`
    );
    return NextResponse.redirect(url, 308);
  }

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocalePrefix) return NextResponse.next();

  return NextResponse.redirect(
    getPublicUrl(request, `/en${pathname === '/' ? '' : pathname}`),
    308
  );
}

function getPublicUrl(request: NextRequest, pathname: string) {
  const forwardedHost = request.headers
    .get('x-forwarded-host')
    ?.split(',')[0]
    .trim();
  const forwardedProto = request.headers
    .get('x-forwarded-proto')
    ?.split(',')[0]
    .trim();
  const protocol =
    forwardedProto === 'http' || forwardedProto === 'https'
      ? forwardedProto
      : request.nextUrl.protocol.slice(0, -1);
  const host = forwardedHost || request.nextUrl.host;
  const url = new URL(`${protocol}://${host}`);

  url.pathname = pathname;
  url.search = request.nextUrl.search;
  return url;
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(en|ar|de|es|fr|id|it|no|pt|sv|uk|da|fi|hi|is|ja|pl|ru|th|zh)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};
