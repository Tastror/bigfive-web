'use client';

import { useEffect } from 'react';

const RECOVERY_WINDOW_MS = 30_000;
const RECOVERABLE_ERROR_PATTERN =
  /chunkloaderror|loading chunk|failed to fetch dynamically imported module|failed to load module script|failed to fetch.*server component|server component.*failed|failed to find server action/i;

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return `${error.name}: ${error.message}`;
  if (typeof error === 'string') return error;
  return '';
}

export function recoverPageOnce(reason: string) {
  const key = `bigfive:page-recovery:${reason}:${window.location.pathname}${window.location.search}`;
  const now = Date.now();

  try {
    const previousAttempt = Number(window.sessionStorage.getItem(key));
    if (
      Number.isFinite(previousAttempt) &&
      now - previousAttempt < RECOVERY_WINDOW_MS
    ) {
      return false;
    }

    window.sessionStorage.setItem(key, String(now));
  } catch {
    return false;
  }

  window.location.reload();
  return true;
}

async function removeLegacyOfflineState() {
  let hadActiveServiceWorker = false;

  if ('serviceWorker' in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    hadActiveServiceWorker =
      registrations.length > 0 && navigator.serviceWorker.controller !== null;
    await Promise.all(
      registrations.map((registration) => registration.unregister())
    );
  }

  if ('caches' in window) {
    const cacheNames = await window.caches.keys();
    await Promise.all(cacheNames.map((name) => window.caches.delete(name)));
  }

  if (hadActiveServiceWorker) {
    recoverPageOnce('legacy-service-worker');
  }
}

export function BrowserRecovery() {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      const message = getErrorMessage(event.error) || event.message;
      if (RECOVERABLE_ERROR_PATTERN.test(message)) {
        recoverPageOnce('stale-deployment');
      }
    };

    const handleRejection = (event: PromiseRejectionEvent) => {
      if (RECOVERABLE_ERROR_PATTERN.test(getErrorMessage(event.reason))) {
        recoverPageOnce('stale-deployment');
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleRejection);
    void removeLegacyOfflineState().catch((error) => console.error(error));

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleRejection);
    };
  }, []);

  return null;
}
