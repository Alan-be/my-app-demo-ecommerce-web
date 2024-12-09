"use server";
import { redirect } from "next/navigation";
import {
  logout,
  retrieveCategories,
  retrieveProducts,
  retrieveSpecificProducts,
} from "./actions";
import { signin } from "../login/actions";


export async function getCategories() {
  try {
    const data = await retrieveCategories();
    return data;
  } catch (error: any) {
    console.log("Error: ", error);
    throw new Error(error.message || "An error occurred during sign-up.");
  }
}

export async function getProducts(
  product_name: string | number,
  column: string
) {
  try {
    const data = await retrieveSpecificProducts(product_name, column);
    return data;
  } catch (error: any) {
    console.log("Error: ", error);
    throw new Error(error.message || "Un error ocurrio");
  }
}

export async function getAllProducts() {
  try {
    const data = await retrieveProducts();
    return data;
  } catch (error: any) {
    console.log("Error: ");
    throw new Error(error.message || "En error ocurrio");
  }
}

export async function logoutUser() {
  try {
    const data = await logout();
    console.log(data,"data");
    
    return data;
  } catch (error: any) {
    console.log("Error: ");
    throw new Error(error.message || "Un error ocurrio");
  }
}

export async function handleSubmitLogin(formData: FormData) {
  let response: any = false;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;



  if (!email || !password) {
    throw new Error("All fields are required.");
  }


  try {
    response = await signin({ email, password });
    return response
  } catch (error: any) {
    return { success: false, message: error.message || "An error occurred during sign-up." };
  } 
}


