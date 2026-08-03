export interface SavedResult {
  id: string;
  createdAt: number;
}

const PREVIOUS_TEST_RESULT_KEY = 'bigFivePreviousTestResult';
const RESULT_ID_PATTERN = /^[a-f\d]{24}$/i;

function isSavedResult(value: unknown): value is SavedResult {
  if (!value || typeof value !== 'object') return false;

  const item = value as Partial<SavedResult>;

  return (
    typeof item.id === 'string' &&
    RESULT_ID_PATTERN.test(item.id) &&
    typeof item.createdAt === 'number' &&
    Number.isFinite(item.createdAt)
  );
}

export function getPreviousTestResult(): SavedResult | null {
  if (typeof window === 'undefined') return null;

  const storedResult = localStorage.getItem(PREVIOUS_TEST_RESULT_KEY);
  if (!storedResult) return null;

  try {
    const parsed = JSON.parse(storedResult);
    if (isSavedResult(parsed)) return parsed;
  } catch {
    // Remove malformed browser data below.
  }

  localStorage.removeItem(PREVIOUS_TEST_RESULT_KEY);
  return null;
}

export function saveCompletedTestResult(id: string, createdAt = Date.now()) {
  if (typeof window === 'undefined' || !RESULT_ID_PATTERN.test(id)) return;

  localStorage.setItem(
    PREVIOUS_TEST_RESULT_KEY,
    JSON.stringify({ id, createdAt })
  );
}
