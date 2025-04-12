"use client";

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
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
          Oops! It seems the page you are looking for doesn't exist
        </p>

        <Button
          onClick={() => redirect(isLoggedIn ? "/blogs" : "/")}
          className="cursor-pointer"
        >
          Go Back
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
