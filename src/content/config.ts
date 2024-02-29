import { z, defineCollection } from "astro:content";

export const stages = ["note", "essay", "reflection"] as const;

export type Stage = typeof stages[number];

export const tags = ["code", "innovation", "self-management"] as const;

export type Tag = typeof tags[number];

const thoughtsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    stage: z.enum(stages),
    lastEdited: z.string(),
    tag: z.enum(tags),
    draft: z.boolean().optional(),
  }),
});

const experimentsCollection = defineCollection({
  type: "content",
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
