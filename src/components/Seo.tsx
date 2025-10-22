import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SeoProps {
  title: string;
  description: string;
}

const Seo = ({ title, description }: SeoProps) => {
  const location = useLocation();

  useEffect(() => {
    const { origin, pathname, search } = window.location;
    const canonicalUrl = `${origin}${pathname}${search}`;

    document.title = title;

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let meta = document.querySelector(`meta[${attr}='${name}']`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Basic meta
    setMeta("description", description);

    // Open Graph
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");

    // Twitter
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    // Canonical
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalUrl);
  }, [title, description, location.pathname, location.search]);

  return null;
};

export default Seo;
