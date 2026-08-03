import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import {
  getPersonalityGuideDomains,
  getPersonalityGuideMessages
} from '@/lib/personality-guide';

interface Props {
  params: { locale: string };
}

const domainStyles: Record<
  string,
  { border: string; badge: string; surface: string; dot: string }
> = {
  O: {
    border: 'border-violet-200 dark:border-violet-900/70',
    badge:
      'bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-200',
    surface: 'bg-violet-50/70 dark:bg-violet-950/20',
    dot: 'bg-violet-500'
  },
  C: {
    border: 'border-sky-200 dark:border-sky-900/70',
    badge: 'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-200',
    surface: 'bg-sky-50/70 dark:bg-sky-950/20',
    dot: 'bg-sky-500'
  },
  E: {
    border: 'border-fuchsia-200 dark:border-fuchsia-900/70',
    badge:
      'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-950 dark:text-fuchsia-200',
    surface: 'bg-fuchsia-50/70 dark:bg-fuchsia-950/20',
    dot: 'bg-fuchsia-500'
  },
  A: {
    border: 'border-amber-200 dark:border-amber-900/70',
    badge: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200',
    surface: 'bg-amber-50/70 dark:bg-amber-950/20',
    dot: 'bg-amber-500'
  },
  N: {
    border: 'border-rose-200 dark:border-rose-900/70',
    badge: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-200',
    surface: 'bg-rose-50/70 dark:bg-rose-950/20',
    dot: 'bg-rose-500'
  }
};

const levelStyles = [
  'border-sky-200 bg-sky-50/60 dark:border-sky-900/70 dark:bg-sky-950/20',
  'border-default-200 bg-default-50/70 dark:border-default-100/20 dark:bg-default-50/5',
  'border-violet-200 bg-violet-50/60 dark:border-violet-900/70 dark:bg-violet-950/20'
];

export async function generateMetadata({
  params: { locale }
}: Props): Promise<Metadata> {
  const messages = getPersonalityGuideMessages(locale);

  return {
    title: messages.title,
    description: messages.seoDescription
  };
}

