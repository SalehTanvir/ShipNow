import React from 'react';
import { Filter, ChevronDown, ChevronsUpDown } from 'lucide-react';
import { mockStorage } from '../../data/mockWarehouse';
import { Button } from '../common/Button';

export function WarehouseStorage() {
  return (
    <div className="bg-white rounded-[12px] p-4 lg:p-5 border border-slate-100 h-full hover:shadow-sm transition-shadow">
      <div className="flex flex-col gap-3 mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-[15px] font-bold text-slate-900">Warehouse Storage</h3>
          <div className="flex items-center gap-2 sm:hidden">
            <Button variant="outline" size="sm" className="h-8 gap-1.5 text-slate-600 border-slate-200 text-[12px]">
              <Filter className="w-3.5 h-3.5" /> Filter
            </Button>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <Button variant="outline" size="sm" className="h-9 gap-2 text-slate-600 border-slate-200">
            <Filter className="w-4 h-4" /> Filter
          </Button>
          <div className="flex items-center gap-2 text-[13px] text-slate-500 font-medium">
            Sort by:
            <button className="flex items-center gap-1 text-slate-900 bg-slate-50 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors">
              Section <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex sm:hidden items-center gap-2 text-[12px] text-slate-500 font-medium">
          Sort by:
          <button className="flex items-center gap-1 text-slate-900 bg-slate-50 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors text-[12px]">
            Section <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left py-3 px-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <div className="flex items-center gap-1 cursor-pointer hover:text-slate-600">Floor <ChevronsUpDown className="w-3 h-3" /></div>
              </th>
              <th className="text-left py-3 px-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <div className="flex items-center gap-1 cursor-pointer hover:text-slate-600">Section <ChevronsUpDown className="w-3 h-3" /></div>
              </th>
              <th className="text-left py-3 px-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <div className="flex items-center gap-1 cursor-pointer hover:text-slate-600">Category <ChevronsUpDown className="w-3 h-3" /></div>
              </th>
              <th className="text-left py-3 px-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <div className="flex items-center gap-1 cursor-pointer hover:text-slate-600">Storage Used <ChevronsUpDown className="w-3 h-3" /></div>
              </th>
              <th className="text-left py-3 px-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <div className="flex items-center gap-1 cursor-pointer hover:text-slate-600">Percentage <ChevronsUpDown className="w-3 h-3" /></div>
              </th>
              <th className="text-left py-3 px-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <div className="flex items-center gap-1 cursor-pointer hover:text-slate-600">Available Space <ChevronsUpDown className="w-3 h-3" /></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {mockStorage.map((row, idx) => (
              <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors last:border-0">
                <td className="py-4 px-4 text-[13px] font-medium text-slate-600">{row.floor}</td>
                <td className="py-4 px-4 text-[13px] font-bold text-slate-900">{row.section}</td>
                <td className="py-4 px-4 text-[13px] font-medium text-slate-600">{row.category}</td>
                <td className="py-4 px-4">
                  <div className="w-full max-w-[120px] h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#7b5cfa] rounded-full transition-all duration-500" 
                      style={{ width: `${row.percentage}%` }}
                    />
                  </div>
                </td>
                <td className="py-4 px-4 text-[13px] font-bold text-slate-900">{row.percentage}%</td>
                <td className="py-4 px-4 text-[13px] font-medium text-slate-600">{row.available}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
