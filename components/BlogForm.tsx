"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Plus, Check, X } from "lucide-react";
import { ImageInput } from "./ImageInput";
import { Blog } from "@/types";
import { notFound, redirect } from "next/navigation";
import { addBlog, getBlogById, updateBlog } from "@/lib/BlogStorage";
import { toast } from "sonner";
import { images } from "@/data/images";
import { getTextFromHtml } from "@/lib/utils";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

interface BlogFormProps {
  mode: "create" | "edit";
  blogId?: number;
}

function BlogForm({ mode, blogId }: BlogFormProps) {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!image) {
      return toast.error("Please add a cover image");
    }
    if (title.trim().length === 0) {
      return toast.error("Please provide a valid title for blog");
    }
    if (getTextFromHtml(description).trim().length === 0) {
      return toast.error("Please provide a valid description for blog");
    }

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

  const discardHandler = () => {
    if (mode === "edit") {
      redirect(`/blogs/${blogId}`);
    } else {
      redirect("/blogs");
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
  }, [mode, blogId]);

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-4">
      <div className="flex self-end gap-2">
        <Button
          type="button"
          onClick={discardHandler}
          className="rounded-sm cursor-pointer self-end"
          variant={"outline"}
        >
          <X />
          Cancel
        </Button>
        <Button
          className="rounded-sm cursor-pointer self-end"
          variant={"default"}
        >
          {mode === "edit" ? (
            <>
              <Check />
              Update
            </>
          ) : (
            <>
              <Plus />
              Publish
            </>
          )}
        </Button>
      </div>

      <ImageInput
        currentImage={image}
        images={images}
        onChange={(selectedImage) => setImage(selectedImage)}
      />
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="text-3xl font-semibold w-full pb-4 border-b-2 outline-none"
        placeholder="Blog title here"
      />
      <ReactQuill
        className="w-full"
        theme="bubble"
        placeholder="Tell your story..."
        value={description}
        onChange={(value) => setDescription(value)}
      />
    </form>
  );
}

export default BlogForm;
