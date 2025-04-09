import AuthGuard from "@/components/AuthGuard";
import Container from "@/components/Container";
import SignupForm from "@/components/SignupForm";

function Login() {
  return (
    <AuthGuard>
      <Container className="flex flex-col items-center gap-10">
        <h2 className="text-4xl md:text-5xl font-semibold mt-10 text-center">
          Create your Account
        </h2>
        <div className="flex flex-col gap-4 items-center w-full">
          <p className="text-xl text-center">Please Signup to continue</p>
          <SignupForm />
        </div>
      </Container>
    </AuthGuard>
  );
}

export default Login;
