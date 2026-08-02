'use client';
import { ChangeEvent } from 'react';
import { useLocale } from 'next-intl';
import { languages } from '../config/site';
import { Select, SelectItem } from '@nextui-org/select';
import { useRouter, usePathname } from '../navigation';

interface LocaleSwitcherProps {
  compact?: boolean;
}

export default function LocaleSwitcher({
  compact = false
}: LocaleSwitcherProps) {
  const locale = useLocale();

  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    router.replace(pathname, { locale: nextLocale });
  }
  return (
    <div className={compact ? 'w-32 min-[360px]:w-36' : 'w-40'}>
      <Select
        name='localeSelect'
        selectedKeys={[locale]}
        onChange={onSelectChange}
        aria-label='Select language'
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
