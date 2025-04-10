"use client";

import Container from "@/components/Container";
import { Blog } from "@/types";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function BlogView() {
  const [blog, setBlog] = useState<Blog | null>(null);
  const { blogId } = useParams();

  const convertDate = (date: string): string => {
    const convertedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return convertedDate;
  };

  useEffect(() => {
    const blogs: Blog[] = JSON.parse(localStorage.getItem("blogs") || "[]");

    const blog = blogs.find((blog) => blog.id === parseInt(blogId as string));

    if (blog) {
      setBlog(blog);
    }
  }, []);

  if (!blog) return null;

  return (
    <Container className="flex flex-col gap-4 mt-10">
      <h2 className="text-4xl font-bold">{blog.title}</h2>
      <p>Posted on: {convertDate(blog.createdAt)}</p>
      {blog?.updatedAt && <p>Edited on: {convertDate(blog.updatedAt)}</p>}
      <Image
        src={blog.image}
        alt="blog-image"
        className="w-full"
        width={600}
        height={337}
      />
      <div dangerouslySetInnerHTML={{ __html: blog.description }} />
    </Container>
  );
}

export default BlogView;
