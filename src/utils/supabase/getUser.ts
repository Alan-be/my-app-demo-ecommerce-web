import { createBrowserClient } from "@supabase/ssr";
import { createClient } from "./client";



export async function getUserAndSesion() {


    const supabase = createClient()

    const { data: { user }, error } = await supabase.auth.getUser();

    if(error || !user){
        return false
    }

    return user;
}