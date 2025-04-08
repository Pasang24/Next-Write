"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // logic for handling signup
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
