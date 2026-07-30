import React, { useState } from 'react';
import { Search, Filter, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { ShipmentCard } from './ShipmentCard';

export function ShipmentsGridView({ data }) {
  const tabs = ['All', 'Delivered', 'In Transit', 'Processing', 'Out for Delivery'];
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = data.filter((shipment) => {
    const matchStatus = selectedStatus === 'All' || shipment.status === selectedStatus;
    const matchSearch = 
      shipment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.carrier.toLowerCase().includes(searchTerm.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div className="flex flex-col gap-6 w-full">
      
      {/* Toolbar */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
        {/* Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto pb-2 xl:pb-0 hide-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedStatus(tab)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-[13px] font-medium transition-colors ${
                selectedStatus === tab 
                  ? 'bg-slate-800 text-white' 
                  : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search Shipment" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-[240px] pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-[13px] focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all placeholder:text-slate-400 shadow-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-[13px] font-medium text-slate-600 hover:bg-slate-50 shadow-sm transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <div className="flex items-center gap-2 ml-2">
            <span className="text-[12px] text-slate-400">Sort by:</span>
            <button className="flex items-center gap-1.5 px-3 py-2 bg-white border border-slate-200 rounded-xl text-[13px] font-medium text-slate-700 hover:bg-slate-50 shadow-sm transition-colors">
              Newest <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((shipment) => (
          <ShipmentCard key={shipment.id} data={shipment} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-2">
        <div className="flex items-center gap-2 text-[13px] text-slate-500">
          Show 
          <button className="flex items-center gap-1 px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium hover:bg-slate-50">
            12 <ChevronDown className="w-3 h-3" />
          </button>
          of 520 results
        </div>
        
        <div className="flex items-center gap-1">
          <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-purple-600 text-white font-medium text-[13px]">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 font-medium text-[13px]">2</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 font-medium text-[13px]">3</button>
          <span className="w-8 h-8 flex items-center justify-center text-slate-400">...</span>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 font-medium text-[13px]">15</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
