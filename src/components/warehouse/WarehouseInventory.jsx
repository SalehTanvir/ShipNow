import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { mockInventory } from '../../data/mockWarehouse';
import { cn } from '../../utils/cn';

export function WarehouseInventory() {
  return (
    <div className="bg-white rounded-[12px] p-4 md:p-5 border border-slate-100 w-full h-full flex flex-col hover:shadow-sm transition-shadow">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-[15px] font-bold text-slate-900">Warehouse Inventory</h3>
          <div className="flex items-baseline gap-1 mt-0.5 sm:hidden">
            <span className="text-[20px] font-bold text-slate-900 leading-none">10,000</span>
            <span className="text-[11px] text-slate-400 font-medium">packages</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-baseline gap-1">
            <span className="text-[18px] md:text-[22px] font-bold text-slate-900 leading-none">10,000</span>
            <span className="text-[11px] md:text-[12px] text-slate-400 font-medium">packages</span>
          </div>
          <button className="text-slate-400 hover:text-slate-600 transition-colors">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ── MOBILE HORIZONTAL BAR CHART VIEW (sm:hidden) ── */}
      <div className="sm:hidden flex flex-col pt-1 divide-y divide-dashed divide-slate-200">
        {mockInventory.map((item, idx) => {
          const MAX_PCT = 25; // highest percentage in the data set
          const fillPct = Math.round((item.percentage / MAX_PCT) * 100);
          return (
            <div key={idx} className="flex items-center gap-3 py-2.5">
              {/* Bar track – fixed width container, fill scales by percentage */}
              <div className="w-[130px] shrink-0 h-[42px] bg-slate-100 rounded-[8px] overflow-hidden">
                <div
                  className={cn('h-full rounded-[8px] transition-all duration-700', item.color)}
                  style={{
                    width: `${fillPct}%`,
                    backgroundImage: item.isStriped
                      ? `repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.28) 4px, rgba(255,255,255,0.28) 8px)`
                      : 'none',
                  }}
                />
              </div>

              {/* Label + stats aligned to right */}
              <div className="flex-1 text-right">
                <p className="text-[12px] font-medium text-slate-500 leading-tight mb-0.5">{item.category}</p>
                <div className="flex items-baseline justify-end gap-1.5 leading-none">
                  <span className="text-[12px] font-bold text-slate-900">{item.percentage}%</span>
                  <span className="text-[11px] text-slate-400 font-medium">· {item.value}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── TABLET / DESKTOP VERTICAL BAR CHART (hidden sm:flex) ── */}
      <div className="hidden sm:flex flex-1 items-end justify-between gap-1.5 md:gap-3 pt-2">
        {mockInventory.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center flex-1 min-w-0">
            {/* Category label */}
            <span className="text-[9px] md:text-[11px] text-slate-400 font-medium text-center leading-tight mb-2 min-h-[24px] flex items-end justify-center px-0.5">
              {item.category}
            </span>

            {/* Bar track */}
            <div className="w-full relative h-[110px] md:h-[135px]">
              <div className="absolute inset-0 bg-slate-50 rounded-[6px]" />
              <div
                className={cn(
                  'absolute bottom-0 left-0 w-full rounded-[6px] transition-all duration-700',
                  item.color
                )}
                style={{
                  height: `${Math.min(item.percentage * 4, 100)}%`,
                  backgroundImage: item.isStriped
                    ? `repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.25) 4px, rgba(255,255,255,0.25) 8px)`
                    : 'none',
                }}
              />
            </div>

            {/* Percentage + value */}
            <div className="mt-2 text-center">
              <span className="text-[11px] md:text-[12px] font-bold text-slate-800 block leading-none">{item.percentage}%</span>
              <span className="text-[9px] md:text-[10px] text-slate-400 font-medium mt-0.5 block">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
