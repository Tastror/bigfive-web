'use client';

import { button as buttonStyles } from '@nextui-org/theme';
import clsx from 'clsx';
import { Button } from '@nextui-org/button';
import { formatAndValidateId, formatId } from '@/lib/helpers';
import { useEffect, useMemo, useState } from 'react';
import { Input } from '@nextui-org/input';
import { ResultIcon } from '@/components/icons';
import { getPreviousTestResult, type SavedResult } from '@/lib/result-history';

interface GetResultPageProps {
  viewPreviousText: string;
  getResultsText: string;
  invalidIdText: string;
  locale: string;
}

export const GetResultPage = ({
  viewPreviousText,
  getResultsText,
  invalidIdText,
  locale
}: GetResultPageProps) => {
  const [previousResult, setPreviousResult] = useState<SavedResult | null>(
    null
  );
  const [id, setId] = useState('');

  const isInvalidId = useMemo(() => {
    if (id === '') return false;

    return !formatAndValidateId(id);
  }, [id]);

  useEffect(() => {
    setPreviousResult(getPreviousTestResult());
  }, []);

  const handleGetResults = () => {
    if (!formatAndValidateId(id)) return;

    window.location.assign(`/${locale}/result/${formatId(id)}`);
  };

  return (
    <>
      <div className='flow-root w-full mt-4 mb-3'>
        <Input
          type='text'
          label='ID'
          labelPlacement='outside'
          placeholder='58a70606a835c400c8b38e84'
          startContent={
            <ResultIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
          }
          isInvalid={isInvalidId}
          errorMessage={isInvalidId ? invalidIdText : undefined}
          color={isInvalidId ? 'danger' : 'default'}
          onValueChange={setId}
          value={id}
        />
      </div>
      <div className='flex justify-end gap-3'>
        <Button
          color='primary'
          size='lg'
          className='w-full md:w-auto'
          onClick={handleGetResults}
          isDisabled={id === '' || isInvalidId}
        >
          {getResultsText}
        </Button>
      </div>
      {previousResult && (
        <div className='mt-10' aria-label={viewPreviousText}>
          <h2 className='text-xl font-semibold mb-3'>{viewPreviousText}</h2>
          <div className='grid gap-3'>
            <a
              className={clsx(
                buttonStyles({ variant: 'bordered', size: 'lg' }),
                'h-auto min-h-12 justify-between gap-3 px-4 py-3'
              )}
              href={`/${locale}/result/${previousResult.id}`}
            >
              <code className='text-xs sm:text-sm break-all'>
                {previousResult.id}
              </code>
              <span className='shrink-0 text-sm text-default-500'>
                {new Intl.DateTimeFormat(locale).format(
                  previousResult.createdAt
                )}
              </span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
