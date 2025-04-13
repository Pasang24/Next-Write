import BlogForm from "@/components/BlogForm";
import Container from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Blog | NextWrite",
  description: "Edit your blogs",
};

function EditBlog() {
  return (
    <Container className="pt-6">
      <BlogForm mode="edit" />
    </Container>
  );
}

export default EditBlog;
