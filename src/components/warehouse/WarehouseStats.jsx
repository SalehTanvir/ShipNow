import React from 'react';
import { mockWarehouseStats } from '../../data/mockWarehouse';
import { TrendingUp } from 'lucide-react';

export function WarehouseStats() {
  const stats = [
    { label: 'Total SKU', ...mockWarehouseStats.totalSKU },
    { label: 'Quantity on Hand', ...mockWarehouseStats.quantityOnHand, unit: 'units' },
    { label: 'Capacity Usage', ...mockWarehouseStats.capacityUsage, unit: 'Full' }
  ];

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      {stats.map((stat, idx) => (
        <div key={idx} className="flex-1 bg-white rounded-[12px] px-5 py-4 border border-slate-100 flex flex-col justify-between hover:shadow-sm transition-shadow">
          <p className="text-[13px] text-slate-500 font-medium mb-2">{stat.label}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-1.5">
              <h3 className="text-[26px] font-bold text-slate-900 leading-none">{stat.value}</h3>
              {stat.unit && <span className="text-[13px] text-slate-400 font-medium">{stat.unit}</span>}
            </div>
            <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
              <TrendingUp className="w-3 h-3" strokeWidth={2.5} />
              {stat.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
