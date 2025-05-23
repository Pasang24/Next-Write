"use client";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

function NotFound() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoggedInValue = localStorage.getItem("isLoggedIn");

    if (!storedLoggedInValue) {
      setIsLoggedIn(false);
    } else {
      const loggedInValue = JSON.parse(storedLoggedInValue);
      setIsLoggedIn(loggedInValue);
    }
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-2 w-[90%]">
        <h2 className="text-xl font-semibold text-center">
          404 Page Not Found!
        </h2>
        <p className="text-center my-2">
          Oops! It seems the page you are looking for doesn&apos;t exist
        </p>

        <Link
          href={isLoggedIn ? "/blogs" : "/"}
          className={buttonVariants({ variant: "default" })}
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
