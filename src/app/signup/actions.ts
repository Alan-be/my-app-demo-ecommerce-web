
"use server";
import { signup } from "@/app/login/actions"; 

export async function handleSubmit(formData: FormData) {
  let response : any = false
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
    response = await signup({ email, password });
    return response
  } catch (error: any) {
    return { success: false, message: error.message || "An error occurred during sign-up." };
  } 
}
