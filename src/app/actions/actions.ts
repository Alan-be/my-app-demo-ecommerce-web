"use server"

import { createClient } from "@/utils/supabase/server"


export async function retrieveCategories() {
    const supabase = await createClient()

    const {data,error} = await supabase.from('categories').select()

    if(error){
        console.log(error, "An error occurred during sign-up.");
        throw new Error(error.message || "An error occurred during sign-up.");
    }

    return data;
    
}

export async function retrieveProducts() {
    const supabase = await createClient();
    const {data,error } = await supabase.from('products').select()
    if(error){
        console.log(error, "An error occurred during sign-up.");
        throw new Error(error.message || "An error occurred during sign-up.");
    }

    return data;
}

export async function retrieveSpecificProducts(product_name: string | number,column:string ) {
    const supabase = await createClient();
    const {data,error } = await supabase.from('products').select().eq(column,product_name)
    if(error){
        console.log(error, "An error occurred during sign-up.");
        throw new Error(error.message || "An error occurred during sign-up.");
    }

    return data;
}
