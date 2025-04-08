import Container from "@/components/Container";
import WritingHandSvg from "@/components/svg/WritingHandSvg";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <Container className="flex items-center h-screen">
      <div className="flex flex-col gap-10">
        <h2 className="text-7xl font-semibold">Your Stories Stored Safely</h2>
        <p className="text-xl">A place where every word stays with you</p>
        <Link
          href="/login"
          className={buttonVariants({
            variant: "default",
            className: "self-start",
          })}
        >
          Start Writing
        </Link>
      </div>
      <div className="w-1/2">
        <WritingHandSvg />
      </div>
    </Container>
  );
}
