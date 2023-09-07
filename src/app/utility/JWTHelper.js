import { SignJWT, jwtVerify } from "jose"
import { NextResponse } from "next/server";


// jwt token encode 
export async function CreateToken(email){
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const payload = {email: email}
    const token = await new SignJWT(payload)
    .setProtectedHeader({alg: "HS256"})
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_EXPERATION)
    .sign(secret)

    return token;
}


// jwt token decode 
export async function TokenVerify(token){
    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    const decoded = await jwtVerify(token, secret)

    return decoded['payload'];
}


// export async function POST(req, res){
//     const jsonbody = await req.json();
//     const token = jsonbody['token'];

//     const key = new TextEncoder().encode(process.env.JWT_SECRET);
//     const decoded = await jwtVerify(token, key);
    
//     return NextResponse.json( decoded )
// }