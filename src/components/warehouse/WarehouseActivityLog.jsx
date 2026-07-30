import React from 'react';
import { MoreHorizontal, CheckSquare, PlusSquare, Truck, FileText } from 'lucide-react';
import { mockActivityLog } from '../../data/mockWarehouse';
import { cn } from '../../utils/cn';

export function WarehouseActivityLog() {
  const getIcon = (type) => {
    switch(type) {
      case 'check': return <CheckSquare className="w-4 h-4" />;
      case 'add': return <PlusSquare className="w-4 h-4" />;
      case 'dispatch': return <Truck className="w-4 h-4" />;
      case 'document': return <FileText className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getIconBg = (type) => {
    switch(type) {
      case 'check': return 'bg-[#242628] text-white';
      case 'add': return 'bg-[#7b5cfa] text-white';
      case 'dispatch': return 'bg-[#242628] text-white';
      case 'document': return 'bg-[#7b5cfa] text-white';
      default: return 'bg-slate-200 text-slate-600';
    }
  };

  return (
    <div className="bg-white rounded-[12px] p-4 lg:p-5 border border-slate-100 h-full flex flex-col hover:shadow-sm transition-shadow">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-[15px] font-bold text-slate-900">Warehouse Activity Log</h3>
        <button className="text-slate-400 hover:text-slate-600">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="flex flex-col">
        {mockActivityLog.map((log, index) => (
          <div 
            key={log.id} 
            className={cn(
              "flex gap-4 py-4", 
              index !== mockActivityLog.length - 1 && "border-b border-slate-100"
            )}
          >
            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0", getIconBg(log.iconType))}>
              {getIcon(log.iconType)}
            </div>
            <div className="flex-1 pt-0.5">
              <p className="text-[13px] text-slate-600 leading-relaxed">
                <span className="font-bold text-[#7b5cfa] hover:underline cursor-pointer">{log.user}</span> {log.action}
              </p>
              <span className="text-[11px] text-slate-400 font-medium mt-1 block">{log.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
