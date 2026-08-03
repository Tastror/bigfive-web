'use client';
import { ChangeEvent } from 'react';
import { useLocale } from 'next-intl';
import { languages } from '../config/site';
import { Select, SelectItem } from '@nextui-org/select';

interface LocaleSwitcherProps {
  compact?: boolean;
  label: string;
}

export default function LocaleSwitcher({
  compact = false,
  label
}: LocaleSwitcherProps) {
  const locale = useLocale();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    if (
      nextLocale === locale ||
      !languages.some((language) => language.code === nextLocale)
    )
      return;

    const [, currentLocale = '', ...segments] =
      window.location.pathname.split('/');
    const pathname = languages.some(
      (language) => language.code === currentLocale
    )
      ? `/${segments.join('/')}`
      : window.location.pathname;
    const route = pathname === '/' ? '' : pathname;

    document.cookie = `NEXT_LOCALE=${encodeURIComponent(nextLocale)}; Path=/; Max-Age=31536000; SameSite=Lax`;
    window.location.replace(
      `/${nextLocale}${route}${window.location.search}${window.location.hash}`
    );
  }
  return (
    <div className={compact ? 'w-36 min-[360px]:w-40' : 'w-40'}>
      <Select
        name='localeSelect'
        selectedKeys={[locale]}
        onChange={onSelectChange}
        aria-label={label}
        size={compact ? 'sm' : 'md'}
        classNames={
          compact
            ? {
                trigger: 'min-w-0 px-2',
                value: 'text-xs truncate'
              }
            : undefined
        }
      >
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code} textValue={lang.name}>
            {lang.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
