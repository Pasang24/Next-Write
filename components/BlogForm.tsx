"use client";

import { useState } from "react";
import ReactQuill from "react-quill-new";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { ImageInput } from "./ImageInput";
import { Blog } from "@/types";
import { redirect } from "next/navigation";

function BlogForm() {
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
    // logic for adding new blog
    const blogs: Blog[] = JSON.parse(localStorage.getItem("blogs") || "[]");

    // if there are no blogs then just assign id as 1
    // else get id of the last created blog and add one to create id for new blog
    const newId =
      blogs.length === 0 ? 1 : Math.max(...blogs.map((blog) => blog.id)) + 1;

    const newBlog: Blog = {
      id: newId,
      title,
      description,
      image,
      createdAt: new Date().toISOString(),
    };

    const updatedBlogs: Blog[] = [...blogs, newBlog];

    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    redirect("/blogs");
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-2">
      <Button
        className="rounded-sm cursor-pointer self-end"
        variant={"default"}
      >
        <Plus />
        Publish
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
