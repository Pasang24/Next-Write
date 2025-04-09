import AuthGuard from "@/components/AuthGuard";
import Navbar from "@/components/Navbar";
import React from "react";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthGuard>
      <Navbar />
      {children}
    </AuthGuard>
  );
}

export default layout;
