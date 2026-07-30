import React from 'react';
import overdueInvoicesIcon from '../icons/overdueInvoicesIcon.svg';
import unpaidInvoicesIcon from '../icons/unpaidInvoicesIcon.svg';
import paidInvoiceIcon from '../icons/paidInvoiceIcon.svg';
import pandingInvoicesIcon from '../icons/pandingInvoicesIcon.svg';
import { invoiceStats } from '../../data/mockInvoices';

const iconMap = {
  paid: paidInvoiceIcon,
  unpaid: unpaidInvoicesIcon,
  pending: pandingInvoicesIcon,
  overdue: overdueInvoicesIcon,
};

export function InvoiceStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
      {invoiceStats.map((stat) => {
        const iconSrc = iconMap[stat.id];
        return (
          <div
            key={stat.id}
            className="bg-white rounded-2xl p-3.5 sm:p-4 lg:p-5 border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 hover:shadow-sm transition-shadow min-w-0"
          >
            {/* Icon — top left on mobile, left on desktop */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[50px] lg:h-[50px] flex-shrink-0 rounded-xl overflow-hidden shadow-sm mb-1 sm:mb-0">
              <img src={iconSrc} alt={stat.label} className="w-full h-full object-cover" />
            </div>

            {/* Info — stacked left on mobile, aligned right on desktop */}
            <div className="flex flex-col items-start sm:items-end text-left sm:text-right min-w-0 w-full sm:w-auto">
              <p className="text-[11px] lg:text-[12px] font-medium text-slate-400 leading-tight mb-1">
                {stat.label}
              </p>
              <p className="text-[18px] sm:text-[22px] lg:text-[24px] xl:text-[26px] font-bold text-slate-900 leading-none mb-1 sm:mb-1.5">
                {stat.amount}
              </p>
              <p className="text-[10px] lg:text-[11px] text-slate-400 font-medium flex items-center justify-start sm:justify-end gap-1">
                from
                <span className="inline-flex items-center bg-emerald-50 text-emerald-600 font-bold px-1.5 py-0.5 rounded text-[10px] lg:text-[11px]">
                  {stat.count}
                </span>
                invoices
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
