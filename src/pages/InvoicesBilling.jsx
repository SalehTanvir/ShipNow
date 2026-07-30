import React, { useState } from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { InvoiceStats } from '../components/invoices/InvoiceStats';
import { InvoiceList } from '../components/invoices/InvoiceList';
import { InvoiceDetails } from '../components/invoices/InvoiceDetails';
import { mockInvoices } from '../data/mockInvoices';

export default function InvoicesBilling() {
  const [selectedInvoice, setSelectedInvoice] = useState(
    mockInvoices.find((inv) => inv.id === 'INV-1208') || null
  );
  const [detailOpen, setDetailOpen] = useState(false);

  const handleSelect = (invoice) => {
    setSelectedInvoice(invoice);
    setDetailOpen(true);
  };

  const handleBack = () => {
    setDetailOpen(false);
  };

  return (
    <DashboardLayout showHeader={false} title="Invoices & Billing">
      <div className="max-w-[1600px] mx-auto min-h-full">

        {/* Page Header */}
        <div className="mb-5 hidden md:block">
          <h1 className="text-[24px] font-bold text-slate-900 mb-1">Invoices &amp; Billing</h1>
          <div className="flex items-center gap-2 text-[13px] font-medium text-slate-500">
            <span className="text-[#7c3aed]">Dashboard</span>
            <span>/</span>
            <span>Invoices &amp; Billing</span>
          </div>
        </div>

        {/* Stats Row */}
        <InvoiceStats />

        {/* ── Desktop (lg+): fixed side-by-side — UNCHANGED ───────────────── */}
        <div
          className="hidden lg:grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-6 pb-12"
          style={{ minHeight: '600px' }}
        >
          <InvoiceList selectedId={selectedInvoice?.id} onSelect={handleSelect} />
          <InvoiceDetails invoice={selectedInvoice} showBackButton={false} isMobile={false} />
        </div>

        {/* ── Tablet (md → lg): two sections ─────────────────────────────── */}
        <div className="hidden md:block lg:hidden pb-12">

          {/* UPPER: Full-width invoice list — always visible, all columns */}
          <div className={detailOpen ? 'mb-6' : ''}>
            <InvoiceList selectedId={selectedInvoice?.id} onSelect={handleSelect} />
          </div>

          {/* LOWER: Background list + Invoice Details overlapping from right */}
          {selectedInvoice && detailOpen && (
            <div className="relative animate-fadeIn" style={{ minHeight: '720px' }}>

              {/* Full-width invoice list in background */}
              <InvoiceList selectedId={selectedInvoice?.id} onSelect={handleSelect} />

              {/* Invoice Details — white elevated card overlapping the right 62% */}
              <div className="absolute top-0 right-0 h-full z-20 w-[62%]">
                <div className="h-full overflow-y-auto rounded-2xl shadow-2xl bg-white border border-slate-100">
                  <InvoiceDetails
                    invoice={selectedInvoice}
                    onBack={handleBack}
                    showBackButton={true}
                    isMobile={false}
                  />
                </div>
              </div>

            </div>
          )}

        </div>

        {/* ── Mobile (<md): stacked — list then details below on click ──────── */}
        <div className="md:hidden">
          <InvoiceList selectedId={selectedInvoice?.id} onSelect={handleSelect} />

          {selectedInvoice && detailOpen && (
            <div className="mt-6 animate-fadeIn">
              <InvoiceDetails
                invoice={selectedInvoice}
                onBack={handleBack}
                showBackButton={true}
                isMobile={true}
              />
            </div>
          )}

          {/* Simple copyright footer for mobile */}
          <div className="mt-8 pt-4 pb-6 border-t border-slate-100 text-[11px] text-slate-400 font-medium flex flex-wrap gap-x-3 gap-y-1 justify-center">
            <span className="font-semibold text-slate-500">Copyright © 2025 Peterdraw</span>
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Term and conditions</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Contact</a>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
