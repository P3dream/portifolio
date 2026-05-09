import { useTranslation } from "react-i18next";

export function useTranslatedArray<T>(key: string): T[] {
  const { t } = useTranslation();
  const raw = t(key, { returnObjects: true });
  return Array.isArray(raw) ? (raw as T[]) : [];
}
