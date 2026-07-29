import React from 'react';
import { CheckCircle, XCircle, Clock, AlertCircle } from 'lucide-react';
import { invoiceStats } from '../../data/mockInvoices';

const iconMap = {
  'check-circle': CheckCircle,
  'x-circle': XCircle,
  'clock': Clock,
  'alert-circle': AlertCircle,
};

export function InvoiceStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {invoiceStats.map((stat) => {
        const Icon = iconMap[stat.icon];
        return (
          <div
            key={stat.id}
            className="bg-white rounded-2xl p-4 lg:p-5 border border-slate-100 hover:shadow-sm transition-shadow"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <p className="text-[12px] lg:text-[13px] font-medium text-slate-500 leading-tight">{stat.label}</p>
              <div className="w-9 h-9 lg:w-10 lg:h-10 bg-[#f0edff] rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-[#7b5cfa]" />
              </div>
            </div>
            <p className="text-[22px] lg:text-[28px] font-extrabold text-slate-900 leading-none mb-2">
              {stat.amount}
            </p>
            <p className="text-[11px] lg:text-[12px] text-slate-400 font-medium flex items-center flex-wrap gap-1">
              from{' '}
              <span className="inline-flex items-center bg-[#f0edff] text-[#7b5cfa] font-bold px-1.5 py-0.5 rounded-md text-[10px] lg:text-[11px]">
                {stat.count}
              </span>{' '}
              invoices
              {stat.isOverdue && (
                <span className="inline-flex items-center bg-rose-50 text-rose-500 border border-rose-100 font-bold px-1.5 py-0.5 rounded-md text-[10px] lg:text-[11px]">
                  overdue
                </span>
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
}
