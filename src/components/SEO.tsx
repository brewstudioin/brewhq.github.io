import React from "react";
import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  path: string;
  imageUrl?: string;
};

const BASE_URL = "https://brew.studio";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.svg`;

export function SEO({ title, description, path, imageUrl }: SEOProps) {
  const url = `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const img = imageUrl || DEFAULT_IMAGE;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Brew Studio" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  );
}


