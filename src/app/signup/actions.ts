// handleSubmit.tsx
"use server";

import { redirect } from "next/navigation";
import { signup } from "@/app/login/actions"; // Adjust the import path accordingly

export async function handleSubmit(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const retypePassword = formData.get("rt-password") as string;

  if (!email || !password || !retypePassword) {
    throw new Error("All fields are required.");
  }

  if (password !== retypePassword) {
    throw new Error("Passwords do not match.");
  }

  try {
    await signup({ email, password });
  } catch (error: any) {
    throw new Error(error.message || "An error occurred during sign-up.");
  } finally {
        redirect("/");

  }
}
