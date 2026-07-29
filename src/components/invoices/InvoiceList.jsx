import React, { useState } from 'react';
import { Search, SlidersHorizontal, Plus, ChevronDown, FileText } from 'lucide-react';
import { mockInvoices } from '../../data/mockInvoices';
import { cn } from '../../utils/cn';

const statusConfig = {
  Paid: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
  Unpaid: 'bg-[#f0edff] text-[#7b5cfa] border border-[#e0d9ff]',
  Overdue: 'bg-rose-50 text-rose-500 border border-rose-100',
  Pending: 'bg-amber-50 text-amber-600 border border-amber-100',
};

function SortableHeader({ children, className }) {
  return (
    <th className={cn('text-left text-[12px] font-semibold text-slate-500 pb-3 whitespace-nowrap', className)}>
      <div className="flex items-center gap-1 cursor-pointer hover:text-slate-700 select-none group">
        {children}
        <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>
    </th>
  );
}

/**
 * compact – when true (tablet split-view), hides Shipping ID, Date and Amount
 *           columns so the list fits in a narrower grid column.
 */
export function InvoiceList({ selectedId, onSelect, compact = false }) {
  const [search, setSearch] = useState('');

  const filtered = mockInvoices.filter(
    (inv) =>
      inv.id.toLowerCase().includes(search.toLowerCase()) ||
      inv.company.toLowerCase().includes(search.toLowerCase()) ||
      inv.shippingId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-2xl border border-slate-100 flex flex-col h-full hover:shadow-sm transition-shadow">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 p-4 lg:p-5 pb-0">
        <h3 className="text-[15px] font-bold text-slate-900">Invoices</h3>

        {/* Desktop / tablet search + filter + new */}
        <div className={cn('items-center gap-2', compact ? 'hidden' : 'hidden sm:flex')}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search invoices"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 text-[13px] bg-slate-50 border border-slate-100 rounded-lg w-[180px] focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-300 transition"
            />
          </div>
          <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors border border-slate-100">
            <SlidersHorizontal className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#2a2b2e] text-white text-[13px] font-semibold rounded-lg hover:bg-slate-700 transition-colors whitespace-nowrap">
            <Plus className="w-4 h-4" />
            New Invoice
          </button>
        </div>

        {/* Compact header: only icons */}
        {compact && (
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 border border-slate-100">
              <Search className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 border border-slate-100">
              <SlidersHorizontal className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-lg bg-[#2a2b2e] text-white hover:bg-slate-700">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Mobile icons only */}
        <div className="flex sm:hidden items-center gap-2">
          <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 border border-slate-100">
            <Search className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 border border-slate-100">
            <SlidersHorizontal className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg bg-[#2a2b2e] text-white hover:bg-slate-700">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="sm:hidden px-4 pt-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search invoices"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 pr-4 py-2 text-[13px] bg-slate-50 border border-slate-100 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-300 transition"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto flex-1 px-4 lg:px-5 pt-4">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="w-6 pb-3 pr-2">
                <input type="checkbox" className="rounded accent-[#7b5cfa]" />
              </th>
              <SortableHeader>Invoice ID</SortableHeader>
              <SortableHeader className="hidden sm:table-cell">Company</SortableHeader>
              {/* Shipping ID — hidden in compact (tablet split) mode */}
              {!compact && (
                <SortableHeader className="hidden md:table-cell">Shipping ID</SortableHeader>
              )}
              {/* Date — hidden in compact mode */}
              {!compact && (
                <SortableHeader className="hidden sm:table-cell">Date</SortableHeader>
              )}
              {/* Amount — hidden in compact mode */}
              {!compact && (
                <SortableHeader className="hidden xs:table-cell">Amount</SortableHeader>
              )}
              <SortableHeader>Status</SortableHeader>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filtered.map((inv) => {
              const isActive = inv.id === selectedId;
              return (
                <tr
                  key={inv.id}
                  onClick={() => onSelect(inv)}
                  className={cn(
                    'cursor-pointer group transition-colors',
                    isActive ? 'bg-[#f5f3ff]' : 'hover:bg-slate-50'
                  )}
                >
                  {/* Checkbox */}
                  <td className="py-3 pr-2">
                    <input
                      type="checkbox"
                      checked={isActive}
                      onChange={() => {}}
                      onClick={(e) => e.stopPropagation()}
                      className="rounded accent-[#7b5cfa]"
                    />
                  </td>

                  {/* Invoice ID */}
                  <td className="py-3 pr-3">
                    <div className="flex items-center gap-2">
                      <span className={cn('text-[13px] font-semibold', isActive ? 'text-[#7b5cfa]' : 'text-slate-700')}>
                        {inv.id}
                      </span>
                      <FileText className="w-3.5 h-3.5 text-slate-300 flex-shrink-0" />
                    </div>
                  </td>

                  {/* Company */}
                  <td className="py-3 pr-3 hidden sm:table-cell">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                        style={{ backgroundColor: inv.companyColor }}
                      >
                        {inv.companyLogo}
                      </div>
                      <span className="text-[13px] font-medium text-slate-700 truncate max-w-[80px]">{inv.company}</span>
                    </div>
                  </td>

                  {/* Shipping ID — hidden in compact mode */}
                  {!compact && (
                    <td className="py-3 pr-3 hidden md:table-cell">
                      <span className="text-[12px] font-medium text-slate-500">{inv.shippingId}</span>
                    </td>
                  )}

                  {/* Date — hidden in compact mode */}
                  {!compact && (
                    <td className="py-3 pr-3 hidden sm:table-cell">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[11px] text-slate-700 font-medium whitespace-nowrap">
                          {inv.issuedDate}{' '}
                          <span className="text-slate-400 font-normal">(Issued)</span>
                        </span>
                        <span className="text-[11px] text-slate-700 font-medium whitespace-nowrap">
                          {inv.dueDate}{' '}
                          <span className="text-slate-400 font-normal">(Due)</span>
                        </span>
                      </div>
                    </td>
                  )}

                  {/* Amount — hidden in compact mode */}
                  {!compact && (
                    <td className="py-3 pr-3">
                      <span className="text-[13px] font-bold text-slate-800">
                        ${inv.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </span>
                    </td>
                  )}

                  {/* Status */}
                  <td className="py-3">
                    <span
                      className={cn(
                        'text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap',
                        statusConfig[inv.status]
                      )}
                    >
                      {inv.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="h-4" />
    </div>
  );
}
