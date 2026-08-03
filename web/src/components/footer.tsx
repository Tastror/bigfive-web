import { Link as NextUILink } from '@nextui-org/link';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='container mx-auto max-w-7xl px-4 py-8'>
      <div className='flex flex-col items-center gap-2 text-center text-sm text-gray-500 sm:py-2'>
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
