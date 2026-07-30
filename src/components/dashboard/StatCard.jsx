import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export function StatCard({ title, value, change, isPositive, icon: Icon, iconSrc, subtitle, changeLabel }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between h-full">
      {/* Top row: title + icon */}
      <div className="flex justify-between items-start mb-3">
        <p className="text-[13px] text-slate-500 font-medium">{title}</p>
        {iconSrc ? (
          <img src={iconSrc} alt="" className="w-[42px] h-[42px] flex-shrink-0" />
        ) : Icon ? (
          <div className="w-10 h-10 rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center text-[#8b5cf6] flex-shrink-0">
            <Icon className="w-5 h-5" />
          </div>
        ) : null}
      </div>

      {/* Value + subtitle */}
      <div className="flex items-baseline gap-1.5 mb-3">
        <h3 className="text-[28px] font-bold text-slate-900 leading-none">{value}</h3>
        {subtitle && <span className="text-[13px] text-slate-400 font-medium">{subtitle}</span>}
      </div>

      {/* Change badge */}
      <div className="flex items-center gap-1.5">
        <div className={cn(
          "flex items-center gap-1 text-[11px] font-bold px-1.5 py-0.5 rounded-md",
          isPositive ? "text-emerald-600 bg-emerald-50" : "text-rose-500 bg-rose-50"
        )}>
          {isPositive ? (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          )}
          {change}
        </div>
        <span className="text-[11px] text-slate-400 font-medium">{changeLabel || 'from last week'}</span>
      </div>
    </div>
  );
}
