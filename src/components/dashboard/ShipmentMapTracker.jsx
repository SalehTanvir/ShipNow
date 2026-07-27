import React from 'react';
import { Search, Plus, Minus, Navigation, Truck } from 'lucide-react';

export function ShipmentMapTracker() {
  return (
    <div className="bg-[#f0f1f3] p-4 sm:p-5 rounded-2xl flex flex-col relative overflow-hidden h-full min-h-[380px]">

      
      {/* Background Angled Line & Center Icon */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full left-0 top-0" preserveAspectRatio="none" viewBox="0 0 1000 400">
          <line x1="-100" y1="350" x2="500" y2="180" stroke="#1e293b" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <line x1="500" y1="180" x2="1100" y2="10" stroke="#7c3aed" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
        </svg>
        
        {/* Center Icon positioned exactly at x=500(50%), y=180(45%) */}
        <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-10 h-10 bg-[#7c3aed] rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(244,63,94,0.4)]">
            <Navigation className="w-4 h-4 text-white transform rotate-[45deg] -ml-0.5 mt-0.5" fill="white" />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-between items-start w-full">
        <div className="relative w-[200px] sm:w-[260px]">
          <input
            type="text"
            className="block w-full pl-4 pr-10 py-2.5 border-none rounded-xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-100 text-[13px] transition-all"
            placeholder="Search by Shipping ID..."
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400" />
          </div>
        </div>

        <div className="flex flex-col bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] overflow-hidden">
          <button className="p-2 hover:bg-slate-50 text-slate-500 transition-colors"><Plus className="w-4 h-4" /></button>
          <div className="w-full h-px bg-slate-100"></div>
          <button className="p-2 hover:bg-slate-50 text-slate-500 transition-colors"><Minus className="w-4 h-4" /></button>
        </div>
      </div>

      <div className="relative z-10 mt-auto bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] p-5 w-full">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="text-[15px] font-bold text-slate-900">#SH8743921</h4>
            <div className="flex items-center gap-2 mt-1">
              <span className="bg-purple-100 text-[#7c3aed] text-[10px] font-bold px-2 py-0.5 rounded">In Transit</span>
              <span className="text-[11px] text-slate-500 font-medium">On Schedule</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[11px] text-slate-400 font-medium mb-0.5">Courier:</p>
            <p className="text-[13px] font-bold text-slate-900 leading-tight">Daniel Cooper</p>
            <p className="text-[10px] text-slate-500">SkyLogix Express</p>
          </div>
        </div>

        <div className="relative w-full h-[3px] bg-slate-200 rounded-full mb-6 mt-4">
          <div className="absolute top-0 left-0 h-full bg-[#7c3aed] rounded-full" style={{ width: '65%' }}></div>
          
          {/* Left Dot (Bullseye with halo) */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[22px] h-[22px] bg-purple-100 rounded-full flex items-center justify-center">
            <div className="w-[14px] h-[14px] bg-[#7c3aed] rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Truck Icon */}
          <div className="absolute left-[65%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[26px] h-[26px] bg-[#7c3aed] rounded-full flex items-center justify-center shadow-md shadow-purple-500/30">
            <Truck className="w-3.5 h-3.5 text-white" />
          </div>

          {/* Right Dot */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[18px] h-[18px] bg-white border-[3px] border-slate-200 rounded-full"></div>
        </div>

        <div className="flex justify-between items-start">
          <div>
            <p className="text-[13px] font-bold text-slate-900">San Francisco, CA, USA</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Mar 19, 2025 - 10:30 AM</p>
          </div>
          <div className="text-right">
            <p className="text-[13px] font-bold text-slate-900">New York, NY, USA</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Mar 23, 2025 - 02:00 PM <span className="italic">(estimated)</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
