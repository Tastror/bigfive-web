import { useTranslations } from 'next-intl';
import { Link } from '@nextui-org/link';
import { button as buttonStyles } from '@nextui-org/theme';
import { title, subtitle } from '@/components/primitives';
import clsx from 'clsx';
import { FeaturesGrid } from '@/components/features-grid';
import {
  ExperimentIcon,
  LogosOpensource,
  MoneyIcon,
  PlusLinearIcon
} from '@/components/icons';
import { ArrowRightIcon } from '@/components/icons';
import { SonarPulse } from '@/components/sonar-pulse';
import { Button } from '@nextui-org/button';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Chip, Tooltip } from '@nextui-org/react';

interface Props {
  params: { locale: string };
}

export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('frontpage');
  const f = useTranslations('facets');

  const features = [
    {
      title: t('cards.open.title'),
      description: t('cards.open.text'),
      icon: LogosOpensource({})
    },
    {
      title: t('cards.free.title'),
      description: t('cards.free.text'),
      icon: MoneyIcon({})
    },
    {
      title: t('cards.scientific.title'),
      description: t('cards.scientific.text'),
      icon: ExperimentIcon({})
    }
  ];

  const titleDescription = t.rich('description.top', {
    wiki: (chunks) => (
      <span className={title({ color: 'violet' })}>
        {chunks}
        <sup className='ml-1 align-super text-sm font-normal'>
          <Link
            isExternal
            href={getBigFiveWikipediaUrl(locale)}
            aria-label={t('description.wikipedia')}
            className='text-secondary'
          >
            [1]
          </Link>
        </sup>
      </span>
    )
  });

  return (
    <section className='relative'>
      <div>
        <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
          <div className='flex relative z-20 flex-col gap-6 w-full lg:w-1/2 xl:mt-10'>
            <div className='text-center justify-center mt-10'>
              <h1 className={title()}>{titleDescription}</h1>
              <br />
              <h2 className={subtitle({ class: 'mt-4' })}>
                {t('description.info')}
              </h2>
            </div>

            <div className='flex items-center justify-center'>
              <Link
                href='/test'
                className={clsx(
                  buttonStyles({
                    color: 'primary',
                    radius: 'full',
                    variant: 'shadow',
                    size: 'lg',
                    fullWidth: true
                  }),
                  'md:w-auto'
                )}
              >
                {t('call_to_action')} <ArrowRightIcon />
              </Link>
            </div>
          </div>

          <div className='font-normal text-default-500 block max-w-full text-center'>
            {t('no_registration')}
          </div>
        </section>

        <div className='mt-20 mx-2'>
          <FeaturesGrid features={features} />
        </div>
      </div>

      <div className='mt-20 text-center'>
        <h1 className={title()}>{t('compare.title')}</h1>

        <div className='mt-10'>
          <div className='text-lg lg:text-xl font-normal text-default-500'>
            {t('compare.text1')} {t('compare.text2')}
          </div>
        </div>
      </div>

      <div className='text-center h-64 md:h-80 mt-44 md:mt-56'>
        <SonarPulse
          color='#7928CA'
          icon={
            <Tooltip
              showArrow
              color='secondary'
              content={t('call_to_action')}
              offset={10}
              radius='full'
            >
              <Button
                isIconOnly
                aria-label={t('call_to_action')}
                className='z-50 w-auto h-auto bg-gradient-to-b from-[#FF1CF7] to-[#7928CA]'
                radius='full'
                as={Link}
                href='/test'
              >
                <PlusLinearIcon
                  className='flex items-center justify-center rounded-full text-white'
                  size={54}
                />
              </Button>
            </Tooltip>
          }
        >
          <div
            className='absolute rounded-full'
            style={{
              width: '130px',
              top: 130 / 6,
              left: -120
            }}
          >
            {buildCircle([
              {
                name: f('openness_to_experience.title')
              },
              {
                name: f('conscientiousness.title')
              },
              { name: f('extraversion.title') },
              {
                name: t('compare.action'),
                href: '/compare/W3sibmFtZSI6Ik1hcnZpbiIsImlkIjoiNThhNzA2MDZhODM1YzQwMGM4YjM4ZTg0In0seyJuYW1lIjoiQXJ0aHVyIERlbnQiLCJpZCI6IjVlNTZiYTdhYjA5NjEzMDAwN2Q1ZDZkOCJ9LHsibmFtZSI6IkZvcmQgUGVyZmVjdCIsImlkIjoiNWRlYTllODhlMTA4Y2IwMDYyMTgzYWYzIn0seyJuYW1lIjoiU2xhcnRpYmFydGZhc3QiLCJpZCI6IjVlNTZiNjUwYjA5NjEzMDAwN2Q1ZDZkMCJ9XQ'
              },
              {
                name: f('agreeableness.title')
              },
              { name: f('neuroticism.title') }
            ]).map((e, idx) => (
              <div key={idx}>
                {e.href ? (
                  <Button
                    name={e.name}
                    style={e.style}
                    className='absolute hidden md:inline-flex hover:bg-secondary'
                    variant='bordered'
                    as={Link}
                    href={e.href}
                    aria-label={e.name}
                  >
                    {e.name}
                  </Button>
                ) : (
                  <Button
                    name={e.name}
                    style={e.style}
                    className='absolute hidden md:inline-flex'
                    variant='bordered'
                    as='span'
                    aria-label={e.name}
                  >
                    {e.name}
                  </Button>
                )}
                {e.href ? (
                  <Chip
                    size='sm'
                    color='secondary'
                    variant='shadow'
                    aria-label={e.name}
                    classNames={{
                      base: 'absolute md:hidden rounded-full left-[85px]',
                      content: 'drop-shadow shadow-black text-white w-full w-36'
                    }}
                    style={e.smallStyle}
                    as={Link}
                    href={e.href}
                  >
                    {e.name}
                  </Chip>
                ) : (
                  <Chip
                    size='sm'
                    color='secondary'
                    variant='shadow'
                    aria-label={e.name}
                    classNames={{
                      base: 'absolute md:hidden rounded-full left-[85px]',
                      content: 'drop-shadow shadow-black text-white w-full w-36'
                    }}
                    style={e.smallStyle}
                    as='span'
                  >
                    {e.name}
                  </Chip>
                )}
              </div>
            ))}
          </div>
        </SonarPulse>
      </div>
    </section>
  );
}
const buildCircle = (list: { name: string; href?: string }[]) => {
  const num = list.length; // Number of Avatars
  const radius = 180; // Distance from center
  const start = -90; // Shift start from 0
  const slice = 360 / num;

  return list.map((item, idx) => {
    const rotate = slice * idx + start;
    return {
      name: item.name,
      href: item.href,
      style: {
        transform: `rotate(${rotate}deg) translate(${radius - 20}px) rotate(${-rotate}deg)`,
        width: '195px'
      },
      smallStyle: {
        transform: `rotate(${rotate}deg) translate(${radius - 60}px) rotate(${-rotate}deg)`
      }
    };
  });
};

