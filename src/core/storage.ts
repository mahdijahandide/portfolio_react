export const storageKeys = { language: 'portfolio-language', theme: 'portfolio-theme' } as const
type StorageKey = (typeof storageKeys)[keyof typeof storageKeys]

export function readPreference(key: StorageKey) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

export function writePreference(key: StorageKey, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // Preferences still work for the current session.
  }
}
