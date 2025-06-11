import React, { useState } from 'react';
import { Eye, EyeOff,LogIn,Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';

const SignUp = () => {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [confirmPassword,setConfirmpassword]=useState();
    const [pic,setPic]=useState();
    const [show,setShow]=useState(false)
    const [show1,setShow1]=useState(false)
    const [loading,setLoading]=useState(false)

    const postDetails = (pics) => {
  setLoading(true);

  if (pics === undefined) {
    toast.error('Please select an image!');
    setLoading(false);
    return;
  }

  const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  if (validTypes.includes(pics.type)) {
    const data = new FormData();
    data.append('file', pics);
    data.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
    data.append('cloud_name', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

    fetch(import.meta.env.VITE_CLOUDINARY_UPLOAD_URL, {
      method: 'POST',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setPic(data.url.toString());
        console.log(data.url.toString());
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  } else {
    toast.error('Image type must be .jpeg, .png or .jpg!');
    setLoading(false);
  }
};


    const handleSubmit=()=>{

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
      
      {/* Sign Up Form Container */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-gray-800/50">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="relative inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-violet-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                </svg>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 to-indigo-700 rounded-full blur opacity-20 animate-pulse"></div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Create Account
            </h2>
            <p className="text-gray-400">Join us and start your journey</p>
          </div>
          
          {/* Form */}
          <div className="space-y-6">
            {/* Name Field */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-400 mb-2 transition-colors group-focus-within:text-violet-400">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-4 bg-gray-900/50 border border-gray-700/50 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-600/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  placeholder="Enter your full name"
                  onChange={(e)=>setName(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
              </div>
            </div>
            
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
                   onChange={(e)=>setEmail(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-white/42">
                  <Mail size={20}/>
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
                  type={show1?"text":"password"}
                  className="w-full px-4 py-4 bg-gray-900/50 border border-gray-700/50 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-600/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  placeholder="Create a strong password"
                   onChange={(e)=>setPassword(e.target.value)}
                />
                <button
                type='button'
                onClick={()=>setShow1(!show1)}
                className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition'>
                    {show1? <EyeOff size={20}/>:<Eye size={20}/>}
                </button>
              </div>
            </div>

            {/* Password Field */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-400 mb-2 transition-colors group-focus-within:text-violet-400">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={show? "text":"password"}
                  className="w-full px-4 py-4 bg-gray-900/50 border border-gray-700/50 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-600/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  placeholder="Confirm your password"
                   onChange={(e)=>setConfirmpassword(e.target.value)}
                />
                <button
                type='button'
                onClick={()=>setShow(!show)}
                className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition'
                >
                {show? <EyeOff size={20}/>:<Eye size={20}/>}
                </button>
              </div>
            </div>
            
            {/* Profile Picture Field */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-400 mb-2 transition-colors group-focus-within:text-violet-400">
                Profile Picture (Optional)
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept='image/'
                  className="w-full px-4 py-4 bg-gray-900/50 border border-gray-700/50 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-600/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  placeholder="Enter image URL or leave blank for default"
                  onChange={(e)=>postDetails(e.target.files[0])}
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            
            
            {/* Sign Up Button */}
            <button className="w-full bg-gradient-to-r from-violet-700 to-indigo-700 hover:from-violet-800 hover:to-indigo-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-violet-600/50"
            onClick={handleSubmit} >
              <span className="gap-2 flex items-center justify-center">
                Create Account
                <LogIn />
              </span>
            </button>
            
            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700/50"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                {/* <span className="px-2 bg-black/50 text-gray-500 backdrop-blur-sm">Or sign up with</span> */}
              </div>
            </div>
            
           
            
            {/* Sign In Link */}
            <div className="text-center">
              <p className="text-gray-500">
                Already have an account?{' '}
                <Link to="/login" className="text-violet-400 hover:text-violet-300 font-medium transition-colors">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;