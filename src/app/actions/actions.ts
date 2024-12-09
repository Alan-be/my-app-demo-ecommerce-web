"use server";
import { createClient } from "@/utils/supabase/server";

export async function retrieveCategories() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("categories").select();

  if (error) {
    console.log(error, "An error occurred during sign-up.");
    throw new Error(error.message || "An error occurred during sign-up.");
  }

  return data;
}

export async function retrieveProducts() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("products").select();
  if (error) {
    console.log(error, "An error occurred during sign-up.");
    throw new Error(error.message || "An error occurred during sign-up.");
  }

  return data;
}

export async function retrieveSpecificProducts(
  product_name: string | number,
  column: string
) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select()
    .eq(column, product_name);
  if (error) {
    console.log(error, "An error occurred during sign-up.");
    throw new Error(error.message || "An error occurred during sign-up.");
  }

  return data;
}

export async function logout() {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      await supabase.auth.signOut();
      return true;
    }
  } catch (error: any) {
    console.log(error, "error");
  }
}

export async function insertItem(actions: []) {
    try {
        
        
    } catch (error) {
        
    }

}

export async function getOrCreateCart(customer_id_entry: any) {
  try {
    const supabase = await createClient();

    console.log(customer_id_entry, "profile");

    let { data, error } = await supabase.rpc("get_or_create_cart", {
      customer_id_entry,
    });

    if (error) console.error(error);

    return data;
  } catch (error: any) {
    console.log(error, "error");
    throw new Error(error.message || "An error occurred during sign-up.");
  }
}
