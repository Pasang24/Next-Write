"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Plus, Check, X } from "lucide-react";
import { ImageInput } from "./ImageInput";
import { Blog, Params } from "@/types";
import { notFound, redirect, useParams } from "next/navigation";
import { addBlog, getBlogById, updateBlog } from "@/lib/BlogStorage";
import { toast } from "sonner";
import { images } from "@/data/images";
import { getTextFromHtml } from "@/lib/utils";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

interface BlogFormProps {
  mode: "create" | "edit";
}

function BlogForm({ mode }: BlogFormProps) {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // blogId will be used only in edit mode
  const { blogId } = useParams<Params>();

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }],
      ["link"],
    ],
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!image) {
      return toast.error("Cover Image Required", {
        description: "Please add a cover image for your blog",
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
    }
    if (title.trim().length === 0) {
      return toast.error("Blog Title Required", {
        description: "Please add title for your blog",
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
    }
    if (getTextFromHtml(description).trim().length === 0) {
      return toast.error("Blog Description Required", {
        description: "Please add description for your blog",
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
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
        id: parseInt(blogId),
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
      const blog = getBlogById(parseInt(blogId));

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
        placeholder="Write your blog here... (Tip: Select the text to edit easily)"
        value={description}
        onChange={(value) => setDescription(value)}
        modules={modules}
      />
    </form>
  );
}

export default BlogForm;
