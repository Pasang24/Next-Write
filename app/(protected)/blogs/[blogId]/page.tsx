"use client";

import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Blog, Params } from "@/types";
import Image from "next/image";
import { notFound, useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Pen, Trash2 } from "lucide-react";
import { getBlogById } from "@/lib/BlogStorage";
import { DeleteBlogButton } from "@/components/DeleteBlogButton";

function BlogView() {
  const [blog, setBlog] = useState<Blog | null>(null);
  const { blogId } = useParams<Params>();
  const router = useRouter();

  const convertDate = (date: string): string => {
    const convertedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return convertedDate;
  };

  useEffect(() => {
    const blog = getBlogById(parseInt(blogId));

    if (blog) {
      setBlog(blog);
    } else {
      return notFound();
    }
  }, []);

  if (!blog) return null;

  return (
    <Container className="flex flex-col gap-4 mt-10">
      <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold">
        {blog.title}
      </h2>
      <div className="flex gap-4">
        <p className="text-sm xs:text-base text-[#d1d5dc]">
          Posted: {convertDate(blog.createdAt)}
        </p>
        {blog?.updatedAt && (
          <p className="text-sm xs:text-base text-[#d1d5dc]">
            Edited: {convertDate(blog.updatedAt)}
          </p>
        )}
      </div>
      <div className="flex gap-1">
        <Button
          onClick={() => router.push(`/blogs/${blogId}/edit`)}
          variant={"ghost"}
          className="text-gray-600 dark:text-gray-400 cursor-pointer"
        >
          <Pen />
          Edit Blog
        </Button>
        <DeleteBlogButton blogId={parseInt(blogId)} />
      </div>
      <Image
        src={blog.image}
        alt="blog-image"
        className="w-full"
        width={600}
        height={337}
      />
      <div
        className="prose prose-h1:my-0 prose-h2:my-0 prose-h3:my-0 prose-p:my-0 max-w-none dark:prose-invert mt-6"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      />
    </Container>
  );
}

export default BlogView;
