"use client";

import BlogForm from "@/components/BlogForm";
import Container from "@/components/Container";
import { Params } from "@/types";
import { useParams } from "next/navigation";

function page() {
  const { blogId } = useParams<Params>();

  return (
    <Container className="pt-6">
      <BlogForm mode="edit" blogId={parseInt(blogId)} />
    </Container>
  );
}

export default page;
