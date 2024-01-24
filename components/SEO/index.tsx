import { FC, Fragment, ReactNode } from "react";
import Head from "next/head";

export interface OgImage {
  url?: string;
  width?: string;
  height?: string;
  alt?: string;
}

interface Props {
  title?: Maybe<string>;
  description?: Maybe<string>;
  keywords?: string[];
  favicon?: string;
  robots?: string;
  openGraph?: {
    title?: Maybe<string>;
    description?: Maybe<string>;
    type?: string;
    locale?: string;
    site_name?: string;
    url?: string;
    images?: OgImage[];
  };
  children?: ReactNode;
}

const ogImage = ({ url, width, height, alt }: OgImage, index: number) => {
  return (
    <Fragment key={`og:image:${index}`}>
      <meta key={`og:image:url:${index}`} property="og:image" content={url} />
      {width && (
        <meta
          key={`og:image:width:${index}`}
          property="og:image:width"
          content={width}
        />
      )}
      {height && (
        <meta
          key={`og:image:height:${index}`}
          property="og:image:height"
          content={height}
        />
      )}
      {alt && (
        <meta
          key={`og:image:alt:${index}`}
          property="og:image:alt"
          content={alt}
        />
      )}
    </Fragment>
  );
};

const SEO: FC<Props> = ({
  title,
  description,
  keywords,
  favicon,
  openGraph,
  robots,
  children,
}) => {
  /**
   * @see https://nextjs.org/docs/api-reference/next/head
   *
   * meta or any other elements need to be contained as direct children of the Head element,
   * or wrapped into maximum one level of <React.Fragment> or arrays
   * otherwise the tags won't be correctly picked up on client-side navigations.
   *
   * The `key` property makes the tag is only rendered once,
   */
  return (
    <Head>
      <link rel="icon" href={favicon} />

      <link rel="shortcut icon" type="image/x-icon" href={favicon} />

      <link rel="apple-touch-icon" sizes="180x180" href={favicon} />

      <title key="title">{title}</title>

      <meta key="description" name="description" content={description ?? ""} />

      <meta name="keywords" content={keywords?.toString()}></meta>

      <meta
        key="og:type"
        property="og:type"
        content={openGraph?.type ?? "website"}
      />

      <meta
        key="og:title"
        property="og:title"
        content={openGraph?.title ?? title ?? ""}
      />

      <meta
        key="og:description"
        property="og:description"
        content={openGraph?.description ?? description ?? ""}
      />

      <meta
        key="og:site_name"
        property="og:site_name"
        content={openGraph?.site_name}
      />

      <meta key="og:url" property="og:url" content={openGraph?.url}></meta>

      {openGraph?.locale && (
        <meta key="og:locale" property="og:locale" content={openGraph.locale} />
      )}

      {openGraph?.images?.length &&
        openGraph.images.map((img, index) => ogImage(img, index))}

      <meta key="robots" name="robots" content={robots ?? "index,follow"} />

      <meta
        key="googlebot"
        name="googlebot"
        content={robots ?? "index,follow"}
      />

      {children}
    </Head>
  );
};

export default SEO;
