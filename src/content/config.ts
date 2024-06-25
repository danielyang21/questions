import { z, defineCollection } from "astro:content";

const questionCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    path: z.string(),
    solution: z.string().optional(),
    generator: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  questions: questionCollection,
};
