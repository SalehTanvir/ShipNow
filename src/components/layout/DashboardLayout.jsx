import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Footer } from './Footer';
import { Menu } from 'lucide-react';

export function DashboardLayout({ children, showHeader = true, showFooter = true }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f9fc] flex font-sans">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        <div className="sticky top-0 z-30 bg-[#f8f9fc]/90 backdrop-blur-sm">
          {showHeader ? (
            <Header onMenuClick={() => setIsSidebarOpen(true)} />
          ) : (
            <div className="md:hidden px-4 pt-4 pb-2 flex justify-start">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
        <main className={`flex-1 p-4 lg:p-8 ${showHeader ? 'pt-0' : ''} overflow-x-hidden`}>
          <div className="max-w-[1440px] mx-auto w-full">
            {children}
          </div>
        </main>
        {showFooter && <Footer />}
      </div>
    </div>
  );
}
