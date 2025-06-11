import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate  } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';
import axios from 'axios'



const Login = () => {
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const [show,setShow]=useState(false);
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate()

    const handleSubmit=async()=>{
      setLoading(true);
      if(!email || !password){
        toast.error('Please enter all the details')
        setLoading(false)
        return;
      }
      try {
        const config={
          headers:{
            'Content-type':'application/json'
          }
        }

        const {data}=await axios.post('/api/user/login',
          {email,password},
          config
        )
        toast.success("login successful")
        localStorage.setItem("userInfo", JSON.stringify(data))
        setLoading(false)

      } catch (error) {
        toast.error('Something went wrong')
        setLoading(false)
      }
    }
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-violet-600/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-indigo-600/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-purple-600/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>
      <ToastContainer/>
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-1 h-1 bg-gray-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-violet-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-1 h-1 bg-indigo-400 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-3000"></div>
      </div>
      
      {/* Login Form Container */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-gray-800/50">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="relative inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-violet-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 to-indigo-700 rounded-full blur opacity-20 animate-pulse"></div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Welcome Back
            </h2>
            <p className="text-gray-400">Sign in to continue your journey</p>
          </div>
          
          {/* Form */}
          <div className="space-y-6">
            {/* Email Field */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-400 mb-2 transition-colors group-focus-within:text-violet-400">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full px-4 py-4 bg-gray-900/50 border border-gray-700/50 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-600/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Password Field */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-400 mb-2 transition-colors group-focus-within:text-violet-400">
                Password
              </label>
              <div className="relative">
                <input
                  type={show?"text":"password"}
                  className="w-full px-4 py-4 bg-gray-900/50 border border-gray-700/50 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-600/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
                <button
                type='button'
                onClick={()=>setShow(!show)}
                className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition'>
                {show? <EyeOff size={20}/>:<Eye size={20}/>}
                </button>
              </div>
            </div>
        
            
            {/* Login Button */}
            <button className="w-full bg-gradient-to-r from-violet-700 to-indigo-700 hover:from-violet-800 hover:to-indigo-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-violet-600/50"
            onClick={handleSubmit}>
              <span className="flex items-center justify-center">
                Sign In
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </button>
            <button
            className="w-full bg-gradient-to-r from-violet-700 to-indigo-700 hover:from-violet-800 hover:to-indigo-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-violet-600/50"
            onClick={()=>{
                setEmail("guest@example.com")
                setPassword("123456")
            }}
            >
                Get Guest User Credentials
            </button>
            
            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700/50"></div>
              </div>
              <div className="relative flex justify-center text-sm">

              </div>
            </div>
            
            
            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-gray-500">
                Don't have an account?{' '}
                <Link to="/signup" className="text-violet-400 hover:text-violet-300 font-medium transition-colors">
                  Sign up here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;