import { z, defineCollection } from "astro:content";
import { SITE } from "@/config";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string().default(SITE.author),
    date: z.date(),
    links: z
      .array(
        z.object({
          url: z.string(),
          iconName: z.string(),
        })
      )
      .optional(),
    tags: z.array(z.string()),
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
            iconName: z.string(),
          })
        )
        .optional(),
      tags: z.array(z.string()),
      image: image().or(z.string()).optional(),
    }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};
