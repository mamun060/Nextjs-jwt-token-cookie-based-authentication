import { NextResponse } from "next/server";
import { TokenVerify } from "./JWTHelper";

export async function CheckCookieAuth(request){
    try {
        const token = request.cookies.get('token');
        const payload = await TokenVerify(token['value']);
        const requestHeaders = new Headers(request.headers)
        requestHeaders.set('email', payload['email'])

        return NextResponse.next({
            request: {headers: requestHeaders}
        })

    } catch (error) {
        return NextResponse.redirect( new URL('/login', request.url))
    }
}