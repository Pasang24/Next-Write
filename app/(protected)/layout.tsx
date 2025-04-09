import AuthGuard from "@/components/AuthGuard";
import React from "react";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthGuard authenticatedRoute>{children}</AuthGuard>;
}

export default layout;
