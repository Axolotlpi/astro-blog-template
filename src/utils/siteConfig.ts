import type { Post, SiteConfig, Author } from './queries';

export const site: SiteConfig = {
  name: '',
  canonicalURL: '',
  title: '',
  description: '',
  mainImage: '',
  socials: [
    {
      name: 'twitter',
      fontIcon: 'twitter',
      url: 'twitter.com',
    },
  ],
};

export type StructuredData = {};

// for use with  <script type="application/ld+json>
export const generateStructuredData = (
  title: string,
  author: Author,
  permalink: string,
  siteUrl: string,
  datePublished: string, //iso 8601 format
  mainImage: string,
  description: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  url: `${permalink}`,
  headline: `${title}`,
  datePublished: `${datePublished}`,
  description: `${description}`,
  image: {
    '@type': 'ImageObject',
    url: `${mainImage}`,
    width: 1200,
  },
  publisher: {
    '@type': 'Organization',
    name: `${title} Blog`,
    url: `${siteUrl}/blog/`,
  },
  author: {
    '@type': 'Person',
    name: `${author.name}`,
    image: {
      '@type': 'ImageObject',
      url: `${author.image}`,
      width: 512,
      height: 512,
    },
    url: `${siteUrl}/author/${author.name}`,
  },
});

// For use with Astro's rss()
export type RssData = {
  title: string;
  description: string;
  customData: string;
  items: {
    title: string;
    description: string;
    link: string; // eg. '/blog/article'
    pubDate: string;
  }[];
};

export const rssHeaderData = {
  title: site.title,
  description: site.description,
  customData: `<language>en-us</language>`,
};

export function generateRssData(posts: Post[]): RssData {
  return {
    ...rssHeaderData,
    items: posts.map(({ title, description, slug, publishedAt }) => ({
      title: title,
      description: description,
      link: `/blog/${slug.current}`,
      pubDate: publishedAt,
    })),
  };
}
