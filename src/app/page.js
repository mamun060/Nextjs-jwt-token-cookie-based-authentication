"use client"
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Hello Programmers</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
       <div className=' flex gap-2 justify-center'>
         <Link replace href={'/login'}> <button className="btn btn-primary">Login</button> </Link>
         <Link replace href={'/dashboard'}> <button className="btn btn-primary">Dashboard</button> </Link>
       </div>
      </div>
    </div>
  </div>
  )
}

export default page