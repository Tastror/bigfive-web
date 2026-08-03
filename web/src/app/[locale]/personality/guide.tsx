import type { Report } from '@/actions';
import {
  getPersonalityGuideDomains,
  getPersonalityGuideMessages
} from '@/lib/personality-guide';
import { getPersonalityFacetInsight } from '@/lib/personality-insights';
import { getPersonalityFacetStrength } from '@/lib/personality-strengths';
import type { Score } from '@/lib/localized-results';
import clsx from 'clsx';

interface PersonalityGuideProps {
  locale: string;
  report?: Report;
  scoreLabel?: string;
}

const activeLevelStyles: Record<Score, string> = {
  low: 'border-sky-400 bg-sky-50/60 dark:border-sky-600 dark:bg-sky-950/20',
  neutral:
    'border-amber-400 bg-amber-50/60 dark:border-amber-600 dark:bg-amber-950/20',
  high: 'border-rose-400 bg-rose-50/60 dark:border-rose-600 dark:bg-rose-950/20'
};

export function PersonalityGuide({
  locale,
  report,
  scoreLabel
}: PersonalityGuideProps) {
  const messages = getPersonalityGuideMessages(locale);
  const domains = getPersonalityGuideDomains(locale);
  const sentenceSeparator = ['zh-hans', 'zh-hant', 'ja', 'th'].includes(locale)
    ? ''
    : ' ';

  return (
    <section className='mx-auto w-full max-w-4xl pb-20 sm:pb-28'>
      <header className='border-b border-default-200 pb-8 sm:pb-10'>
        <h1 className='text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl'>
          {messages.title}
        </h1>
        <p className='mt-4 max-w-3xl text-pretty text-base leading-8 text-default-600 sm:text-lg'>
          {messages.intro}
        </p>
      </header>

      <section className='border-b border-default-200 py-8 sm:py-10'>
        <h2 className='text-xl font-semibold sm:text-2xl'>
          {messages.scaleTitle}
        </h2>
        <p className='mt-3 max-w-3xl leading-7 text-default-600'>
          {messages.scaleText}
          {sentenceSeparator}
          {messages.note}
        </p>
      </section>

      <div className='divide-y divide-default-200'>
        {domains.map((domain) => {
          const result = report?.results.find(
            (item) => item.domain === domain.domain
          );
          const level = report?.levels[domain.domain]?.level;

          return (
            <article
              id={`domain-${domain.domain}`}
              key={domain.domain}
              className='scroll-mt-28 py-12 sm:py-16'
            >
              <header>
                <h2 className='text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl'>
                  {domain.title}
                </h2>
                {result && scoreLabel && (
                  <p className='mt-3 font-medium text-secondary'>
                    {scoreLabel}: {result.score} ({result.scoreText})
                  </p>
                )}
                <p className='mt-3 max-w-3xl text-base leading-7 text-default-600 sm:text-lg'>
                  {domain.shortDescription}
                </p>
              </header>

              <section className='mt-8 border-y border-default-200'>
                <h3 className='sr-only'>{messages.domainGuide}</h3>
                <div
                  className={clsx(
                    'py-5',
                    level === 'low' &&
                      `border-s-4 ps-4 ${activeLevelStyles.low}`
                  )}
                >
                  <h4 className='font-semibold'>{messages.lower}</h4>
                  <p className='mt-2 whitespace-pre-line leading-7 text-default-600'>
                    {domain.levels.low}
                  </p>
                </div>
                {level === 'neutral' && (
                  <div
                    className={`border-t border-default-200 border-s-4 py-5 ps-4 ${activeLevelStyles.neutral}`}
                  >
                    <h4 className='font-semibold'>{messages.middle}</h4>
                    <p className='mt-2 whitespace-pre-line leading-7 text-default-600'>
                      {domain.levels.neutral}
                    </p>
                  </div>
                )}
                <div
                  className={clsx(
                    'border-t border-default-200 py-5',
                    level === 'high' &&
                      `border-s-4 ps-4 ${activeLevelStyles.high}`
                  )}
                >
                  <h4 className='font-semibold'>{messages.higher}</h4>
                  <p className='mt-2 whitespace-pre-line leading-7 text-default-600'>
                    {domain.levels.high}
                  </p>
                </div>
              </section>

              <section className='mt-10'>
                <h3 className='text-xl font-semibold sm:text-2xl'>
                  {messages.facets}
                </h3>
                <div className='mt-4 divide-y divide-default-200 border-y border-default-200'>
                  {domain.facets.map((facet) => {
                    const insight = getPersonalityFacetInsight(
                      locale,
                      domain.domain,
                      facet.facet
                    );
                    const strength = getPersonalityFacetStrength(
                      locale,
                      domain.domain,
                      facet.facet
                    );
                    const facetResult = result?.facets.find(
                      (item) => item.facet === facet.facet
                    );
                    const facetLevel =
                      report?.levels[domain.domain]?.facets[
                        facet.facet.toString()
                      ];

                    return (
                      <article key={facet.facet} className='py-8 sm:py-10'>
                        <h4 className='text-xl font-medium sm:text-2xl'>
                          {facet.title}
                        </h4>
                        {facetResult && scoreLabel && (
                          <p className='mt-2 text-sm font-medium text-secondary'>
                            {scoreLabel}: {facetResult.score} (
                            {facetResult.scoreText})
                          </p>
                        )}
                        <p
                          className={clsx(
                            'mt-3 whitespace-pre-line leading-7 text-default-700',
                            facetLevel === 'neutral' &&
                              `border-s-4 py-3 ps-4 pe-4 ${activeLevelStyles.neutral}`
                          )}
                        >
                          {facet.text}
                        </p>

                        <div className='mt-6 space-y-6'>
                          <section
                            className={clsx(
                              'ps-4 sm:ps-5',
                              facetLevel === 'low'
                                ? `border-s-4 py-3 pe-4 ${activeLevelStyles.low}`
                                : 'border-s-2 border-sky-300 dark:border-sky-700'
                            )}
                          >
                            <h5 className='font-semibold'>{messages.lower}</h5>
                            <p className='mt-2 leading-7 text-default-600'>
                              {strength.low}
                              {sentenceSeparator}
                              {insight.low}
                            </p>
                          </section>
                          <section
                            className={clsx(
                              'ps-4 sm:ps-5',
                              facetLevel === 'high'
                                ? `border-s-4 py-3 pe-4 ${activeLevelStyles.high}`
                                : 'border-s-2 border-rose-300 dark:border-rose-700'
                            )}
                          >
                            <h5 className='font-semibold'>{messages.higher}</h5>
                            <p className='mt-2 leading-7 text-default-600'>
                              {strength.high}
                              {sentenceSeparator}
                              {insight.high}
                            </p>
                          </section>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            </article>
          );
        })}
      </div>

      <section className='border-t border-default-200 pt-10 sm:pt-12'>
        <h2 className='text-xl font-semibold sm:text-2xl'>
          {messages.sourcesTitle}
        </h2>
        <p className='mt-3 leading-7 text-default-600'>
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
            href='https://ipip.ori.org/30FacetNEO-PI-RItems.htm'
            target='_blank'
            rel='noreferrer'
            className='font-medium text-secondary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary'
          >
            IPIP: 30 NEO-PI-R facet scales (Johnson, 2014) ↗
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
      </section>
    </section>
  );
}
