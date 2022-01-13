//this file defines the coupling between cms schema and local types

export const queries = {
  allPosts: '',
};

export type SiteConfig = {
  name: string;
  url: string;
  title: string;
  description: string;
  mainImage: any;
  socials?: Social[];
};

export type Social = {
  name: string;
  fontIcon: string;
  url: string;
};

export type AllPosts = Post[];

export type Post = {
  title: string;
  description: string;
  slug: any;
  mainImage: any;
  author: Author;
  publishedAt: string; // iso 8601
  bodyRaw: any; // block
};

export type Author = {
  name: string;
  image: string;
  bio: any; //array of block text
};
