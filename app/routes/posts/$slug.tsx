import { json, LoaderFunction, useLoaderData } from "remix";

import invariant from "tiny-invariant";

import { getPost } from "~/post";
import type { IPost } from "~/post";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  return json(await getPost(params.slug));
};

export default function PostSlug() {
  const post = useLoaderData<IPost>();
  return <main dangerouslySetInnerHTML={{ __html: post.html }} />;
}
