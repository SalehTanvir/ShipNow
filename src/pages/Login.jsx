import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      remember: true
    }
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log('Login submitted:', data);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen w-full bg-[#1e1e24] flex items-center justify-center font-sans overflow-y-auto py-4 lg:py-0">
      {/* Outer 1440px x 1024px Desktop Canvas */}
      <div className="w-full max-w-[1440px] lg:min-h-[1024px] flex flex-col lg:flex-row bg-white shadow-2xl">
        
        {/* LEFT SIDE: 720px x 1024px, Padding 106px, Gap 42px */}
        <div className="w-full lg:w-[720px] lg:min-h-[1024px] bg-[#7c56ff] flex flex-col items-center justify-between p-8 sm:p-12 lg:p-[106px] gap-[42px] box-border relative overflow-hidden flex-shrink-0">
          
          {/* Logo Section: Icon 23.48 x 25.04, Text 176 x 41 */}
          <div className="flex items-center justify-center gap-3 relative z-10">
            <svg width="46.96" height="46.96" viewBox="0 0 56.96 56.96" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              <g transform="translate(5, 5)">
                {/* Rectangle 3 (Top-Left) */}
                <g transform="translate(12.8, 1.57) skewX(-18)">
                  <rect x="0" y="0" width="15.38" height="25.04" rx="3" fill="#18181b" />
                </g>
                {/* Rectangle 2 (Bottom-Right) */}
                <g transform="translate(26.88, 20.35) skewX(-18)">
                  <rect x="0" y="0" width="15.38" height="25.04" rx="3" fill="#18181b" />
                </g>
              </g>
            </svg>
            <span 
              className="w-[176px] h-[41px] flex items-center text-white italic uppercase tracking-normal leading-[120%]"
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 900,
                fontSize: '34.43px',
              }}
            >
              SHIPNOW
            </span>
          </div>

          {/* Image Composition: Main 410 x 386, Floating Card 178.46 x 228 */}
          <div className="relative w-[410px] h-[386px] flex-shrink-0">
            {/* Main Delivery Truck Card */}
            <div className="w-[410px] h-[386px] rounded-[24px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=800&q=80" 
                alt="Delivery Truck" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Top-Right Card */}
            <div className="absolute -top-[30px] -right-[10px] w-[178.46px] h-[228px] rounded-[20px] overflow-hidden shadow-2xl border-4 border-[#7c56ff] z-10">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&q=80" 
                alt="User inspecting delivery" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bottom Text: Heading 487 x 44, Subtitle 487 x 40 */}
          <div className="w-full max-w-[487px] text-center text-white flex flex-col items-center gap-2">
            <h1 
              className="w-[487px] h-[44px] text-white text-center flex items-center justify-center"
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 800,
                fontSize: '40px',
                lineHeight: '1.10',
              }}
            >
              Welcome to ShipNow
            </h1>
            <p 
              className="w-[487px] h-[40px] text-white/90 text-center flex items-center justify-center"
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '1.25',
              }}
            >
              Manage your shipments, fleet, and warehouse in one smart dashboard.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE (Form): Centered Vertically & Horizontally for Desktop & Mobile */}
        <div className="w-full lg:w-[720px] lg:min-h-[1024px] bg-white flex flex-col justify-center items-center p-8 sm:p-12 lg:px-[160px] gap-[32px] rounded-[10px] box-border flex-shrink-0">
          
          {/* Top Logo Icon (Purple Variant) */}
          <div className="flex justify-center">
            <img 
              src="/symbol.svg" 
              width="46.96" 
              height="46.96" 
              className="flex-shrink-0" 
              alt="Logo"
            />
          </div>

          {/* Title & Subtitle */}
          <div className="text-center w-full max-w-[400px]">
            <h2 className="text-[26px] font-bold text-slate-900 mb-1.5 tracking-tight">
              Welcome Back
            </h2>
            <p className="text-[13px] text-slate-500 font-medium leading-normal">
              Log in to continue managing your logistics with ShipNow
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4 w-full max-w-[400px]" onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Email Field */}
            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter a valid email address"
                className={`w-full h-11 px-4 rounded-xl bg-[#f4f4f6] text-xs text-slate-900 placeholder-slate-400 border border-transparent focus:bg-white focus:border-[#7c56ff] focus:outline-none transition-all ${
                  errors.email ? 'border-red-500 bg-red-50/50' : ''
                }`}
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Please enter a valid email address'
                  }
                })}
              />
              {errors.email && (
                <p className="mt-1 text-[11px] text-red-500 font-medium">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a strong password"
                  className={`w-full h-11 pl-4 pr-10 rounded-xl bg-[#f4f4f6] text-xs text-slate-900 placeholder-slate-400 border border-transparent focus:bg-white focus:border-[#7c56ff] focus:outline-none transition-all ${
                    errors.password ? 'border-red-500 bg-red-50/50' : ''
                  }`}
                  {...register('password', { 
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters'
                    }
                  })}
                />
                <button
                  type="button"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Eye className="h-4 w-4" />
                  ) : (
                    <EyeOff className="h-4 w-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-[11px] text-red-500 font-medium">{errors.password.message}</p>
              )}
            </div>

            {/* Checkbox & Forgot Password */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-300 text-[#7c56ff] focus:ring-[#7c56ff] accent-[#7c56ff]"
                  {...register('remember')}
                />
                <span className="text-slate-600 font-medium">Remember Me</span>
              </label>

              <a href="#" className="text-[#7c56ff] font-medium hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-12 bg-[#222225] hover:bg-black text-white font-semibold text-xs rounded-xl transition-colors shadow-sm mt-2"
            >
              Login
            </button>
          </form>

          {/* Footer Text */}
          <p className="text-center text-xs text-slate-500 font-medium w-full max-w-[400px]">
            Don't have an account?{' '}
            <a href="#" className="text-[#7c56ff] font-semibold hover:underline">
              Register
            </a>
          </p>

        </div>
      </div>
    </div>
  );
}