const wikipediaPages: Record<string, string> = {
  ar: 'https://ar.wikipedia.org/wiki/عناصر_الشخصية_الخمسة',
  da: 'https://da.wikipedia.org/wiki/Femfaktormodellen',
  de: 'https://de.wikipedia.org/wiki/Big_Five_(Psychologie)',
  en: 'https://en.wikipedia.org/wiki/Big_Five_personality_traits',
  es: 'https://es.wikipedia.org/wiki/Modelo_de_los_cinco_grandes',
  fi: 'https://fi.wikipedia.org/wiki/Viiden_suuren_persoonallisuuspiirteen_teoria',
  fr: 'https://fr.wikipedia.org/wiki/Modèle_des_Big_Five_(psychologie)',
  hi: 'https://hi.wikipedia.org/wiki/बिग_फ़ाइव_व्यक्तित्व_लक्षण',
  id: 'https://id.wikipedia.org/wiki/Kepribadian_Big_Five',
  it: 'https://it.wikipedia.org/wiki/Big_Five_(psicologia)',
  ja: 'https://ja.wikipedia.org/wiki/ビッグファイブ_(心理学)',
  pl: 'https://pl.wikipedia.org/wiki/Wielka_piątka',
  pt: 'https://pt.wikipedia.org/wiki/Cinco_grandes_(psicologia)',
  ru: 'https://ru.wikipedia.org/wiki/Большая_пятёрка_(психология)',
  sv: 'https://sv.wikipedia.org/wiki/Femfaktorteorin',
  th: 'https://th.wikipedia.org/wiki/ลักษณะบุคลิกภาพใหญ่ทั้งห้า',
  uk: "https://uk.wikipedia.org/wiki/Велика_п'ятірка_(психологія)",
  'zh-hans': 'https://zh.wikipedia.org/zh-cn/五大性格特质',
  'zh-hant': 'https://zh.wikipedia.org/zh-tw/五大性格特質'
};

const getBigFiveWikipediaUrl = (locale: string) =>
  wikipediaPages[locale] || wikipediaPages.en;