export default function PersonalityGuidePage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const messages = getPersonalityGuideMessages(locale);
  const domains = getPersonalityGuideDomains(locale);
  const levels = [
    {
      key: 'low' as const,
      label: messages.lower,
      meaning: messages.lowerMeaning
    },
    {
      key: 'neutral' as const,
      label: messages.middle,
      meaning: messages.middleMeaning
    },
    {
      key: 'high' as const,
      label: messages.higher,
      meaning: messages.higherMeaning
    }
  ];

  return (
    <section id='top' className='mx-auto w-full max-w-6xl pb-20 sm:pb-28'>
      <header className='relative isolate overflow-hidden rounded-[2rem] border border-default-200 bg-gradient-to-br from-content1 via-content1 to-secondary-50 px-5 py-10 shadow-sm dark:to-secondary-950/30 sm:px-10 sm:py-14 lg:px-14'>
        <div
          aria-hidden='true'
          className='absolute -end-24 -top-28 -z-10 h-72 w-72 rounded-full bg-secondary-200/40 blur-3xl dark:bg-secondary-900/20'
        />
        <div
          aria-hidden='true'
          className='absolute -bottom-32 -start-24 -z-10 h-64 w-64 rounded-full bg-primary-200/30 blur-3xl dark:bg-primary-900/20'
        />

        <h1 className='max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl'>
          {messages.title}
        </h1>
        <p className='mt-5 max-w-3xl text-pretty text-base leading-8 text-default-600 sm:text-lg'>
          {messages.intro}
        </p>

        <nav
          aria-label={messages.facets}
          className='mt-8 flex max-w-full gap-2 overflow-x-auto pb-1'
        >
          {domains.map((domain, index) => {
            const style = domainStyles[domain.domain];
            return (
              <a
                key={domain.domain}
                href={`#domain-${domain.domain}`}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5 ${style.border} ${style.badge}`}
              >
                <span className={`h-2 w-2 rounded-full ${style.dot}`} />
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{domain.title}</span>
              </a>
            );
          })}
        </nav>
      </header>

      <section className='mt-6 rounded-3xl border border-default-200 bg-content1 p-5 shadow-sm sm:p-7'>
        <div className='max-w-3xl'>
          <h2 className='text-xl font-semibold sm:text-2xl'>
            {messages.scaleTitle}
          </h2>
          <p className='mt-2 leading-7 text-default-600'>
            {messages.scaleText}
          </p>
        </div>
        <div className='mt-6 grid gap-3 sm:grid-cols-3'>
          {levels.map((level, index) => (
            <div
              key={level.key}
              className={`rounded-2xl border p-4 ${levelStyles[index]}`}
            >
              <div className='flex items-center gap-2 font-semibold'>
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    index === 0
                      ? 'bg-sky-500'
                      : index === 1
                        ? 'bg-default-400'
                        : 'bg-violet-500'
                  }`}
                />
                {level.label}
              </div>
              <p className='mt-2 text-sm leading-6 text-default-600'>
                {level.meaning}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className='mt-12 space-y-10 sm:mt-16 sm:space-y-14'>
        {domains.map((domain, domainIndex) => {
          const style = domainStyles[domain.domain];

          return (
            <article
              id={`domain-${domain.domain}`}
              key={domain.domain}
              className={`scroll-mt-28 overflow-hidden rounded-[2rem] border bg-content1 shadow-sm ${style.border}`}
            >
              <header className={`px-5 py-7 sm:px-8 sm:py-9 ${style.surface}`}>
                <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
                  <div>
                    <div
                      className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${style.badge}`}
                    >
                      {String(domainIndex + 1).padStart(2, '0')}
                    </div>
                    <h2 className='mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl'>
                      {domain.title}
                    </h2>
                    <p className='mt-3 max-w-3xl text-base leading-7 text-default-600 sm:text-lg'>
                      {domain.shortDescription}
                    </p>
                  </div>
                  <a
                    href='#top'
                    aria-label={messages.title}
                    className='hidden rounded-full border border-default-200 bg-content1 px-3 py-1.5 text-sm text-default-500 hover:text-foreground sm:inline-flex'
                  >
                    ↑
                  </a>
                </div>
              </header>

              <div className='px-5 py-7 sm:px-8 sm:py-9'>
                <h3 className='text-lg font-semibold'>
                  {messages.domainGuide}
                </h3>
                <div className='mt-4 grid gap-4 lg:grid-cols-3'>
                  {levels.map((level, index) => (
                    <section
                      key={level.key}
                      className={`rounded-2xl border p-5 ${levelStyles[index]}`}
                    >
                      <h4 className='font-semibold'>{level.label}</h4>
                      <p className='mt-3 whitespace-pre-line text-sm leading-7 text-default-700'>
                        {domain.levels[level.key]}
                      </p>
                    </section>
                  ))}
                </div>

                <div className='mt-9 flex items-end justify-between gap-4'>
                  <div>
                    <h3 className='text-xl font-semibold sm:text-2xl'>
                      {messages.facets}
                    </h3>
                    <p className='mt-1 text-sm text-default-500'>
                      {messages.viewLevels}
                    </p>
                  </div>
                  <span
                    aria-hidden='true'
                    className={`h-2.5 w-16 rounded-full ${style.dot}`}
                  />
                </div>

                <div className='mt-5 grid items-start gap-4 lg:grid-cols-2'>
                  {domain.facets.map((facet) => (
                    <details
                      key={facet.facet}
                      className='group overflow-hidden rounded-2xl border border-default-200 bg-content1 open:shadow-md'
                    >
                      <summary className='flex min-h-20 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden'>
                        <div className='flex min-w-0 items-center gap-3'>
                          <span
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-semibold ${style.badge}`}
                          >
                            {facet.facet}
                          </span>
                          <div className='min-w-0'>
                            <h4 className='font-semibold leading-6'>
                              {facet.title}
                            </h4>
                            <p className='mt-0.5 text-xs text-default-500'>
                              {messages.viewLevels}
                            </p>
                          </div>
                        </div>
                        <span
                          aria-hidden='true'
                          className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-default-100 text-xl leading-none transition-transform group-open:rotate-45'
                        >
                          +
                        </span>
                      </summary>

                      <div className='border-t border-default-200 px-5 pb-5 pt-4'>
                        <p className='text-xs font-semibold uppercase tracking-[0.14em] text-default-500'>
                          {messages.facetIntro}
                        </p>
                        <p className='mt-3 whitespace-pre-line text-sm leading-7 text-default-700'>
                          {facet.text}
                        </p>

                        <div className='mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3'>
                          {levels.map((level, index) => (
                            <div
                              key={level.key}
                              className={`rounded-xl border p-3.5 ${levelStyles[index]}`}
                            >
                              <h5 className='text-sm font-semibold'>
                                {level.label}
                              </h5>
                              <p className='mt-1.5 text-xs leading-5 text-default-600'>
                                {level.meaning}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <section className='mt-12 grid gap-4 rounded-3xl border border-default-200 bg-content1 p-5 shadow-sm sm:mt-16 sm:p-8 lg:grid-cols-[1.2fr_0.8fr]'>
        <div>
          <h2 className='text-xl font-semibold sm:text-2xl'>
            {messages.sourcesTitle}
          </h2>
          <p className='mt-3 max-w-3xl leading-7 text-default-600'>
            {messages.sourcesText}
          </p>
          <div className='mt-5 flex flex-col items-start gap-3 text-sm'>
            <a
              href='https://ipip.ori.org/InterpretingIndividualIPIPScaleScores.htm'
              target='_blank'
              rel='noreferrer'
              className='font-medium text-secondary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary'
            >
              {messages.sourceIpip} ↗
            </a>
            <a
              href='https://doi.org/10.1016/j.jrp.2014.05.003'
              target='_blank'
              rel='noreferrer'
              className='font-medium text-secondary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary'
            >
              {messages.sourceJohnson} ↗
            </a>
          </div>
        </div>

        <aside className='rounded-2xl border border-secondary-200 bg-secondary-50/60 p-5 dark:border-secondary-900/70 dark:bg-secondary-950/20'>
          <h3 className='font-semibold'>{messages.noteTitle}</h3>
          <p className='mt-2 text-sm leading-7 text-default-700'>
            {messages.note}
          </p>
        </aside>
      </section>
    </section>
  );
}
