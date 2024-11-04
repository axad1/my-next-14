import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export function middleware(req: NextRequest){

    if(req.nextUrl.pathname === "/comments"){

        console.log("req ==>nextUrl *", req.nextUrl);
        console.log("req ==> url *", req.url);
        // if(req.nextUrl.pathname === '/profile')
        // return NextResponse.redirect(new URL("/dashboard", req.url));
        
        const res = NextResponse.next();
        const theme = req.cookies.get("theme")
        if(!theme) res.cookies.set("theme", "dark");
        
        
        return res;
    }

    // cookies().set


    // return NextResponse.next().cookies.set("theme", "dark");
    

    // return NextResponse.json("okay")
    // return NextResponse.redirect(new URL("/",  req.url))

}

// export const config = {
//     matcher: "/profile"
// }