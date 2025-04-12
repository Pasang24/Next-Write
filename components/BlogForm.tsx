"use client";

import { useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { ImageInput } from "./ImageInput";
import { Blog } from "@/types";
import { notFound, redirect } from "next/navigation";
import { addBlog, getBlogById, updateBlog } from "@/lib/BlogStorage";

interface BlogFormProps {
  mode: "create" | "edit";
  blogId?: number;
}

function BlogForm({ mode, blogId }: BlogFormProps) {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const images = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png",
    "/images/image5.jpeg",
    "/images/image6.jpg",
    "/images/image7.webp",
    "/images/image8.jpg",
  ];

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (mode === "create") {
      const newBlog: Omit<Blog, "id" | "createdAt"> = {
        title,
        description,
        image,
      };

      addBlog(newBlog);
      redirect("/blogs");
    } else {
      const updatedBlog: Omit<Blog, "createdAt"> = {
        id: blogId as number,
        title,
        description,
        image,
      };

      updateBlog(updatedBlog);
      redirect(`/blogs/${blogId}`);
    }
  };

  //this useEffect is used only to fetch data for blog when we are editing it
  useEffect(() => {
    if (mode === "edit") {
      const blog = getBlogById(blogId as number);

      if (blog) {
        setTitle(blog.title);
        setImage(blog.image);
        setDescription(blog.description);
      } else {
        return notFound();
      }
    }
  }, []);

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-2">
      <Button
        className="rounded-sm cursor-pointer self-end"
        variant={"default"}
      >
        <Plus />
        {mode === "edit" ? "Update" : "Publish"}
      </Button>
      <ImageInput
        currentImage={image}
        images={images}
        onChange={(selectedImage) => setImage(selectedImage)}
      />
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="text-3xl font-semibold w-full outline-none px-4"
        placeholder="Title"
      />
      <ReactQuill
        theme="bubble"
        placeholder="Tell your story..."
        value={description}
        onChange={(value) => setDescription(value)}
      />
    </form>
  );
}

export default BlogForm;
