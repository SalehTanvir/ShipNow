import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search, Plus, Menu } from 'lucide-react';

export function Header({ onMenuClick }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isDashboard = location.pathname === '/' || location.pathname === '/dashboard';
  const hideSearchAndButton = ['/analytics', '/calendar', '/drivers', '/fleets', '/messages', '/notifications', '/settings', '/tracking'].includes(location.pathname);

  const getPageTitle = (pathname) => {
    if (pathname === '/' || pathname === '/dashboard') return 'Dashboard';
    if (pathname === '/invoices') return 'Invoices & Billing';
    const name = pathname.substring(1);
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <header className="bg-white md:bg-transparent">
      {/* Mobile Header (< md) */}
      <div className="md:hidden flex flex-col gap-3 px-4 pt-3.5 pb-3 border-b border-slate-100/80 bg-white">
        {/* Top Row: Logo - Centered Title - Menu Button */}
        <div className="flex items-center justify-between relative h-7">
          {/* Logo */}
          <div className="flex items-center">
            <svg width="22" height="22" viewBox="0 0 56.96 56.96" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              <g transform="translate(5, 5)">
                <g transform="translate(12.8, 1.57) skewX(-18)">
                  <rect x="0" y="0" width="15.38" height="25.04" rx="3" fill="#a78bfa" />
                </g>
                <g transform="translate(26.88, 20.35) skewX(-18)">
                  <rect x="0" y="0" width="15.38" height="25.04" rx="3" fill="#7c3aed" />
                </g>
              </g>
            </svg>
          </div>

          {/* Centered Page Title */}
          <h1 className="text-[16px] font-semibold text-slate-800 tracking-tight text-center absolute left-1/2 -translate-x-1/2">
            {getPageTitle(location.pathname)}
          </h1>

          {/* Hamburger Menu Button */}
          <button 
            onClick={onMenuClick}
            className="p-1 -mr-1 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Open Menu"
          >
            <Menu className="w-5 h-5 text-slate-700" />
          </button>
        </div>

        {/* Second Row: Search Bar + Plus Button */}
        {!hideSearchAndButton && (
          <div className="flex items-center gap-2.5">
            <div className="flex-1 relative flex items-center bg-[#f2f3f7] rounded-xl px-3 py-2">
              <Search className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search anything"
                className="bg-transparent border-0 outline-none w-full text-[14px] text-slate-800 placeholder-slate-400 focus:outline-none p-0"
              />
            </div>

            <button 
              onClick={() => navigate('/shipments/new')}
              className="w-10 h-10 flex-shrink-0 bg-[#2a2b2e] hover:bg-black text-white rounded-xl flex items-center justify-center transition-colors shadow-sm"
              aria-label="Add New Shipping"
            >
              <Plus className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        )}
      </div>

      {/* Desktop Header (>= md) */}
      <div className="hidden md:block pt-6 lg:pt-8 pb-4 px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between gap-4">
          <div>
            {isDashboard ? (
              <>
                <p className="text-[14px] text-slate-500 font-medium leading-none mb-1">Hello John!</p>
                <h1 className="text-[24px] lg:text-[28px] font-bold text-slate-900 leading-none">Good Morning</h1>
              </>
            ) : (
              <h1 className="text-[24px] lg:text-[28px] font-bold text-slate-900 leading-none">
                {getPageTitle(location.pathname)}
              </h1>
            )}
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {!hideSearchAndButton && (
              <>
                <div className="relative w-[280px] lg:w-[320px]">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-xl leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] focus:border-[#7c3aed] text-sm transition-all"
                    placeholder="Search anything"
                  />
                </div>
                
                <button 
                  onClick={() => navigate('/shipments/new')}
                  className="flex-none flex items-center justify-center gap-2 bg-[#2a2b2e] hover:bg-black text-white px-4 lg:px-5 py-2.5 rounded-xl font-semibold text-[14px] transition-colors whitespace-nowrap"
                >
                  <Plus className="w-4 h-4 hidden sm:inline" />
                  <span className="hidden lg:inline">Add New Shipping</span>
                  <span className="inline lg:hidden">New Shipping</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

