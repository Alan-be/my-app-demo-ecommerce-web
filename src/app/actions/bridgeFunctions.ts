"use server"

import { retrieveCategories, retrieveSpecificProducts } from "./actions";

export async function getCategories(){
    try {

        const data = await retrieveCategories()
        return data
    } catch (error:any) {
        console.log("Error: ",error);
        throw new Error(error.message || "An error occurred during sign-up.");
        
        
    }
}

export async function getProducts(product_name: string | number,column: string) {
    try {
        const data = await retrieveSpecificProducts(product_name,column)
        return data
    } catch (error:any) {
        console.log("Error: ", error);
        throw new Error(error.message || "Un error ocurrio")
        
        
    }
}