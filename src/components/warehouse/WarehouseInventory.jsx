import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { mockInventory } from '../../data/mockWarehouse';
import { cn } from '../../utils/cn';

export function WarehouseInventory() {
  return (
    <div className="bg-white rounded-2xl p-5 lg:p-6 border border-slate-100 h-full flex flex-col hover:shadow-sm transition-shadow">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-[15px] font-bold text-slate-900">Warehouse Inventory</h3>
          <div className="flex items-baseline gap-1 mt-2">
            <span className="text-[28px] font-bold text-slate-900 leading-none">10,000</span>
            <span className="text-[13px] text-slate-400 font-medium">packages</span>
          </div>
        </div>
        <button className="text-slate-400 hover:text-slate-600">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 flex items-end justify-between gap-2 lg:gap-4 mt-4">
        {mockInventory.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center flex-1 w-full max-w-[60px]">
            <span className="text-[10px] lg:text-[11px] text-slate-400 font-medium text-center mb-3 min-h-[32px]">{item.category}</span>
            <div className="w-full h-[140px] lg:h-[180px] bg-slate-50 rounded-t-lg relative overflow-hidden">
              <div 
                className={cn("absolute bottom-0 left-0 w-full rounded-t-lg transition-all duration-500", item.color)}
                style={{ 
                  height: `${item.percentage * 2.5}%`,
                  backgroundImage: item.isStriped ? `repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,0.2) 5px, rgba(255,255,255,0.2) 10px)` : 'none'
                }}
              />
            </div>
            <div className="mt-3 text-center">
              <span className="text-[11px] lg:text-[12px] font-bold text-slate-900 block">{item.percentage}%</span>
              <span className="text-[10px] lg:text-[11px] text-slate-400">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
