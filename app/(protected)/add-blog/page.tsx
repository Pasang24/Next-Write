import Container from "@/components/Container";
import BlogForm from "@/components/BlogForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Blog | NextWrite",
  description: "Create a new blog",
};

function AddBlog() {
  return (
    <Container className="pt-6">
      <BlogForm mode="create" />
    </Container>
  );
}

export default AddBlog;
