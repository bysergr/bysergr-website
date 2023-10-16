import slugify from "slugify";
import type { CollectionEntry } from "astro:content";

export const slugifyStr = (str: string) => slugify(str);

export const slugifyPost = (post: CollectionEntry<"blog">["data"]) =>
  slugify(post.title.toLocaleLowerCase());

export const slugifyProject = (project: CollectionEntry<"projects">["data"]) =>
  slugify(project.title.toLocaleLowerCase());

export const slugifyAll = (arr: string[]) => arr.map((str) => slugifyStr(str));
