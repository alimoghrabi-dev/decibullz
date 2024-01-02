"use client";

import { Loader2, X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";
import { AuthError } from "next-auth";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirectTo: DEFAULT_LOGIN_REDIRECT,
      });
    } catch (error) {
      if (error instanceof AuthError) {
        setMessage("Something went wrong!");
      }
      setMessage("Invalid credentials");
    } finally {
      setIsLoading(false);
      setData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-1/2 flex flex-col items-center justify-center">
      <label
        htmlFor="email"
        className="w-full text-start font-medium text-lg mb-0.5">
        Email:
      </label>
      <Input
        id="email"
        value={data.email}
        onChange={handleChange}
        name="email"
        type="email"
        placeholder="Type your email"
        className="w-full rounded-[2px] border border-gray-950/90 text-base placeholder:text-gray-600 placeholder:text-[15px] hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary transition duration-100 py-6 placeholder:font-medium"
      />
      <label
        htmlFor="password"
        className="w-full text-start font-medium text-lg mb-0.5 mt-5">
        Password:
      </label>
      <Input
        id="password"
        value={data.password}
        onChange={handleChange}
        name="password"
        type="password"
        placeholder="Type your password"
        className="w-full rounded-[2px] border border-gray-950/90 text-base placeholder:text-gray-600 placeholder:text-[15px] hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary transition duration-100 py-6 placeholder:font-medium"
      />
      {message ? (
        <p className="bg-red-200 rounded-lg text-base font-medium text-red-600 px-2.5 py-1.5 flex items-center gap-1.5 mt-2.5 self-start">
          <X className="mt-0.5 w-5 h-5" />
          {message}
        </p>
      ) : null}
      <Button
        disabled={isLoading}
        type="submit"
        className="w-full rounded-[2px] bg-gray-950 text-white mt-6">
        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;
