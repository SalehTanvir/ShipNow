import React from 'react';
import { mockWarehouseStats } from '../../data/mockWarehouse';
import { ArrowUpRight } from 'lucide-react';

export function WarehouseStats() {
  const stats = [
    { label: 'Total SKU', ...mockWarehouseStats.totalSKU },
    { label: 'Quantity on Hand', ...mockWarehouseStats.quantityOnHand },
    { label: 'Capacity Usage', ...mockWarehouseStats.capacityUsage, subtitle: 'Full' }
  ];

  return (
    <div className="flex flex-col md:flex-row lg:flex-col gap-4 w-full">
      {stats.map((stat, idx) => (
        <div key={idx} className="flex-1 bg-white rounded-2xl p-4 lg:p-5 border border-slate-100 flex flex-col hover:shadow-sm transition-shadow">
          <p className="text-[13px] text-slate-500 font-medium mb-1">{stat.label}</p>
          <div className="flex items-center justify-between mt-1">
            <div className="flex items-baseline gap-1">
              <h3 className="text-[24px] font-bold text-slate-900 leading-none">{stat.value}</h3>
              {stat.subtitle && <span className="text-[12px] text-slate-400 font-medium ml-1">{stat.subtitle}</span>}
              {stat.label === 'Quantity on Hand' && <span className="text-[12px] text-slate-400 font-medium ml-1">units</span>}
            </div>
            <div className="flex items-center gap-0.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
              <ArrowUpRight className="w-3 h-3" strokeWidth={3} />
              {stat.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
