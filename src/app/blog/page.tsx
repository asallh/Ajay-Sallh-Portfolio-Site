import BlogCards from "./components/BlogCards";
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

  if (posts.length == 0) {
    return (
      <div className="mx-64 my-16">
        <BlogHeader returnPage="/" />
        <div className="flex justify-center items-center h-64">
          <p className="bg-gray-800 bg-opacity-60 text-lg text-white px-6 py-4 rounded-xl shadow-md">
            No Posts Yet!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-64 my-16">
      <BlogHeader returnPage="/" />
      <div className="py-16 justify-center">
        <ul>
          {posts.map((post) => (
            <li key={post.slug} style={{ marginBottom: "2rem" }}>
              <a href={`/blog/${post.slug}`}>
                <BlogCards
                  title={post.title}
                  date={post.date}
                  excerpt={post.excerpt}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
