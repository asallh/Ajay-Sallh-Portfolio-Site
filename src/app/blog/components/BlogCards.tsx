import React from "react";

interface BlogCardProps {
  title: string;
  date: string;
  excerpt: string;
}

function BlogCards({ title, date, excerpt }: BlogCardProps) {
  return (
    <div
      className="
        p-4
        rounded-2xl
        bg-gray-900 
        bg-clip-padding 
        backdrop-filter 
        backdrop-blur-sm 
        bg-opacity-20
        border-2 
        border-[#ffffff22]
        transition
        hover:border-blue-400
      "
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-1">{date}</p>
      <p className="text-base">{excerpt}</p>
    </div>
  );
}

export default BlogCards;
