"use client";

import { redirect, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface AuthGuardProps {
  children: React.ReactNode;
  authenticatedRoute?: boolean;
}

function AuthGuard({ children, authenticatedRoute = false }: AuthGuardProps) {
  const [showPage, setShowPage] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const isLoggedIn: boolean = JSON.parse(
      localStorage.getItem("isLoggedIn") || "false"
    );

    // if the route requires authentication but the user is not logged in
    if (authenticatedRoute && !isLoggedIn) {
      // we redirect them to login page in order to authenticate them
      return redirect("/login");
    }
    //if the route doesn't require authentication but the user is logged in
    else if (!authenticatedRoute && isLoggedIn) {
      // we redirect them to blogs page
      return redirect("/blogs");
    }
    // allow the page to be shown
    else {
      setShowPage(true);
    }
  }, [pathname]);

  if (!showPage) return null;

  return <>{children}</>;
}

export default AuthGuard;
