// signup.tsx
"use server";

import { createClient } from "@/utils/supabase/server";

export async function signup({ email, password }: { email: string; password: string }) {
  const supabase = await createClient();

  const data = {
    email,
    password,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.log(error, "An error occurred during sign-up.");
    throw new Error(error.message || "An error occurred during sign-up.");
  }

  return { success: true };
}
