import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { notFound } from "next/navigation";
import BlogHeader from "../components/BlogHeader";

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((file) => file.endsWith(".md"))
    .map((fileName) => ({
      slug: fileName.replace(/\.md$/, ""),
    }));
}

async function getPostBySlug(slug: string) {
  const postPath = path.join(process.cwd(), "src/app/blog/posts", `${slug}.md`);
  if (!fs.existsSync(postPath)) return null;
  const fileContents = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    title: data.title ?? "",
    date: data.date ?? "",
    content,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <div className="mx-64 my-16">
      <BlogHeader returnPage="/blog" />
      <article className="mx-64 my-16">
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-blockquote:border-l-primary prose-code:bg-muted prose-code:px-1 prose-code:rounded prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
