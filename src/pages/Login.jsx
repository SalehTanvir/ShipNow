import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from '../components/common/Input';
import { Button } from '../components/common/Button';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log('Login submitted:', data);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white font-sans">
      {/* Left Purple Section */}
      <div className="bg-[#8b5cf6] lg:w-[50%] flex-none lg:flex flex-col relative py-10 px-8 overflow-hidden">
        
        {/* Desktop Logo - Top Left */}
        <div className="hidden lg:flex items-center gap-3 relative z-10 w-full max-w-[600px] mx-auto">
          <svg className="h-7 w-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="4" width="4" height="10" transform="skewX(-15)" fill="#333333" />
            <rect x="11" y="10" width="4" height="10" transform="skewX(-15)" fill="#FFFFFF" />
          </svg>
          <span className="text-white font-extrabold italic text-2xl tracking-wide">SHIPNOW</span>
        </div>

        {/* Content Container */}
        <div className="flex-1 flex flex-col justify-center items-center relative z-10 mt-12 lg:mt-0 w-full max-w-[600px] mx-auto">
          
          {/* Mobile/Tablet Logo (Centered) */}
          <div className="flex lg:hidden items-center gap-3 mb-10">
            <svg className="h-7 w-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="4" width="4" height="10" transform="skewX(-15)" fill="#333333" />
              <rect x="11" y="10" width="4" height="10" transform="skewX(-15)" fill="#FFFFFF" />
            </svg>
            <span className="text-white font-extrabold italic text-2xl tracking-wide">SHIPNOW</span>
          </div>

          {/* Image Composition */}
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px] mb-12">
            <div className="relative w-[85%] aspect-square">
              {/* Main Truck Image */}
              <img 
                src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=600&q=80" 
                alt="Delivery Truck" 
                className="w-full h-full object-cover rounded-[1.5rem] shadow-lg"
              />
            </div>
            {/* Overlay Image (Person) - Positioned Top Right */}
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=300&q=80" 
              alt="Logistics Manager" 
              className="absolute right-0 top-4 w-[40%] aspect-[3/4] object-cover rounded-2xl shadow-xl z-10"
            />
          </div>

          <div className="text-center px-4 w-full">
            <h1 className="text-[32px] lg:text-[40px] font-bold text-white mb-4 leading-tight">
              Welcome to ShipNow
            </h1>
            <p className="text-white/90 text-[15px] lg:text-[16px] max-w-[380px] mx-auto leading-relaxed font-light">
              Manage your shipments, fleet, and warehouse in one smart dashboard.
            </p>
          </div>
        </div>
      </div>

      {/* Right White Form Section */}
      <div className="flex-1 lg:w-[50%] flex flex-col justify-center items-center p-8 sm:p-12 lg:p-24 bg-white relative">
        <div className="w-full max-w-[400px]">
          
          {/* Form Header Logo (Purple variants) */}
          <div className="flex justify-center mb-8">
            <svg className="h-8 w-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="4" width="4" height="10" transform="skewX(-15)" fill="#a78bfa" />
              <rect x="11" y="10" width="4" height="10" transform="skewX(-15)" fill="#7c3aed" />
            </svg>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-[26px] font-bold text-slate-900 mb-2">Welcome Back</h2>
            <p className="text-[14px] text-slate-500 font-medium">
              Log in to continue managing your logistics with ShipNow
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Input
              label="Email Address"
              type="email"
              placeholder="Enter a valid email address"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address'
                }
              })}
              error={errors.email?.message}
            />

            <Input
              label="Password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a strong password"
              {...register('password', { 
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters'
                }
              })}
              error={errors.password?.message}
              rightElement={
                <button
                  type="button"
                  className="text-slate-400 hover:text-slate-600 focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Eye className="h-5 w-5" />
                  ) : (
                    <EyeOff className="h-5 w-5" />
                  )}
                </button>
              }
            />

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-[#8b5cf6] focus:ring-[#8b5cf6]"
                  {...register('remember')}
                />
                <label htmlFor="remember-me" className="ml-2 block text-[13px] text-slate-500 font-medium">
                  Remember Me
                </label>
              </div>

              <a href="#" className="text-[13px] font-medium text-[#8b5cf6] hover:text-purple-700 transition-colors">
                Forgot Password?
              </a>
            </div>

            <div className="pt-2">
              <Button type="submit" className="w-full h-12 text-[15px] font-medium bg-[#2a2b2e] hover:bg-black text-white rounded-lg">
                Login
              </Button>
            </div>
          </form>

          <p className="mt-8 text-center text-[13px] text-slate-500 font-medium">
            Don't have an account?{' '}
            <a href="#" className="text-[#8b5cf6] font-medium hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
