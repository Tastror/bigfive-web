import { title } from '@/components/primitives';
import { useTranslations } from 'next-intl';
import { ComparePeople } from './compare-people';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';
import { getErrorMessages } from '@/lib/error-messages';

interface Props {
  params: { locale: string };
  searchParams: { id: string };
}

export default function ComparePage({
  params: { locale },
  searchParams: { id }
}: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('getCompare');
  const common = useTranslations('common');
  const errors = getErrorMessages(locale);
  return (
    <div className='min-h-[60vh] pb-10'>
      <h1 className={title()}>{t('title')}</h1>
      <p className='mt-8'>{t('description1')}</p>
      <Suspense fallback='loading...'>
        <ComparePeople
          addPersonText={t('addPerson')}
          comparePeopleText={t('comparePeople')}
          nameText={t('nameOfPerson')}
          emptyText={t('needToAddPeople')}
          closeText={common('close')}
          saveText={common('save')}
          invalidIdText={errors.invalidResultId}
          duplicateIdText={errors.duplicateResultId}
          paramId={id}
        />
      </Suspense>
    </div>
  );
}
