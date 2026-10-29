"use client";

import {
  createContext,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type Language = "en" | "mr";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const STORAGE_KEY = "language";
const CHANGE_EVENT = "app-language-change";

let fallbackLanguage: Language = "en";

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

function getSnapshot(): Language {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);

    return saved === "en" || saved === "mr"
      ? saved
      : fallbackLanguage;
  } catch {
    return fallbackLanguage;
  }
}

function getServerSnapshot(): Language {
  return "en";
}

function subscribe(onChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) {
      onChange();
    }
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(CHANGE_EVENT, onChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

function updateLanguage(language: Language) {
  fallbackLanguage = language;

  try {
    window.localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // Keep language switching available when storage is blocked.
  }

  // Notify subscribers in the current browser tab.
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const language = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: updateLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);