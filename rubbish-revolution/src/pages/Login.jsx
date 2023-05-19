import React, { useState } from 'react'
import { Facebook, GitHub, Google } from '@mui/icons-material'
import { Link } from "react-router-dom";
const Login = () => {

  const [isLogin, setIsLogin] = useState(true);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerAvatar, setRegisterAvatar] = useState("");

  const LoginForm = () => {
    return (
      <div className="bg-primary rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
        <h2 className='p-3 text-3xl font-bold text-white'>Rubbish Revolution</h2>
        <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
        <h3 className='text-xl font-semibold text-white pt-2'>Welcome Back</h3>
        <div className='flex space-x-2 m-4 items-center justify-center'>
          <div className="socialIcon">
            <Facebook />
          </div>
          <div className="socialIcon">
            <GitHub />
          </div>
          <div className="socialIcon">
            <Google />
          </div>
        </div>
        {/* Inputs */}
        <div className='flex flex-col items-center justify-center'>
          <input type='email' className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px]  m-1 focus:shadow-md  focus:outline-none focus:ring-0' placeholder='Email'></input>
          <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px]  m-1 focus:shadow-md  focus:outline-none focus:ring-0' placeholder='Password'></input>
          <Link to={"/home"}>
            <button className='rounded-2xl my-4 text-white bg-sky-500 w-full px-6 py-2 shadow-md hover:text-secondary hover:bg-sky-600 transition duration-200 ease-in'>
              Sign In
            </button>
          </Link>
        </div>
        <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
        <p className='text-white mt-4 text-sm'>Don't have an account?</p>
        <p className='text-white mb-4 text-sm font-medium cursor-pointer' onClick={() => setIsLogin(false)}>Create a New Account?</p>
      </div>
    )
  }

  const SignUpForm = () => {
    return (
      <div className="bg-primary text-black rounded-2xl shadow-2xl  flex flex-col w-full  md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in">
        <h2 className='p-3 text-3xl font-bold text-white'>Rubbish Revolution</h2>
        <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
        <h3 className='text-xl font-semibold text-white pt-2'>Create Account!</h3>
        <div className='flex space-x-2 m-4 items-center justify-center'>
          <div className="socialIcon border-white">
            <Facebook className="text-white" />
          </div>
          <div className="socialIcon border-white">
            <GitHub className="text-white" />
          </div>
          <div className="socialIcon border-white">
            <Google className="text-white" />
          </div>
        </div>
        {/* Inputs */}
        <div className='flex flex-col items-center justify-center mt-2'>
          <input type='text' className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px]  m-1 focus:shadow-md  focus:outline-none focus:ring-0' placeholder='Name'></input>
          <input type='email' className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px]  m-1 focus:shadow-md  focus:outline-none focus:ring-0' placeholder='Email'></input>
          <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px]  m-1 focus:shadow-md  focus:outline-none focus:ring-0' placeholder='Password'></input>
          <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px]  m-1 focus:shadow-md  focus:outline-none focus:ring-0' placeholder='Confirm Password'></input>
          <Link to={"/home"}>
            <button className='rounded-2xl my-4 text-white bg-sky-500 w-full px-6 py-2 shadow-md hover:text-secondary hover:bg-sky-600 transition duration-200 ease-in'>
              Sign Up
            </button>
          </Link>
        </div>
        <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
        <p className='text-white mt-4 text-sm'>Already have an account?</p>
        <p className='text-white mb-4 text-sm font-medium cursor-pointer' onClick={() => setIsLogin(true)}>Sign In to your Account?</p>
      </div>
    )
  }

  return (
    <div className="bg-gray-600 flex flex-col items-center justify-center min-h-screen md:py-2">
      <main className="flex items-center w-full px-2 md:px-20">
        <div className="hidden md:inline-flex flex-col flex-1 space-y-1">
          <p className='text-6xl text-blue-500 font-bold'>Rubbish Revolution</p>
          <p className='font-medium text-lg leading-1 text-primary'>Stop the pollution. Be part of the solution.</p>
        </div>
        {
          isLogin ? (
            <LoginForm />
          ) : (
            <SignUpForm />
          )
        }
      </main>
    </div>
  )
}

export default Login