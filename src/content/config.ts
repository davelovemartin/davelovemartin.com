import { z, defineCollection } from "astro:content";

const thoughtsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    stage: z.enum(["note", "essay", "reflection"]),
    lastEdited: z.string(),
    tag: z.enum(["self-management", "innovation", "writing"]),
    draft: z.boolean().optional(),
  }),
});

const experimentsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lastEdited: z.string(),
    type: z.enum(["experiment"]),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  thoughts: thoughtsCollection,
  experiments: experimentsCollection,
};
