import BlogHeader from "./components/BlogHeader";
import { getAllPosts } from "./lib/posts";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export default async function BlogPage() {
  const posts = getAllPosts() as Post[];

  return (
    <div className="mx-64 my-16">
      <BlogHeader returnPage="/"/>
      <div className="py-16">
        <ul>
          {posts.map((post) => (
            <li key={post.slug} style={{ marginBottom: "2rem" }}>
              <a href={`/blog/${post.slug}`}>
                <h2>{post.title}</h2>
              </a>
              <p>{post.date}</p>
              <p>{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
