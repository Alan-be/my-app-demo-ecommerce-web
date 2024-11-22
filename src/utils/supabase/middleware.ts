import { createServerClient } from "@supabase/ssr";
import { NextRequest, NextResponse } from "next/server";


export async function updateSession(request: NextRequest){
    let supabaseResponse = NextResponse.next({
        request
    })

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll(){
                    return request.cookies.getAll()
                },
                setAll(cookiesSet){
                    cookiesSet.forEach(({name,value,options}) => request.cookies.set(name,value))
                    supabaseResponse = NextResponse.next({
                        request
                    })
                    cookiesSet.forEach(({name,value,options}) => 
                        supabaseResponse.cookies.set(name,value,options)
                    )
                    

                },
            },
        }
    
    )

    const {
        data: {user},
    } = await supabase.auth.getUser()

    console.log(user,"s");
    
    if (
        !user &&
        !request.nextUrl.pathname.startsWith('/login') &&
        !request.nextUrl.pathname.startsWith('/auth')
    ) {
        console.log('Redirigiendo a login desde:', request.nextUrl.pathname);

        const url = request.nextUrl.clone();
        url.pathname = '/login';
        return NextResponse.redirect(url);
    }

    return supabaseResponse
}

