"use client";

import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import Container from "./Container";
import ThemeToggleButton from "./ui/ThemeToggleButton";
import { redirect } from "next/navigation";

interface NavbarProps {
  authenticatedRoute?: boolean;
}

function Navbar({ authenticatedRoute = false }: NavbarProps) {
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    redirect("/login");
  };
  return (
    <nav>
      <Container className="flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl">
          NextWrite
        </Link>
        <div className="flex gap-2">
          <ThemeToggleButton />
          {authenticatedRoute ? (
            <>
              <Link href="/add-blog">Write</Link>
              <Button onClick={logoutHandler}>Logout</Button>
            </>
          ) : (
            <Link
              href="/login"
              className={`${buttonVariants({
                variant: "default",
              })}`}
            >
              Get Started
            </Link>
          )}
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
