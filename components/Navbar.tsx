"use client";

import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import Container from "./Container";
import ThemeToggleButton from "./ui/ThemeToggleButton";
import { redirect } from "next/navigation";
import { SquarePen, LogOut } from "lucide-react";

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
        <Link
          href={authenticatedRoute ? "/blogs" : "/"}
          className="font-bold text-2xl"
        >
          NextWrite
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggleButton />
          {authenticatedRoute ? (
            <div className="flex">
              <Link
                href="/add-blog"
                className="flex items-center gap-1 px-2 py-1.5 rounded-sm hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50"
              >
                <SquarePen size={18} />
                Write
              </Link>
              <Button
                className="text-base cursor-pointer font-normal"
                variant={"ghost"}
                onClick={logoutHandler}
              >
                <LogOut />
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex">
              <Link
                href="/login"
                className="flex items-center gap-1 px-2 py-1.5 rounded-sm hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="flex items-center gap-1 px-2 py-1.5 rounded-sm hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50"
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
