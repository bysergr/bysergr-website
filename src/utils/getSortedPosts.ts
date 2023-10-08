import { type CollectionEntry } from "astro:content";

const getSortedPosts = (
  posts: CollectionEntry<"blog">[]
): CollectionEntry<"blog">[] =>
  posts.sort(
    (a, b) =>
      Math.floor(new Date(b.data.date).getTime() / 1000) -
      Math.floor(new Date(a.data.date).getTime() / 1000)
  );

export default getSortedPosts;
