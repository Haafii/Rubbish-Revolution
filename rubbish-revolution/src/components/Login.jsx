import React from 'react'

function Login() {
  return (
      <div className='bg-primary grid grid-cols-2 h-[600px] '>
        <div>
          <img className='ml-16 mt-16 h-96' src="/images/plastic.jpg" alt="" />
        </div>
        <div className='flex flex-col mt-16'>
          <div className='text-white font-bold text-3xl '>Create Account</div>
          <div className='text-white text-lg'>Welcome! Enter your details and start earning by heldiving the society GO GREEN</div>
          <input className='mt-3 pl-6 shadow-sm rounded-xl w-56 h-8 placeholder:italic' type="text" name="" id="" placeholder='Username' />
          <input className='mt-3 pl-6 shadow-sm rounded-xl w-56 h-8 placeholder:italic' type="email" name="" id="" placeholder='Email Address' />
          <input className='mt-3 pl-6 shadow-sm rounded-xl w-56 h-8 placeholder:italic' type="password" name="" id="" placeholder='Password' />
          <input className='mt-3 pl-6 shadow-sm rounded-xl w-56 h-8 placeholder:italic' type="password" name="" id="" placeholder='Confirm Password' />
          <button className='text-white rounded-full bg-sky-500 w-56 mt-3 h-8'>Create Account</button>
        </div>
        <div className='flex justify-start m-10'>
          LOGO
        </div>
        <div className='flex justify-end m-10'>
          <button className='text-white rounded-xl bg-sky-500 w-24 mt-3 h-8'>Sign Up</button>
        </div>
      </div>
  )
}
export default Login
