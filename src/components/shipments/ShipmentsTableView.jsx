import React from 'react';
import { Search, Filter, ChevronDown, Package, Clock, Truck, CheckCircle2, ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { StatCard } from '../dashboard/StatCard';

export function ShipmentsTableView({ data }) {
  const tabs = ['All', 'Completed', 'Delivery', 'Pending'];

  const getStatusDot = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-emerald-500';
      case 'In Transit': return 'bg-purple-500';
      case 'Out for Delivery': return 'bg-blue-500';
      case 'Processing': return 'bg-yellow-500';
      default: return 'bg-slate-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'Delivered': return 'Completed';
      case 'In Transit': return 'Delivery';
      case 'Out for Delivery': return 'Delivery';
      case 'Processing': return 'Pending';
      default: return status;
    }
  };

  const getCompanyLogo = (company) => {
    const colors = ['bg-blue-600', 'bg-emerald-600', 'bg-purple-600', 'bg-slate-800', 'bg-rose-600'];
    const charCode = company.charCodeAt(0) + company.charCodeAt(company.length - 1);
    const bgClass = colors[charCode % colors.length];
    return (
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0 ${bgClass}`}>
        <span className="font-bold text-[13px]">{company.charAt(0)}</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard 
          title="Total Shipments" 
          value="1,284"
          subtitle="this week"
          change="Up by 4.6%" 
          isPositive={true} 
          icon={Package} 
        />
        <StatCard 
          title="Pending" 
          value="285"
          subtitle="this week"
          change="Up by 8.7%" 
          isPositive={true} 
          icon={Clock} 
        />
        <StatCard 
          title="Delivery" 
          value="594" 
          subtitle="from last week"
          change="Down 4.2%" 
          isPositive={false} 
          icon={Truck} 
        />
        <StatCard 
          title="Completed" 
          value="405" 
          subtitle="this week"
          change="Up by 3.9%" 
          isPositive={true} 
          icon={CheckCircle2} 
        />
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col overflow-hidden">
        
        {/* Toolbar */}
        <div className="p-5 flex flex-col xl:flex-row xl:items-center justify-between gap-4 border-b border-slate-100">
          <div className="flex items-center gap-1 overflow-x-auto pb-2 xl:pb-0 hide-scrollbar">
            {tabs.map((tab, idx) => (
              <button
                key={tab}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-[13px] font-medium transition-colors ${
                  idx === 0 
                    ? 'bg-slate-800 text-white' 
                    : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search id, company, etc" 
                className="w-full sm:w-[220px] pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-[13px] focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all placeholder:text-slate-400"
              />
            </div>
            <button className="flex items-center justify-center w-9 h-9 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors">
              <Filter className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-[13px] font-medium text-slate-700 hover:bg-slate-100 transition-colors">
              This Month <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-[12px] font-medium text-slate-400">
                <th className="py-4 px-5 font-medium whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-purple-600 focus:ring-purple-600/20" />
                    Shipping ID
                  </div>
                </th>
                <th className="py-4 px-5 font-medium whitespace-nowrap">Company</th>
                <th className="py-4 px-5 font-medium whitespace-nowrap">Carriers</th>
                <th className="py-4 px-5 font-medium whitespace-nowrap">Route</th>
                <th className="py-4 px-5 font-medium whitespace-nowrap">Date</th>
                <th className="py-4 px-5 font-medium whitespace-nowrap">Progress</th>
                <th className="py-4 px-5 font-medium whitespace-nowrap text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors group">
                  <td className="py-4 px-5 align-top">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-purple-600 focus:ring-purple-600/20 mt-1" />
                      <div className="flex flex-col">
                        <span className="text-[13px] font-bold text-slate-900 group-hover:text-purple-600 transition-colors cursor-pointer">#{row.id}</span>
                        <span className="text-[11px] text-slate-400 mt-0.5">{row.type}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-5 align-top">
                    <div className="flex items-center gap-3">
                      {getCompanyLogo(row.company)}
                      <div className="flex flex-col">
                        <span className="text-[13px] font-bold text-slate-900">{row.company}</span>
                        <span className="text-[11px] text-slate-400 mt-0.5">{row.category}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-5 align-top">
                    <div className="flex flex-col">
                      <span className="text-[13px] font-semibold text-slate-700">{row.carrier}</span>
                      <span className="text-[11px] text-slate-400 mt-0.5">{row.weight}</span>
                    </div>
                  </td>
                  <td className="py-4 px-5 align-top">
                    <div className="flex flex-col">
                      <span className="text-[12px] font-semibold text-slate-900">{row.origin.location} <span className="text-slate-400 font-normal">(Origin)</span></span>
                      <span className="text-[12px] font-semibold text-purple-600 mt-1">{row.destination.location} <span className="text-slate-400 font-normal">(Destination)</span></span>
                    </div>
                  </td>
                  <td className="py-4 px-5 align-top">
                    <div className="flex flex-col">
                      <span className="text-[12px] text-slate-600">{row.origin.date} <span className="text-slate-400">(ATD)</span></span>
                      <span className="text-[12px] text-slate-600 mt-1">{row.destination.date} <span className="text-slate-400">(ETA)</span></span>
                    </div>
                  </td>
                  <td className="py-4 px-5 align-top min-w-[140px]">
                    <div className="flex items-center gap-3 mt-1.5">
                      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-purple-600 rounded-full" 
                          style={{ width: `${row.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-[12px] font-medium text-slate-600 min-w-[32px]">{row.progress}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-5 align-top text-right">
                    <div className="flex items-center justify-end gap-3 mt-1">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${getStatusDot(row.status)}`}></span>
                        <span className="text-[13px] font-medium text-slate-700">{getStatusText(row.status)}</span>
                      </div>
                      <button className="text-slate-400 hover:text-slate-600 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-5 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2 text-[13px] text-slate-500">
            Show 
            <button className="flex items-center gap-1 px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium hover:bg-slate-50">
              12 <ChevronDown className="w-3 h-3" />
            </button>
            of 1,240 results
          </div>
          
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:bg-white hover:text-slate-600">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-purple-600 text-white font-medium text-[13px] shadow-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-600 hover:bg-white font-medium text-[13px]">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-600 hover:bg-white font-medium text-[13px]">3</button>
            <span className="w-8 h-8 flex items-center justify-center text-slate-400">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-600 hover:bg-white font-medium text-[13px]">16</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:bg-white hover:text-slate-600">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
