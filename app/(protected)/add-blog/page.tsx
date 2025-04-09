import Container from "@/components/Container";

function AddBlog() {
  return (
    <Container>
      <input
        type="text"
        className="text-3xl w-full outline-none"
        placeholder="Title"
      />
    </Container>
  );
}

export default AddBlog;
