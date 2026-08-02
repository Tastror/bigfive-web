export interface SavedResult {
  id: string;
  createdAt: number;
}

const HISTORY_KEY = 'bigFiveResultHistory';
const LEGACY_RESULT_KEY = 'resultId';
const MAX_SAVED_RESULTS = 50;
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

export function getResultHistory(): SavedResult[] {
  if (typeof window === 'undefined') return [];

  let savedResults: SavedResult[] = [];
  const storedHistory = localStorage.getItem(HISTORY_KEY);

  if (storedHistory) {
    try {
      const parsed = JSON.parse(storedHistory);
      if (Array.isArray(parsed)) savedResults = parsed.filter(isSavedResult);
    } catch {
      // Ignore malformed legacy browser data and rebuild the history below.
    }
  }

  const legacyResultId = localStorage.getItem(LEGACY_RESULT_KEY);
  if (
    legacyResultId &&
    RESULT_ID_PATTERN.test(legacyResultId) &&
    !savedResults.some(({ id }) => id === legacyResultId)
  ) {
    savedResults.push({ id: legacyResultId, createdAt: Date.now() });
  }

  const normalized = savedResults
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, MAX_SAVED_RESULTS);

  localStorage.setItem(HISTORY_KEY, JSON.stringify(normalized));
  return normalized;
}

export function saveResultToHistory(id: string, createdAt = Date.now()) {
  if (typeof window === 'undefined' || !RESULT_ID_PATTERN.test(id)) return;

  const history = getResultHistory().filter((result) => result.id !== id);
  const updatedHistory = [{ id, createdAt }, ...history].slice(
    0,
    MAX_SAVED_RESULTS
  );

  localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory));
  localStorage.setItem(LEGACY_RESULT_KEY, id);
}
