import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.filter((file) => file.endsWith(".md")).map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const {data, content} = matter(fileContents);
    return {
        slug,
        ...data,
        excerpt: data.excerpt || content.slice(0, 140)
    };
  });
  return posts.sort((a: any, b: any) => (a.date < b.date ? 1 : -1));
}
