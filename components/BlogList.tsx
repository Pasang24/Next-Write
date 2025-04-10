"use client";

import { Blog } from "@/types";
import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const blogs: Blog[] = JSON.parse(localStorage.getItem("blogs") || "[]");

    // sorting blogs based on their creation time to show latest blog first
    const sortedBlogs = blogs.sort((b, a) => {
      const blogTime1 = new Date(a.createdAt).getTime();
      const blogTime2 = new Date(b.createdAt).getTime();

      return blogTime1 - blogTime2;
    });

    setBlogs(sortedBlogs);
  }, []);
  return (
    <div className="flex flex-col gap-6">
      {blogs.map((blog) => (
        <BlogCard blog={blog} key={blog.id} />
      ))}
    </div>
  );
}

export default BlogList;
