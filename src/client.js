import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "j9br4h7e",
  dataset: "blog-sanity",
  apiVersion: "2024-01-01",
  useCdn: true,
});

export async function fetchPosts() {
  const query = `*[_type == 'post']{
    _id,
    title,
    slug,
    mainImage{
      asset->{
        _id,
        url
      }
    }
  }`;

  try {
    const posts = await client.fetch(query);
    console.log("Fetched Posts:", posts);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
