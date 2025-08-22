import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");

interface Post {
  slug: string;
  title?: string;
  date?: string;
  excerpt: string;
  [key: string]: unknown; 
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.filter((file) => file.endsWith(".md")).map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      ...data,
      excerpt: data.excerpt || content.slice(0, 140)
    } as Post;
  });
  
  return posts.sort((a: Post, b: Post) => {
    // Handle cases where date might be undefined
    if (!a.date || !b.date) return 0;
    return a.date < b.date ? 1 : -1;
  });
}