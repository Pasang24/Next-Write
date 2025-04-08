"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { User } from "@/types";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });
  const [validationError, setValidationError] = useState("");

  const router = useRouter();

  const loginHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // logic for handling login
    setErrors({
      emailError: "",
      passwordError: "",
    });
    setValidationError("");

    if (email.trim().length === 0) {
      setErrors((prev) => ({ ...prev, emailError: "Email is required!" }));
      return;
    }
    if (password.trim().length === 0) {
      setErrors((prev) => ({
        ...prev,
        passwordError: "Password is required!",
      }));
      return;
    }

    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    let userExists = users.some(
      (user) => user.email === email && user.password === password
    );

    if (userExists) {
      router.replace("/blogs");
    } else {
      setValidationError("Invalid Email or Password!");
    }
  };

  return (
    <form
      onSubmit={loginHandler}
      className="flex flex-col gap-6 border-2 rounded-sm p-4 w-full max-w-96"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="example@gmail.com"
          id="email"
          className="p-2 rounded-sm border-2 text-sm"
        />
        {errors.emailError && (
          <span className="text-xs text-red-400">{errors.emailError}</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="font-semibold">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter password"
          id="password"
          className="p-2 rounded-sm border-2 text-sm"
        />
        {errors.passwordError && (
          <span className="text-xs text-red-400">{errors.passwordError}</span>
        )}
      </div>
      {validationError && (
        <span className="text-xs text-red-400">{validationError}</span>
      )}
      <Button className="cursor-pointer">Login</Button>
      <p className="text-center">
        Don't have an account?{" "}
        <Link
          href="/signup"
          className="text-gray-700 underline dark:text-gray-300"
        >
          Signup
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;
