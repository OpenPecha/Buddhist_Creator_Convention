import { useEffect } from "react";

interface PageMeta {
  title: string;
  description?: string;
}

const SITE_TITLE = "Buddhist Creators";

/** Sets document title and meta description for the current route. */
export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title === SITE_TITLE ? title : `${title} | ${SITE_TITLE}`;

    let descriptionTag: HTMLMetaElement | null = null;
    let previousDescription: string | null = null;

    if (description) {
      descriptionTag = document.querySelector('meta[name="description"]');
      if (descriptionTag) {
        previousDescription = descriptionTag.getAttribute("content");
        descriptionTag.setAttribute("content", description);
      }
    }

    return () => {
      document.title = previousTitle;
      if (descriptionTag && previousDescription !== null) {
        descriptionTag.setAttribute("content", previousDescription);
      }
    };
  }, [title, description]);
}
