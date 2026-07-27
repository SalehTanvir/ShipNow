import React from 'react';
import { Search, Plus, Menu } from 'lucide-react';
import { Input } from '../common/Input';
import { Button } from '../common/Button';

export function Header({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 bg-[#f8f9fc] lg:bg-transparent pt-4 lg:pt-8 pb-4 px-4 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div>
          <p className="text-[14px] text-slate-500 font-medium leading-none mb-1">Hello John!</p>
          <h1 className="text-[24px] lg:text-[28px] font-bold text-slate-900 leading-none">Good Morning</h1>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
        <div className="relative w-full sm:w-[280px] lg:w-[320px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-xl leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] focus:border-[#7c3aed] sm:text-sm transition-all"
            placeholder="Search anything"
          />
        </div>
        
        <button className="flex-none flex items-center justify-center gap-2 bg-[#2a2b2e] hover:bg-black text-white px-4 lg:px-5 py-2.5 rounded-xl font-semibold text-[14px] transition-colors whitespace-nowrap">
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Add New Shipping</span>
          <span className="sm:hidden">Add</span>
        </button>
      </div>
    </header>
  );
}
