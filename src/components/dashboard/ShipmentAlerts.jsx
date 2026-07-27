import React from 'react';
import { MoreHorizontal, AlertCircle, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import clsx from 'clsx';

export function ShipmentAlerts() {
  const alertStats = [
    { label: 'Customs Clearance Delay', count: 5, color: 'bg-purple-100 text-[#7c3aed]' },
    { label: 'Incorrect Address Provided', count: 4, color: 'bg-purple-50 text-[#8b5cf6]' },
    { label: 'Weather-Related Hold', count: 3, color: 'bg-purple-50/50 text-[#a78bfa]' },
  ];

  const alerts = [
    { id: '#SH8743921', type: 'Customs Clearance Delay', route: 'Ocean Freight · Mar 20', icon: AlertCircle },
    { id: '#SH8725810', type: 'Incorrect Address Provided', route: 'Road Freight · Mar 20', icon: MapPin },
    { id: '#SH8790043', type: 'Weather-Related Hold', route: 'Air Freight · Mar 19', icon: Clock },
    { id: '#SH8718654', type: 'Incorrect Address Provided', route: 'Rail Freight · Mar 18', icon: MapPin },
  ];

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[16px] font-bold text-slate-900">Shipment Alerts</h3>
        <button className="p-1 hover:bg-slate-50 rounded-lg text-slate-400 transition-colors bg-slate-50">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-[28px] font-bold text-slate-900 leading-none">12</span>
        <span className="text-[13px] text-slate-500 font-medium">Delays Detected</span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-6">
        {alertStats.map((stat, i) => (
          <div key={i} className={clsx("rounded-xl p-2 flex flex-col items-center justify-center text-center h-[90px]", stat.color)}>
            <span className="text-[22px] font-bold leading-none mb-1.5">{stat.count}</span>
            <span className="text-[10px] font-semibold leading-tight px-1">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="space-y-3 flex-1 overflow-y-auto pr-1 custom-scrollbar">
        {alerts.map((alert, i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors group cursor-pointer">
            <div className="p-2 rounded-lg bg-slate-50 text-slate-500 group-hover:bg-purple-50 group-hover:text-[#7c3aed] transition-colors mt-0.5">
              <alert.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-bold text-slate-900 truncate">{alert.type}</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[11px] font-bold text-[#7c3aed]">{alert.id}</span>
                <span className="text-[11px] text-slate-400 truncate">- {alert.route}</span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
}
