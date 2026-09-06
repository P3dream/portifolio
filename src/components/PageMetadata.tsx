import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

type PageMetadataProps = {
  baseUrl: string;
};

const pageKeys: Record<string, string> = {
  "/about": "about",
  "/projects": "projects",
  "/research-engineering": "research",
  "/resume": "resume",
  "/certificates": "certificates",
};

const setMetaContent = (selector: string, content: string) => {
  const element = document.head.querySelector<HTMLMetaElement>(selector);
  element?.setAttribute("content", content);
};

const PageMetadata = ({ baseUrl }: PageMetadataProps) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const pageKey = pageKeys[pathname] ?? "about";
  const url = `${baseUrl}${pathname}`;
  const title = t(`seo.${pageKey}.title`);
  const description = t(`seo.${pageKey}.description`);

  useEffect(() => {
    document.title = title;

    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    canonical?.setAttribute("href", url);

    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[property="og:url"]', url);
  }, [description, title, url]);

  return null;
};

export default PageMetadata;
