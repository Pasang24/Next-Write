import Container from "@/components/Container";
import BlogForm from "@/components/BlogForm";

function AddBlog() {
  return (
    <Container className="pt-6">
      <BlogForm mode="create" />
    </Container>
  );
}

export default AddBlog;
