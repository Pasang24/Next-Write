"use client";

import { Blog } from "@/types";
import CustomImage from "./CustomImage";
import Link from "next/link";
import { getTextFromHtml } from "@/lib/utils";

interface BlogCardProps {
  blog: Blog;
}

function BlogCard({ blog }: BlogCardProps) {
  const createdDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const blogSnippet = getTextFromHtml(blog.description);

  return (
    <Link
      href={`blogs/${blog.id}`}
      className="flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-center sm:gap-6"
    >
      <div className="sm:w-1/2">
        <CustomImage
          src={blog.image}
          alt="blog-image"
          width={400}
          height={225}
          className="w-full"
        />
      </div>
      <div className="sm:w-1/2">
        <h3 className="font-bold text-2xl mb-4 line-clamp-2">{blog.title}</h3>
        <p className="mb-4 line-clamp-2">{blogSnippet}</p>
        <p className="text-sm">{createdDate}</p>
      </div>
    </Link>
  );
}

export default BlogCard;
