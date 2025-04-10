import BlogList from "@/components/BlogList";
import Container from "@/components/Container";
import React from "react";

function Blogs() {
  return (
    <Container>
      <h2 className="font-semibold text-3xl my-10">Welcome User,</h2>
      <h3 className="font-semibold text-xl mb-5">Your Blogs:</h3>
      <BlogList />
    </Container>
  );
}

export default Blogs;
