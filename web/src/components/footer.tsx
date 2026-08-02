import { Link as NextUILink } from '@nextui-org/link';
import { Link } from '../navigation';
import { GithubIcon, Logo } from '@/components/icons';
import { siteConfig } from '@/config/site';

interface FooterProps {
  footerLinks: {
    label: string;
    href: string;
  }[];
}

export default function Footer({ footerLinks }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className='container mx-auto max-w-7xl py-24 px-12'>
      <div className='container mx-auto flex justify-between'>
        <div className='w-1/2'>
          <span className='text-center'>
            <Logo />
          </span>
        </div>
        <div className='w-1/2 flex justify-end'>
          <NextUILink
            isExternal
            href={siteConfig.links.github}
            aria-label='Github'
          >
            <GithubIcon size={48} className='text-default-500' />
          </NextUILink>
        </div>
      </div>

      <div className='w-full flex justify-center mt-12'>
        <ul className='flex mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
          {footerLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className='hover:underline'>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex flex-col items-center gap-2 text-center text-sm text-gray-500 sm:py-2 mt-14'>
        <div>© 2024 B5 Holding AS · © {year} Tastror</div>
        <div className='flex flex-wrap justify-center gap-x-2'>
          <NextUILink
            isExternal
            href='https://bigfive-test.com/zh-cn'
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
