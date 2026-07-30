import React from 'react';
import { Plane, Truck, Ship, Train, Box } from 'lucide-react';
import { CompanyLogo } from '../common/CompanyLogo';

export function ShipmentCard({ data }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'In Transit': return 'bg-purple-100 text-purple-600';
      case 'Delivered': return 'bg-emerald-100 text-emerald-600';
      case 'Processing': return 'bg-yellow-100 text-yellow-600';
      case 'Out for Delivery': return 'bg-slate-100 text-slate-600';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Air Freight': return <Plane className="w-4 h-4 text-slate-500" />;
      case 'Road Freight': return <Truck className="w-4 h-4 text-slate-500" />;
      case 'Ocean Freight': return <Ship className="w-4 h-4 text-slate-500" />;
      case 'Rail Freight': return <Train className="w-4 h-4 text-slate-500" />;
      default: return <Box className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex justify-between items-start mb-5">
        <div className="flex flex-col gap-1.5">
          <span className="text-[14px] font-bold text-slate-900">#{data.id}</span>
          <span className={`text-[11px] font-bold px-2 py-0.5 rounded max-w-fit ${getStatusColor(data.status)}`}>
            {data.status}
          </span>
        </div>
        <button className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-slate-100 transition-colors">
          {getTypeIcon(data.type)}
        </button>
      </div>

      {/* Company Info */}
      <div className="flex items-center gap-3 mb-6">
        <CompanyLogo name={data.company} className="w-9 h-9" />
        <div className="flex flex-col">
          <span className="text-[13px] font-bold text-slate-900">{data.company}</span>
          <span className="text-[11px] text-slate-400">{data.category}</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex gap-4 mb-6 relative">
        {/* Vertical line connecting the dots */}
        <div className="absolute left-[5px] top-[18px] bottom-[18px] w-[2px] bg-slate-100 z-0"></div>
        
        {/* Timeline icons */}
        <div className="flex flex-col justify-between py-1 z-10">
          <div className="w-3 h-3 rounded-full border-2 border-purple-200 bg-purple-600"></div>
          <div className="w-3 h-3 rounded-full border-2 border-purple-200 bg-white"></div>
        </div>
        
        {/* Timeline Content */}
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex justify-between items-center">
            <span className="text-[11px] text-slate-400">Origin</span>
            <div className="flex flex-col items-end">
              <span className="text-[12px] font-bold text-slate-900">{data.origin.location}</span>
              <span className="text-[10px] text-slate-400">{data.origin.date}</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[11px] text-slate-400">Destination</span>
            <div className="flex flex-col items-end">
              <span className="text-[12px] font-bold text-slate-900">{data.destination.location}</span>
              <span className="text-[10px] text-slate-400">{data.destination.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress & Carrier */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center text-[11px]">
          <span className="text-slate-500 font-medium">Progress <strong className="text-slate-900">{data.progress}%</strong></span>
          <span className="text-slate-500 font-medium">Carriers <strong className="text-slate-900">{data.carrier}</strong></span>
        </div>
        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-purple-600 rounded-full" 
            style={{ width: `${data.progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
