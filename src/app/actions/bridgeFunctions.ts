"use server"

import { retrieveCategories } from "./actions";

export async function getCategories(){
    try {

        const data = await retrieveCategories()
        return data
    } catch (error:any) {
        console.log("Error: ",error);
        throw new Error(error.message || "An error occurred during sign-up.");
        
        
    }
}