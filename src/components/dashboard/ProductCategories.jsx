import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import clsx from 'clsx';

export function ProductCategories() {
  const categories = [
    { name: 'Electronics', count: 240, percent: 24, color: 'bg-[#7c3aed]' },
    { name: 'Home & Kitchen', count: 200, percent: 20, color: 'bg-[#d8b4fe]' },
    { name: 'Apparel', count: 180, percent: 18, color: 'bg-[#1e293b]' },
    { name: 'Beauty & Health', count: 140, percent: 14, color: 'bg-[#64748b]' },
    { name: 'Sports & Outdoors', count: 120, percent: 12, color: 'bg-[#cbd5e1]' },
    { name: 'Automotive', count: 120, percent: 12, color: 'bg-[#e2e8f0]' },
  ];

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[16px] font-bold text-slate-900">Product Categories</h3>
        <button className="p-1 hover:bg-slate-50 rounded-lg text-slate-400 transition-colors bg-slate-50">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      <div className="flex justify-between items-end border-b border-slate-100 pb-4 mb-4">
        <span className="text-[13px] text-slate-500 font-medium">Total Products</span>
        <span className="text-[24px] font-bold text-slate-900 leading-none">1,000</span>
      </div>

      {/* Segmented Progress Bar */}
      <div className="flex w-full h-[34px] rounded-lg overflow-hidden mb-6">
        {categories.map((cat, i) => (
          <div 
            key={i} 
            className={clsx("h-full", cat.color)}
            style={{ width: `${cat.percent}%` }}
          />
        ))}
      </div>

      {/* List */}
      <div className="space-y-4 flex-1 overflow-y-auto pr-1 custom-scrollbar">
        {categories.map((cat, i) => (
          <div key={i} className="flex items-center justify-between group">
            <div className="flex items-center gap-3">
              <span className={clsx("w-2 h-2 rounded-full", cat.color)} />
              <span className="text-[14px] font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                {cat.name}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-semibold text-slate-500 bg-slate-100/80 px-2 py-1 rounded">{cat.count} products</span>
              <span className="text-[13px] font-bold text-slate-900 w-8 text-right">{cat.percent}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
