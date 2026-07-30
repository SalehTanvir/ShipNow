import React from 'react';
import { Search, Filter, MoreHorizontal } from 'lucide-react';
import clsx from 'clsx';
import { CompanyLogo } from '../common/CompanyLogo';

export function RecentShipmentsTable() {
  const shipments = [
    { id: '#SH9283746', company: 'TechGear Inc.', category: 'Electronics', carrier: 'FedEx', route: 'Los Angeles, CA → Chicago, IL', date: 'Mar 20, 2035', status: 'In Transit', statusColor: 'bg-purple-100 text-[#7c3aed]' },
    { id: '#SH9182635', company: 'StyleHub Co.', category: 'Apparel', carrier: 'DHL', route: 'New York, NY → Atlanta, GA', date: 'Mar 19, 2035', status: 'Out for Delivery', statusColor: 'bg-indigo-100 text-indigo-600' },
    { id: '#SH9037821', company: 'FreshNest', category: 'Home & Kitchen', carrier: 'UPS', route: 'Dallas, TX → Miami, FL', date: 'Mar 18, 2035', status: 'Delivered', statusColor: 'bg-emerald-100 text-emerald-600' },
    { id: '#SH8374652', company: 'FitPlus Gear', category: 'Sports & Outdoors', carrier: 'USPS', route: 'Seattle, WA → Denver, CO', date: 'Mar 21, 2035', status: 'Processing', statusColor: 'bg-blue-100 text-blue-600' },
    { id: '#SH8457830', company: 'AutoParts Pro', category: 'Automotive', carrier: 'Aramex', route: 'Detroit, MI → San Diego, CA', date: 'Mar 20, 2035', status: 'In Transit', statusColor: 'bg-purple-100 text-[#7c3aed]' },
  ];

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-100 w-full overflow-hidden flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h3 className="text-[16px] font-bold text-slate-900">Recent Shipments</h3>
        
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-[220px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#7c3aed] focus:border-[#7c3aed] sm:text-sm transition-all"
              placeholder="Search shipment"
            />
          </div>
          <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
            <Filter className="w-4 h-4" />
          </button>
          <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors bg-slate-50">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-purple-50/50 border-y border-purple-100">
              <th className="py-3 px-4 text-[12px] font-semibold text-slate-600 flex items-center gap-2">
                <input type="checkbox" className="rounded border-slate-300 text-[#7c3aed] focus:ring-[#7c3aed]" />
                Shipping ID <span>↕</span>
              </th>
              <th className="py-3 px-4 text-[12px] font-semibold text-slate-600">Company <span>↕</span></th>
              <th className="py-3 px-4 text-[12px] font-semibold text-slate-600">Carriers <span>↕</span></th>
              <th className="py-3 px-4 text-[12px] font-semibold text-slate-600">Route <span>↕</span></th>
              <th className="py-3 px-4 text-[12px] font-semibold text-slate-600">Shipping Date <span>↕</span></th>
              <th className="py-3 px-4 text-[12px] font-semibold text-slate-600">Status <span>↕</span></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {shipments.map((shipment, i) => (
              <tr key={i} className="hover:bg-slate-50/50 transition-colors group cursor-pointer">
                <td className="py-3.5 px-4 flex items-center gap-2">
                  <input type="checkbox" className="rounded border-slate-300 text-[#7c3aed] focus:ring-[#7c3aed]" />
                  <span className="text-[13px] font-semibold text-[#7c3aed]">{shipment.id}</span>
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-2.5">
                    <CompanyLogo name={shipment.company} className="w-8 h-8" />
                    <div>
                      <p className="text-[13px] font-bold text-slate-900 leading-tight">{shipment.company}</p>
                      <p className="text-[11px] text-slate-500">{shipment.category}</p>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-[13px] font-semibold text-slate-700">{shipment.carrier}</td>
                <td className="py-3.5 px-4 text-[13px] font-medium text-slate-600">{shipment.route}</td>
                <td className="py-3.5 px-4 text-[13px] font-medium text-slate-600">{shipment.date}</td>
                <td className="py-3.5 px-4">
                  <span className={clsx("inline-block px-2.5 py-1 rounded-md text-[11px] font-bold", shipment.statusColor)}>
                    {shipment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
