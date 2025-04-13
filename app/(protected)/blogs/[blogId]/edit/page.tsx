import BlogForm from "@/components/BlogForm";
import Container from "@/components/Container";

function EditBlog() {
  return (
    <Container className="pt-6">
      <BlogForm mode="edit" />
    </Container>
  );
}

export default EditBlog;
