import AuthGuard from "@/components/AuthGuard";
import Container from "@/components/Container";
import LoginForm from "@/components/LoginForm";

function Login() {
  return (
    <AuthGuard>
      <Container className="flex flex-col items-center gap-10">
        <h2 className="text-4xl md:text-5xl font-semibold mt-10 text-center">
          Welcome Back
        </h2>
        <div className="flex flex-col gap-4 items-center w-full">
          <p className="text-xl text-center">Please Login to continue</p>
          <LoginForm />
        </div>
      </Container>
    </AuthGuard>
  );
}

export default Login;
