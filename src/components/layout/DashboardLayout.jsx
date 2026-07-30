import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Footer } from './Footer';
import { Menu } from 'lucide-react';

export function DashboardLayout({ children, showHeader = true, showFooter = true, title = 'Warehouse' }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f9fc] flex font-sans">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        <div className="sticky top-0 z-30 bg-white md:bg-[#f8f9fc]/90 backdrop-blur-sm shadow-sm md:shadow-none">
          {showHeader ? (
            <Header onMenuClick={() => setIsSidebarOpen(true)} />
          ) : (
            <div className="md:hidden px-4 py-3 flex items-center justify-between bg-white border-b border-slate-100">
              <div className="flex items-center gap-2">
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
              <span className="text-[16px] font-bold text-slate-900">{title}</span>
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-1.5 -mr-1 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
        <main className={`flex-1 p-4 lg:p-8 ${showHeader ? 'pt-4 md:pt-0' : ''} overflow-x-hidden`}>
          <div className="max-w-[1440px] mx-auto w-full">
            {children}
          </div>
        </main>
        {showFooter && <Footer />}
      </div>
    </div>
  );
}
