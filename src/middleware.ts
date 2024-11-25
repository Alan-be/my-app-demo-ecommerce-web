import { type NextRequest } from "next/server";
import { updateSession} from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest){


    return await updateSession(request)
}

export const config = {
    matcher: [
        // Aplica el middleware a todo excepto rutas específicas (ej.: "/about", "/contact")
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$|about|contact).*)',
        
        // Middleware explícito para otras rutas
        '/home',
        '/dashboard/:path*', // Aplica a cualquier ruta bajo /dashboard
      ]
}