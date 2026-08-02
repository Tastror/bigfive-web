'use client';

import { saveResultToHistory } from '@/lib/result-history';
import { useEffect } from 'react';

interface RememberResultProps {
  id: string;
  timestamp: number;
}

export function RememberResult({ id, timestamp }: RememberResultProps) {
  useEffect(() => {
    saveResultToHistory(id, timestamp);
  }, [id, timestamp]);

  return null;
}
