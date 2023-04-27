import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Login() {
  return (
    <div className='bg-primary grid grid-cols-2 h-[600px] '>
      <div>
        <img className='ml-16 mt-16 h-96' src="/images/plastic.jpg" alt="" />
      </div>
      <div className='flex flex-col mt-16'>
        <div className='text-white font-bold text-3xl '>Create Account</div>
        <div className='text-white text-lg'>Welcome! Enter your details and start earning by heldiving the society GO GREEN</div>
        <div className='relative'>
          <input className='mt-3 pl-10 shadow-sm rounded-xl w-56 h-8  pb-1' type="text" name="" id="" placeholder='Username' />
          <div className="absolute inset-y-1 left-0 pt-2 pl-1  flex items-center">
            <PersonOutlineIcon className="text-gray-400 ml-1" />
          </div>
        </div>

        <div className='relative'>
          <input className='mt-3 pl-10 shadow-sm rounded-xl w-56 h-8  pb-1' type="email" name="" id="" placeholder='Email Address' />
          <div className="absolute inset-y-1 left-0 pt-2 pl-1  flex items-center">
            <MailOutlineIcon className="text-gray-400 pb-1 ml-1 mt-2" />
          </div>
        </div>

        <div className='relative'>
          <input className='mt-3 pl-10 shadow-sm rounded-xl w-56 h-8  pb-1' type="password" name="" id="" placeholder='Password' />
          <div className="absolute inset-y-1 left-0 pt-2 pl-1  flex items-center">
            <LockOutlinedIcon className="text-gray-400 pb-1 mt-1 ml-1" />
          </div>
        </div>

        <div className='relative'>
          <input className='mt-3 pl-10 shadow-sm rounded-xl w-56 h-8  pb-1' type="password" name="" id="" placeholder='Confirm Password' />
          <div className="absolute inset-y-1 left-0 pt-2 pl-1  flex items-center">
            <LockOutlinedIcon className="text-gray-400 pb-1 ml-1 mt-1 " />
          </div>
        </div>
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
