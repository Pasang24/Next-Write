"use client";

import BlogForm from "@/components/BlogForm";
import Container from "@/components/Container";
import { useParams } from "next/navigation";

function page() {
  const { blogId } = useParams();

  return (
    <Container className="pt-6">
      <BlogForm mode="edit" blogId={parseInt(blogId as string)} />
    </Container>
  );
}

export default page;
