import { z, defineCollection } from "astro:content";
import { SITE } from "@/config";

const tags = [
  "astro",
  "svelte",
  "typescript",
  "javascript",
  "react",
  "golang",
  "clojure",
  "docker",
];

const icons = ["bi:github", "iconoir:www", "ic:baseline-mail"];

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string().default(SITE.author),
      date: z.date(),
      links: z
        .array(
          z.object({
            url: z.string(),
            icon: z.string().refine((val) => icons.includes(val)),
            label: z.string(),
          })
        )
        .optional(),
      description: z.string().refine((val) => val.length < 150 && val.length > 100),
      ogImage: z.string().default(SITE.socialImageOG),
      tags: z.array(z.string().refine((val) => tags.includes(val))),
      image: image(),
      imageAlt: z.string(),
    }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string().default(SITE.author),
      date: z.date(),
      links: z
        .array(
          z.object({
            url: z.string(),
            icon: z.string().refine((val) => icons.includes(val)),
            label: z.string(),
          })
        )
        .optional(),
      description: z.string().refine((val) => val.length < 150 && val.length > 100),
      ogImage: z.string().default(SITE.socialImageOG),
      tags: z.array(z.string().refine((val) => tags.includes(val))),
      image: image(),
      imageAlt: z.string(),
    }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};
