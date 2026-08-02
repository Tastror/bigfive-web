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
import { Button } from '@nextui-org/button';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Chip } from '@nextui-org/react';

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
      <span className='bg-gradient-to-b from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent'>
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
    <section className='relative overflow-x-clip'>
      <div>
        <section className='flex flex-col items-center justify-center gap-4 py-6 sm:py-10'>
          <div className='relative z-20 flex w-full max-w-4xl flex-col gap-6 xl:mt-8'>
            <div className='mt-6 text-center sm:mt-10'>
              <h1 className='mx-auto text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl'>
                {titleDescription}
              </h1>
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
                  'w-full sm:w-auto'
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

        <div className='mx-0 mt-14 sm:mx-2 sm:mt-20'>
          <FeaturesGrid features={features} />
        </div>
      </div>

      <section className='mx-auto mt-20 max-w-4xl text-center sm:mt-28'>
        <h2 className={title()}>{t('compare.title')}</h2>

        <div className='mt-6'>
          <p className='text-base font-normal text-default-500 sm:text-lg lg:text-xl'>
            {t('compare.text1')} {t('compare.text2')}
          </p>
        </div>
        <div className='mt-8 flex flex-wrap justify-center gap-2 sm:gap-3'>
          {[
            f('openness_to_experience.title'),
            f('conscientiousness.title'),
            f('extraversion.title'),
            f('agreeableness.title'),
            f('neuroticism.title')
          ].map((name) => (
            <Chip key={name} color='secondary' variant='flat'>
              {name}
            </Chip>
          ))}
        </div>

        <Button
          isIconOnly
          aria-label={t('compare.title')}
          className='mt-10 h-16 w-16 bg-gradient-to-b from-[#FF1CF7] to-[#7928CA] shadow-lg'
          radius='full'
          as={Link}
          href='/compare'
        >
          <PlusLinearIcon className='text-white' size={44} />
        </Button>
      </section>
    </section>
  );
}

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
  ko: 'https://ko.wikipedia.org/wiki/5요인_성격_특성',
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
