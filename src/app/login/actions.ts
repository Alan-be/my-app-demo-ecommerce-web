// signup.tsx
"use server";

import { createClient } from "@/utils/supabase/server";



export async function signup({ email, password }: { email: string; password: string }) {
  const supabase = await createClient();

  const data_send = {
    email,
    password,
  };

  const { data,error } = await supabase.auth.signUp(data_send);

  if (error) {
    console.log(error, "An error occurred during sign-up.");
    throw new Error(error.message || "An error occurred during sign-up.");
  }

  return { success: true,data:data.user };
}

export async function signin({ email, password }: { email: string; password: string }) {
  const supabase = await createClient()


  const data_send = {
    email,
    password,
  };


  const {data,error} = await supabase.auth.signInWithPassword(data_send)
  
  console.log(data.session?.user.id);
  
  if (error) {
    console.log(error, "An error occurred during sign-up.");

    throw new Error(error.message || "An error occurred during sign-up.");
  }

  return { success: true,data:data.user };

  
}