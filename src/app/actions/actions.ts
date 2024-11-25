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