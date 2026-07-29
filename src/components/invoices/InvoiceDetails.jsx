import React from 'react';
import { ChevronLeft, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';
import { TAX_RATE } from '../../data/mockInvoices';

const statusConfig = {
  Paid:    'bg-emerald-50 text-emerald-600 border border-emerald-100',
  Unpaid:  'bg-[#f0edff] text-[#7b5cfa] border border-[#e0d9ff]',
  Overdue: 'bg-rose-50 text-rose-500 border border-rose-100',
  Pending: 'bg-amber-50 text-amber-600 border border-amber-100',
};

export function InvoiceDetails({ invoice, onBack, showBackButton, isMobile = false }) {
  // ── Derived totals (computed from line items — never hard-coded) ──────────
  const subtotal = invoice
    ? invoice.packages.reduce((sum, pkg) => sum + pkg.price * pkg.qty, 0)
    : 0;
  const tax   = subtotal * TAX_RATE;
  const fee   = invoice?.fee ?? 0;
  const total = subtotal + tax + fee;
  const fmt   = (n) => `$${n.toFixed(2)}`;

  // ── Empty state ───────────────────────────────────────────────────────────
  if (!invoice) {
    return (
      <div className="bg-white rounded-2xl border border-slate-100 flex flex-col h-full items-center justify-center text-slate-400 p-8">
        <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <p className="text-[14px] font-semibold text-slate-500">No invoice selected</p>
        <p className="text-[12px] text-slate-400 mt-1 text-center">Select an invoice from the list to view its details</p>
      </div>
    );
  }

  return (
    <div className={cn(
      'bg-white flex flex-col hover:shadow-sm transition-shadow',
      isMobile
        ? 'rounded-2xl border border-slate-100'            // mobile: natural height, stacked
        : 'rounded-2xl border border-slate-100 h-full overflow-y-auto'  // desktop/tablet: fills panel height
    )}>

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between gap-2 px-4 py-3 lg:px-5 lg:py-4 border-b border-slate-100 sticky top-0 bg-white z-10 rounded-t-2xl">
        <div className="flex items-center gap-2 min-w-0">
          {showBackButton && (
            <button
              onClick={onBack}
              className="flex items-center justify-center w-7 h-7 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors flex-shrink-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          <h3 className="text-[13px] lg:text-[15px] font-bold text-slate-900 whitespace-nowrap">
            Invoice Details
          </h3>
        </div>

        {/* Action buttons — always visible in header on desktop/tablet; hidden on mobile */}
        <div className={cn('flex items-center gap-1.5 flex-shrink-0', isMobile && 'hidden')}>
          <button className="px-3 py-1.5 text-[12px] font-semibold text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            Edit
          </button>
          <button className="px-3 py-1.5 text-[12px] font-semibold text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            Hold
          </button>
          <button className="px-3 py-1.5 text-[12px] font-bold text-white bg-[#2a2b2e] rounded-lg hover:bg-slate-700 transition-colors whitespace-nowrap">
            Send Invoice
          </button>
        </div>
      </div>

      {/* ── Body ───────────────────────────────────────────────────────── */}
      <div className={cn('flex flex-col gap-5 flex-1', isMobile ? 'p-4 pb-6' : 'p-4 lg:p-5')}>

        {/* Invoice Meta */}
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <p className="text-[15px] font-extrabold text-slate-900 mb-1.5">
              Invoice <span className="text-[#7b5cfa]">#{invoice.id}</span>
            </p>
            <span className={cn('text-[11px] font-bold px-2.5 py-1 rounded-full', statusConfig[invoice.status])}>
              {invoice.status}
            </span>
          </div>
          <div className="text-right text-[11px] text-slate-500 space-y-0.5">
            <p>
              <span className="font-medium">Issue Date: </span>
              <span className="font-bold text-slate-700">{invoice.issuedDate}</span>
            </p>
            <p>
              <span className="font-medium">Due Date: </span>
              <span className="font-bold text-slate-700">{invoice.dueDate}</span>
            </p>
          </div>
        </div>

        {/* Bill From / Bill To */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Bill From', data: invoice.billFrom },
            { label: 'Bill To',   data: invoice.billTo   },
          ].map(({ label, data }) => (
            <div key={label}>
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-2">{label}</p>
              <div className="space-y-0.5">
                <p className="text-[13px] font-extrabold text-slate-900 leading-tight">{data.name}</p>
                <p className="text-[11px] text-slate-500 break-all">{data.email}</p>
                <p className="text-[11px] text-slate-500 leading-relaxed">{data.address}</p>
                <p className="text-[11px] text-slate-500">{data.phone}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Package Summary */}
        <div>
          <p className="text-[13px] font-bold text-slate-900 mb-3">Package Summary</p>
          <div className="rounded-xl border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-[11px] min-w-[420px]">
                <thead className="bg-slate-50">
                  <tr>
                    {['Description', 'Shipment Type', 'Price', 'Qty', 'Amount'].map((col) => (
                      <th key={col} className="text-left px-3 py-2.5 font-semibold text-slate-500 whitespace-nowrap">
                        <div className="flex items-center gap-1 cursor-pointer select-none">
                          {col}
                          <ChevronDown className="w-3 h-3 opacity-50" />
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {invoice.packages.map((pkg, i) => {
                    const lineAmount = pkg.price * pkg.qty;
                    return (
                      <tr key={i} className="bg-white">
                        <td className="px-3 py-2.5 font-medium text-slate-800 whitespace-nowrap">{pkg.description}</td>
                        <td className="px-3 py-2.5 text-slate-500 whitespace-nowrap">
                          <div className="flex flex-col">
                            <span>{pkg.type.split(' ').slice(0, 2).join(' ')}</span>
                            <span className="text-slate-400">{pkg.type.split(' ').slice(2).join(' ')}</span>
                          </div>
                        </td>
                        <td className="px-3 py-2.5 text-slate-700 whitespace-nowrap">{fmt(pkg.price)}</td>
                        <td className="px-3 py-2.5 text-slate-700">{pkg.qty}</td>
                        <td className="px-3 py-2.5 font-semibold text-slate-800 whitespace-nowrap">{fmt(lineAmount)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Totals */}
            <div className="border-t border-slate-100 px-3 py-3 space-y-1.5">
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>Sub Total</span>
                <span className="font-semibold text-slate-800">{fmt(subtotal)}</span>
              </div>
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>Tax ({(TAX_RATE * 100).toFixed(0)}%)</span>
                <span className="font-semibold text-slate-800">{fmt(tax)}</span>
              </div>
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>Fee</span>
                <span className="font-semibold text-slate-800">{fmt(fee)}</span>
              </div>
              <div className="flex justify-between text-[13px] font-extrabold text-slate-900 pt-2 border-t border-slate-100">
                <span>Total</span>
                <span>{fmt(total)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        {invoice.note && (
          <div>
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-1.5">Note</p>
            <p className="text-[11px] text-slate-600 leading-relaxed">{invoice.note}</p>
          </div>
        )}

        {/* ── Bottom action buttons (all views) ───────────────────────── */}
        <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
          <button className="px-4 py-2 text-[12px] font-semibold text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            Edit
          </button>
          <button className="px-4 py-2 text-[12px] font-semibold text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            Hold
          </button>
          <button className="flex-1 py-2 text-[12px] font-bold text-white bg-[#2a2b2e] rounded-lg hover:bg-slate-700 transition-colors">
            Send Invoice
          </button>
        </div>

        {/* ── Mobile-only: action buttons at bottom of content ─────────── */}
        {isMobile && (
          <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
            <button className="flex-1 py-2.5 text-[13px] font-semibold text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              Edit
            </button>
            <button className="flex-1 py-2.5 text-[13px] font-semibold text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              Hold
            </button>
            <button className="flex-[2] py-2.5 px-4 text-[13px] font-bold text-white bg-[#2a2b2e] rounded-xl hover:bg-slate-700 transition-colors whitespace-nowrap">
              Send Invoice
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
