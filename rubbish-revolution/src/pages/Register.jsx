import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, GitHub, Google } from '@mui/icons-material'

function Register() {

  const role = localStorage.getItem('role');

  const navigate = useNavigate();
  const [registerName, setRegisterName] = useState("");
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [newRole, setNewRole] = useState("user");
  // console.log(newRole)
  const onSubmit = async (e) => {
    // if (newRole === "") {
    //   setNewRole("user");
    // }
    setIsLoading(true);
    e.preventDefault()
    if (password !== registerConfirmPassword) {
      setError('Passwords do not match')
      return
    }
    let update = {
      Name: registerName,
      email: email,
      password: password,
      role: newRole
    };
    // console.log(newRole);
    var requestOptions = {
      method: 'POST',
      body: JSON.stringify(update),
      headers: {
        "content-type": "application/json"
      }
    };
    fetch("https://mini-project-mkgl.onrender.com/user", requestOptions)
      .then(response => response.json())
      .then(result => {
        let error_detail = result.error
        console.log(result)
        if (result.error && error_detail.includes("already exist")) {
          setError("User Already Exist")
        }
        else if(role == "admin"){
          navigate("/home");
        }else{
          navigate("/")
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.log('error', error)
        setError("Sign up failed. Please try again.")
        setIsLoading(false);
      });
    if (role !== "admin") {
      setNewRole("user");
      console.log(newRole);
    }
  }


  return (
    <div className="bg-primary flex flex-col items-center justify-center min-h-screen md:py-2">
      <main className="flex items-center w-full px-2 md:px-20">
        <div className="hidden md:inline-flex flex-col flex-1 space-y-1">
          <p className='text-6xl text-blue-500 font-bold'>Rubbish Revolution</p>
          <p className='font-medium text-lg leading-1 text-white'>Stop the pollution. Be part of the solution.</p>
        </div>
        <div className="bg-secondary text-black rounded-2xl shadow-2xl  flex flex-col w-full  md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in">
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
          <form onSubmit={onSubmit}>
            <div className='flex flex-col items-center justify-center mt-2'>
              <input
                label="Username"
                value={registerName}
                type='text'
                className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px]  m-1 focus:shadow-md  focus:outline-none focus:ring-0'
                placeholder='Username'
                onChange={(e) => { setRegisterName(e.target.value), setError(null), setIsLoading(false) }}
                required
              />
              <input
                type="email"
                label="Email address"
                value={email}
                onChange={(e) => { setEmail(e.target.value), setError(null), setIsLoading(false) }}
                className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px]  m-1 focus:shadow-md  focus:outline-none focus:ring-0'
                placeholder='Email'
                required
              />
              <input
                label="Create password"
                value={password}
                onChange={(e) => { setPassword(e.target.value), setError(null), setIsLoading(false) }}
                type='password'
                className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px]  m-1 focus:shadow-md  focus:outline-none focus:ring-0'
                placeholder='password'
                required
              />
              <input
                label="Confirm password"
                value={registerConfirmPassword}
                type="text"
                className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px]  m-1 focus:shadow-md  focus:outline-none focus:ring-0'
                placeholder='Confirm Password'
                onChange={(e) => { setRegisterConfirmPassword(e.target.value), setError(null), setIsLoading(false) }}
                required
              />
              {role === "admin" ? (
                <select
                  className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] m-1 focus:shadow-md focus:outline-none focus:ring-0'
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value)}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="store">Store</option>
                </select>
              ) : ""}
              {error && <div className='text-red-600 text-sm font-bold'>{error}</div>}
              <button
                type="submit"
                className='rounded-2xl my-4 text-white bg-sky-500 w-full px-6 py-2 shadow-md hover:text-secondary hover:bg-sky-600 transition duration-200 ease-in'
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mx-auto"></div> // Loading spinner
                ) : (
                  'Sign Up'
                )}
              </button>
            </div>
          </form>
          <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
          <p className='text-white mt-4 text-sm'>Already have an account?</p>
          <Link
            className='text-white mb-4 text-sm font-medium cursor-pointer'
            to="/"
          >
            Sign In to your Account?
          </Link>
        </div>
      </main>
    </div>
  )
}
export default Register
