import { Link, LoaderFunction, useLoaderData, json } from "remix";

import { getPosts } from "~/post";
import type { IPost } from "~/post";

export const loader: LoaderFunction = async () => {
  const posts = await getPosts();
  return json(posts);
};

export default function Posts() {
  const posts = useLoaderData<IPost[]>();
  console.log(posts);

  return (
    <main>
      <h1>Posts</h1>
      <div>
        {posts.map((post, i) => (
          <div key={`post_${i}`}>
            <Link to={post.slug}>{post.title}</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
