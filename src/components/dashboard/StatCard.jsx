import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export function StatCard({ title, value, change, isPositive, icon: Icon, subtitle }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 flex flex-col justify-between h-full hover:shadow-sm transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-[13px] text-slate-500 font-medium mb-1">{title}</p>
          <div className="flex items-baseline gap-1">
            <h3 className="text-[26px] font-bold text-slate-900 leading-none">{value}</h3>
            {subtitle && <span className="text-[12px] text-slate-400 font-medium ml-1">{subtitle}</span>}
          </div>
        </div>
        <div className="w-10 h-10 rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center text-[#8b5cf6]">
          <Icon className="w-5 h-5" />
        </div>
      </div>
      
      <div className="flex items-center gap-1.5 mt-auto">
        <div className={cn(
          "flex items-center gap-1 text-[11px] font-bold px-1.5 py-0.5 rounded-md",
          isPositive ? "text-emerald-600 bg-emerald-50" : "text-rose-600 bg-rose-50"
        )}>
          {isPositive ? (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          )}
          {change}
        </div>
        <span className="text-[11px] text-slate-400 font-medium">from last week</span>
      </div>
    </div>
  );
}
