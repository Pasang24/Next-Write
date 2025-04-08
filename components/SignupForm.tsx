"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { User } from "@/types";
import { toast } from "sonner";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });

  const router = useRouter();

  const signupHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // logic for handling signup
    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;

    setErrors({
      nameError: "",
      emailError: "",
      passwordError: "",
    });

    if (name.trim().length === 0) {
      setErrors((prev) => ({
        ...prev,
        nameError: "Please enter a valid Username!",
      }));
      return;
    }
    if (!EMAIL_REGEX.test(email)) {
      setErrors((prev) => ({
        ...prev,
        emailError: "Please enter a valid email!",
      }));
      return;
    }
    if (!PASSWORD_REGEX.test(password)) {
      setErrors((prev) => ({
        ...prev,
        passwordError:
          "Password must be 8 characters long with one uppercase and one speacial character",
      }));
      return;
    }

    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    let userAlreadyExists = users.some((user) => user.email === email);

    if (userAlreadyExists) {
      toast.error("User Already Exists", {
        description:
          "User with the email address already exists. Please use another email",
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
      console.log("User Already exists");
    } else {
      let newUser: User = {
        name,
        email,
        password,
      };

      const updatedUsers: User[] = [...users, newUser];

      localStorage.setItem("users", JSON.stringify(updatedUsers));
      router.push("/login");
    }
  };

  return (
    <form
      onSubmit={signupHandler}
      className="flex flex-col gap-6 border-2 rounded-sm p-4 w-full max-w-96"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-semibold">
          Username
        </label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
          id="name"
          className="p-2 rounded-sm border-2 text-sm"
        />
        {errors.nameError && (
          <span className="text-xs text-red-400">{errors.nameError}</span>
        )}
      </div>
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
      <Button className="cursor-pointer">Create Account</Button>
      <p className="text-center">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-gray-700 underline dark:text-gray-300"
        >
          Login
        </Link>
      </p>
    </form>
  );
}

export default SignupForm;
