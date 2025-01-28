import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "j9br4h7e",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-01-27",
});
