'use client';

import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import { Spinner } from '@nextui-org/spinner';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from '@/navigation';
import { title } from '@/components/primitives';
import { recoverPageOnce } from '@/components/browser-recovery';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  const [isRecovering, setIsRecovering] = useState(true);
  const hasAttemptedRecovery = useRef(false);

  useEffect(() => {
    console.error(error);

    if (hasAttemptedRecovery.current) return;
    hasAttemptedRecovery.current = true;

    if (!recoverPageOnce('render-error')) {
      setIsRecovering(false);
    }
  }, [error]);

  const onBackClick = useCallback(() => {
    router.back();
  }, [router]);

  if (isRecovering) {
    return (
      <main className='flex h-full flex-col items-center justify-center'>
        <Spinner color='danger' size='lg' aria-label='Recovering page' />
      </main>
    );
  }

  return (
    <main className='flex h-full flex-col items-center justify-center'>
      <h1 className={title()}>Error</h1>
      <h2 className='text-center mt-4'>
        {error ? error.message : 'Something went wrong!'}
      </h2>
      <div className='flex space-x-4'>
        <Button color='danger' className='mt-4' onClick={() => onBackClick()}>
          Go back
        </Button>

        <Button color='primary' className='mt-4' onClick={() => reset()}>
          Try again
        </Button>
      </div>
      <Image src='/error.webp' alt='' className='mt-5' />
    </main>
  );
}
