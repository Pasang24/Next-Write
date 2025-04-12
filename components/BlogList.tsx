"use client";

import { Blog } from "@/types";
import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import { getBlogs } from "@/lib/BlogStorage";
import EmptyStreetSvg from "./svg/EmptyStreetSvg";

function BlogList() {
  const [blogs, setBlogs] = useState<Blog[] | null>(null);

  useEffect(() => {
    const blogs = getBlogs();

    // sorting blogs based on their creation time to show latest blog first
    const sortedBlogs = blogs.sort((b, a) => {
      const blogTime1 = new Date(a.createdAt).getTime();
      const blogTime2 = new Date(b.createdAt).getTime();

      return blogTime1 - blogTime2;
    });

    setBlogs(sortedBlogs);
  }, []);

  if (blogs?.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="w-[90%] max-w-72">
          <EmptyStreetSvg />
        </div>
        <p className="font-semibold text-center">
          No blogs yet. The city awaits your story..
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {blogs?.map((blog) => (
        <BlogCard blog={blog} key={blog.id} />
      ))}
    </div>
  );
}

export default BlogList;
