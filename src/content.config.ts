// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()),
  }),
});

const books = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/books" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    rating: z.number().min(1).max(5),
    yearRead: z.number(),
    fullDate: z.date(),
    genre: z.string().optional(),
    pages: z.number().optional(),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  blog,
  books,
};
