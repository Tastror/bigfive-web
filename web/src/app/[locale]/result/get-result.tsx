'use client';

import { button as buttonStyles } from '@nextui-org/theme';
import { Link } from '@nextui-org/link';
import clsx from 'clsx';
import { Button } from '@nextui-org/button';
import { useRouter } from '@/navigation';
import { formatAndValidateId, formatId } from '@/lib/helpers';
import { useEffect, useMemo, useState } from 'react';
import { Input } from '@nextui-org/input';
import { ResultIcon } from '@/components/icons';
import { getResultHistory, type SavedResult } from '@/lib/result-history';

interface GetResultPageProps {
  viewPreviousText: string;
  getResultsText: string;
  locale: string;
}

export const GetResultPage = ({
  viewPreviousText,
  getResultsText,
  locale
}: GetResultPageProps) => {
  const router = useRouter();

  const [resultHistory, setResultHistory] = useState<SavedResult[]>([]);
  const [id, setId] = useState('');

  const isInvalidId = useMemo(() => {
    if (id === '') return false;

    return !formatAndValidateId(id);
  }, [id]);

  useEffect(() => {
    setResultHistory(getResultHistory());
  }, []);

  const handleGetResults = () => {
    if (!formatAndValidateId(id)) return;
    router.push(`/result/${formatId(id)}`);
  };

  return (
    <>
      <div className='w-full my-3'>
        <Input
          type='text'
          label='ID'
          labelPlacement='outside'
          placeholder='58a70606a835c400c8b38e84'
          startContent={
            <ResultIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
          }
          isInvalid={isInvalidId}
          color={isInvalidId ? 'danger' : 'default'}
          onValueChange={setId}
          errorMessage={isInvalidId && 'Please enter a valid ID'}
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
      {resultHistory.length > 0 && (
        <div className='mt-10' aria-label={viewPreviousText}>
          <h2 className='text-xl font-semibold mb-3'>{viewPreviousText}</h2>
          <div className='grid gap-3'>
            {resultHistory.map((result) => (
              <Link
                key={result.id}
                className={clsx(
                  buttonStyles({ variant: 'bordered', size: 'lg' }),
                  'h-auto min-h-12 justify-between gap-3 px-4 py-3'
                )}
                href={`/result/${result.id}`}
              >
                <code className='text-xs sm:text-sm break-all'>
                  {result.id}
                </code>
                <span className='shrink-0 text-sm text-default-500'>
                  {new Intl.DateTimeFormat(locale).format(result.createdAt)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
