import Container from "@/components/Container";
import SignupForm from "@/components/SignupForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup | NextWrite",
  description: "Signup to create a new account",
};

function Login() {
  return (
    <Container className="flex flex-col items-center gap-10">
      <h2 className="text-4xl md:text-5xl font-semibold mt-10 text-center">
        Create your Account
      </h2>
      <div className="flex flex-col gap-4 items-center w-full">
        <p className="text-xl text-center">Please Signup to continue</p>
        <SignupForm />
      </div>
    </Container>
  );
}

export default Login;
