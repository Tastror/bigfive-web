'use client';

import { FC } from 'react';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { SwitchProps, useSwitch } from '@nextui-org/switch';
import { useTheme } from 'next-themes';
import { useIsSSR } from '@react-aria/ssr';
import clsx from 'clsx';

import { SunFilledIcon, MoonFilledIcon } from '@/components/icons';
import { useLocale } from 'next-intl';
import { getUiMessages } from '@/lib/ui-messages';

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps['classNames'];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames
}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();
  const ui = getUiMessages(useLocale());

  const onChange = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps
  } = useSwitch({
    isSelected: theme === 'light' || isSSR,
    'aria-label':
      theme === 'light' || isSSR ? ui.switchToDarkMode : ui.switchToLightMode,
    onChange
  });

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          'px-px transition-opacity hover:opacity-80 cursor-pointer',
          className,
          classNames?.base
        )
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              'w-auto h-auto',
              'bg-transparent',
              'rounded-lg',
              'flex items-center justify-center',
              'group-data-[selected=true]:bg-transparent',
              '!text-default-500',
              'pt-px',
              'px-0',
              'mx-0'
            ],
            classNames?.wrapper
          )
        })}
      >
        {!isSelected || isSSR ? (
          <SunFilledIcon size={22} />
        ) : (
          <MoonFilledIcon size={22} />
        )}
      </div>
    </Component>
  );
};
