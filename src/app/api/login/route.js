import { TokenCookie } from "@/app/utility/TokenCookie";
import { NextResponse } from "next/server";


// For user login and set cookie
export async function POST(req, res){
    const jsonbody = await req.json();
    const email = jsonbody['email'];
    const pass = jsonbody['password']

    // Database check for user information but now we have don't database so we just check static data

    if( email === 'admin@gmail.com' && pass === '123'){
        const Cookie = await TokenCookie(email);
        return NextResponse.json(
            {
                status: true,
                message: "Login Success",
            },
            {
                status: 200,
                headers: Cookie
            }
        )
    } else {
        return NextResponse.json({
            status: false,
            message: "Login Failed"
        })
    }
}


// for user logout and cookie banished 
export async function GET(req, res){
    cookies().delete('token');

    return NextResponse.json({
        status: true,
        message: "Logout Successfull"
    })
}