"use client";

import Link from "next/link";
import ThemeToggleButton from "./ui/ThemeToggleButton";
import { SquarePen } from "lucide-react";
import LogoutButton from "./LogoutButton";

interface NavbarProps {
  authenticatedRoute?: boolean;
}

function Navbar({ authenticatedRoute = false }: NavbarProps) {
  return (
    <nav className="flex justify-between items-center border-b px-2 xs:px-4 py-4">
      <Link
        href={authenticatedRoute ? "/blogs" : "/"}
        className="font-bold text-2xl"
      >
        NextWrite
      </Link>
      <div className="flex items-center">
        <ThemeToggleButton />
        {authenticatedRoute ? (
          <div className="flex">
            <Link
              href="/add-blog"
              className="flex items-center gap-1 px-2 py-1.5 rounded-sm hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50"
            >
              <SquarePen size={18} />
              <span className="hidden xs:block">Write</span>
            </Link>
            <LogoutButton />
          </div>
        ) : (
          <div className="flex">
            <Link
              href="/login"
              className="flex items-center gap-1 p-1 xs:px-2 xs:py-1.5 rounded-sm hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="flex items-center gap-1 p-1 xs:px-2 xs:py-1.5 rounded-sm hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
