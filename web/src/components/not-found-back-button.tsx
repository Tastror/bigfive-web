'use client';

import { Button } from '@nextui-org/button';
import { useCallback } from 'react';
import { useRouter } from '@/navigation';

export function NotFoundBackButton({ label }: { label: string }) {
  const router = useRouter();
  const onBackClick = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Button color='danger' className='mt-4' onClick={onBackClick}>
      {label}
    </Button>
  );
}
