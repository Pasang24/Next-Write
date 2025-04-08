import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import Container from "./Container";

function Navbar() {
  return (
    <nav>
      <Container className="flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl">
          NextWrite
        </Link>
        <div className="flex gap-2">
          <Button variant="outline">Select Theme</Button>
          <Link
            href="/login"
            className={`${buttonVariants({
              variant: "default",
            })}`}
          >
            Get Started
          </Link>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
