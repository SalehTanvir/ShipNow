import React, { useState } from 'react';
import { MoreHorizontal, Box } from 'lucide-react';
import { mockPackageStatus } from '../../data/mockWarehouse';
import { cn } from '../../utils/cn';

export function PackageStatus() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Expected', 'Received', 'Sent'];

  const getStatusStyle = (status) => {
    switch(status) {
      case 'Sent': return 'bg-[#7b5cfa]/10 text-[#7b5cfa]';
      case 'Received': return 'bg-emerald-50 text-emerald-600';
      case 'Expected': return 'bg-slate-100 text-slate-600';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  const filtered = mockPackageStatus.filter((pkg) => {
    return activeTab === 'All' || pkg.status === activeTab;
  });

  return (
    <div className="bg-white rounded-[12px] p-4 md:p-5 border border-slate-100 h-full flex flex-col hover:shadow-sm transition-shadow">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-[15px] font-bold text-slate-900">Package Status</h3>
        <button className="text-slate-400 hover:text-slate-600">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center bg-slate-50 p-1 rounded-lg mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "flex-1 text-[11px] md:text-[12px] font-medium py-1.5 px-1.5 md:px-3 rounded-md transition-colors whitespace-nowrap",
              activeTab === tab ? "bg-[#242628] text-white shadow-sm" : "text-slate-500 hover:text-slate-700"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {filtered.map((pkg, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#7b5cfa]/10 flex items-center justify-center text-[#7b5cfa] shrink-0">
                <Box className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[13px] font-bold text-slate-900 leading-tight mb-0.5">{pkg.id}</p>
                <p className="text-[11px] text-slate-400 font-medium">{pkg.date}</p>
              </div>
            </div>
            <div className={cn("px-2.5 py-1 rounded-md text-[11px] font-bold", getStatusStyle(pkg.status))}>
              {pkg.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
