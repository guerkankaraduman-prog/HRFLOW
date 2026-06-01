import { useState, useCallback } from 'react'
import type { Lang } from '../lib/types'
import { de } from '../i18n/de'
import { en } from '../i18n/en'

const STORAGE_KEY = 'hrflow-lang'
const translations = { de, en }

export function useLang() {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null
    if (stored === 'de' || stored === 'en') return stored
    return (import.meta.env.VITE_DEFAULT_LANG as Lang) || 'de'
  })

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    localStorage.setItem(STORAGE_KEY, l)
    document.documentElement.setAttribute('lang', l)
  }, [])

  const t = useCallback(
    (key: string): string => {
      const dict = translations[lang] as Record<string, string | string[]>
      const val = dict[key]
      if (Array.isArray(val)) return val.join(', ')
      return val ?? key
    },
    [lang]
  )

  const tArr = useCallback(
    (key: string): string[] => {
      const dict = translations[lang] as Record<string, string | string[]>
      const val = dict[key]
      if (Array.isArray(val)) return val
      return [val ?? key]
    },
    [lang]
  )

  return { lang, setLang, t, tArr }
}
