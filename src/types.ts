export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage?: string;
  postsPerPage: number;
  projectsPerPage: number;
  postsIndexPage: number;
  projectsIndexPage: number;
};

export interface Experience {
  title: string;
  company: string;
  location: string;
  from: string;
  to?: string;
  description: string;
}
