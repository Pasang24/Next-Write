import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

function BlogNotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-70px)]">
      <div className="flex flex-col items-center gap-2 w-[90%]">
        <h2 className="text-xl font-semibold text-center">
          404 Blog Not Found!
        </h2>
        <p className="text-center my-2">
          Oops! It seems the blog you are looking for doesn&apos;t exist
        </p>

        <Link href="/blogs" className={buttonVariants({ variant: "default" })}>
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default BlogNotFound;
