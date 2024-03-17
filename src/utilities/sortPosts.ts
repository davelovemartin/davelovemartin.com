import type { CollectionEntry } from "astro:content";

const parseDateString = (dateString: String): Date => {
  const dateParts = dateString.split(".");
  if (dateParts.length !== 3) {
    throw new Error("Invalid date format. Please use dd.mm.yyyy format.");
  }

  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10) - 1;
  const year = parseInt(dateParts[2], 10);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    throw new Error("Invalid date components.");
  }

  return new Date(year, month, day);
};

export function sortPosts(
  posts: CollectionEntry<"experiments">[] | CollectionEntry<"thoughts">[]
): CollectionEntry<"experiments">[] | CollectionEntry<"thoughts">[] {
  return posts.sort((a, b) => {
    const dateA: number = parseDateString(a.data.lastEdited).valueOf();
    const dateB: number = parseDateString(b.data.lastEdited).valueOf();
    return dateB - dateA;
  });
}
