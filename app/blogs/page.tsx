import AuthGuard from "@/components/AuthGuard";
import Container from "@/components/Container";
import Image from "next/image";
import React from "react";

function Blogs() {
  return (
    <AuthGuard authenticatedRoute>
      <Container>
        <h2 className="font-semibold text-3xl my-10">Welcome User,</h2>
        <h3 className="font-semibold text-xl mb-5">Your Blogs:</h3>
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-6">
            <div className="w-full">
              <img
                src={
                  "https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA="
                }
                alt=""
                className="w-full"
              />
            </div>
            <div className="">
              <h3 className="font-bold text-2xl mb-4">
                The 5 paid subscriptions I actually use in 2024 as a software
                engineer
              </h3>
              <p className="mb-6">Tools I use that are cheaper than Netflix</p>
              <p>Jan 4, 2024</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-full">
              <img
                src={
                  "https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA="
                }
                alt=""
                className="w-full"
              />
            </div>
            <div className="">
              <h3 className="font-bold text-2xl mb-4">
                The 5 paid subscriptions I actually use in 2024 as a software
                engineer
              </h3>
              <p className="mb-6">Tools I use that are cheaper than Netflix</p>
              <p>Jan 4, 2024</p>
            </div>
          </div>
        </div>
      </Container>
    </AuthGuard>
  );
}

export default Blogs;
