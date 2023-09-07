"use client";
import { useState } from "react";
import {useRouter} from 'next/navigation'

function Page() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [formValues, setFormValues] = useState({ email: '' , password: ''});
  const router = useRouter();


  const handleChanges = (name, value) =>{
    setFormValues({...formValues, [name]: value })
  }

  const handleLoginSubmit = async (e)=> {
    e.preventDefault();
    const config = {method: 'POST' , body: JSON.stringify(formValues)}
    const response = await fetch('/api/login', config )
    const json = await response.json()

    if(json['status'] === true) {
      router.replace('/dashboard');
    } else {
      alert(json['message']);
    }

  }



  return (
    <div className="hero min-h-screen bg-base-200">
      
      <div className="hero-content m-auto sm:w-[420px] w-[350px] ">
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <div className="card-body">
          <h1 className="text-2xl font-bold text-center">Login now</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input onChange={(e)=> handleChanges('email', e.target.value)} type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input onChange={(e)=> handleChanges('password', e.target.value )} type="text" placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button onClick={handleLoginSubmit} className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;