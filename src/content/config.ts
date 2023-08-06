import { z, defineCollection } from "astro:content";

const thoughtsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    stage: z.enum(["note", "essay", "reflection"]),
    lastEdited: z.string(),
    theme: z.enum(["self-management", "innovation", "writing"]),
    draft: z.boolean().optional(),
  }),
});

const experimentsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lastEdited: z.string(),
    type: z.enum(["thought", "code"]),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  thoughts: thoughtsCollection,
  experiments: experimentsCollection,
};
