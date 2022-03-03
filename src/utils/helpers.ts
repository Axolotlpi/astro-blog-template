import { parseISO, format } from 'date-fns';
import sanity from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import BlocksToMarkdown from '@sanity/block-content-to-markdown';

const builder = imageUrlBuilder({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
});

const client = new sanity({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  token: import.meta.env.PUBLIC_SANITY_READ_TOKEN,
  apiVersion: '',
  useCdn: true,
});

export async function getContent(query) {
  const res = await client.fetch(query);
  if (!res || !query.reformat) return res;
  return query.reformat(res);
}

export function getImageUrl(source) {
  return builder.image(source);
}

export async function convertToMarkdown(postBody) {
  return BlocksToMarkdown(postBody);
}

export function formatBlogPostDate(date) {
  const dateString = parseISO(date);
  const formattedDateString = format(dateString, 'MMMM do, yyyy');
  return `${formattedDateString}`;
}
