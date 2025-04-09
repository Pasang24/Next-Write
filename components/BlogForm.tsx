"use client";

import { useState } from "react";
import ReactQuill from "react-quill-new";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

function BlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // logic for adding new blog
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
        value={content}
        onChange={(value) => setContent(value)}
      />
    </form>
  );
}

export default BlogForm;
