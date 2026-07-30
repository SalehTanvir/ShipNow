import React, { useState } from 'react';
import { Truck, Train, Ship, Plane, TrendingUp } from 'lucide-react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { WarehouseStats } from '../components/warehouse/WarehouseStats';
import { WarehouseInventory } from '../components/warehouse/WarehouseInventory';
import { CapacityUsage } from '../components/warehouse/CapacityUsage';
import { PackageStatus } from '../components/warehouse/PackageStatus';
import { WarehouseStorage } from '../components/warehouse/WarehouseStorage';
import { WarehouseMap } from '../components/warehouse/WarehouseMap';
import { WarehouseActivityLog } from '../components/warehouse/WarehouseActivityLog';
import { mockWarehouseStats } from '../data/mockWarehouse';

// Compact single stat card for mobile/tablet row
function StatCardMini({ label, value, unit, change, className = '' }) {
  return (
    <div className={`bg-white rounded-[12px] p-2.5 sm:p-4 border border-slate-100 flex flex-col justify-between hover:shadow-sm transition-shadow min-w-0 ${className}`}>
      <p className="text-[10px] sm:text-[12px] md:text-[13px] text-slate-500 font-medium leading-tight">{label}</p>
      <div className="mt-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
        <div className="flex items-baseline gap-1">
          <span className="text-[15px] sm:text-[20px] md:text-[24px] font-bold text-slate-900 leading-none">{value}</span>
          {unit && <span className="text-[9px] sm:text-[11px] text-slate-400 font-medium">{unit}</span>}
        </div>
        <div className="flex items-center gap-0.5 text-[9px] sm:text-[10px] md:text-[11px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md w-fit">
          <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3" strokeWidth={2.5} />
          {change}
        </div>
      </div>
    </div>
  );
}

export default function Warehouse() {
  const [freightType, setFreightType] = useState('road');

  return (
    <DashboardLayout showHeader={false}>
      <div className="max-w-[1600px] mx-auto min-h-full">

        {/* ── Page Header ── */}
        <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="hidden md:block">
            <h1 className="text-[22px] lg:text-[24px] font-bold text-slate-900 mb-1">Warehouse</h1>
            <div className="flex items-center gap-2 text-[13px] font-medium text-slate-500">
              <span className="text-[#7c3aed]">Dashboard</span>
              <span>/</span>
              <span>Warehouse</span>
            </div>
          </div>

          {/* Freight Type Selector — fits in 1 bar on mobile */}
          <div className="flex items-center justify-between bg-white rounded-xl p-1 shadow-sm border border-slate-100 w-full sm:w-auto">
            {[
              { key: 'road',  Icon: Truck,  label: 'Road Freight' },
              { key: 'rail',  Icon: Train,  label: 'Rail Freight' },
              { key: 'ocean', Icon: Ship,   label: 'Ocean Freight' },
              { key: 'air',   Icon: Plane,  label: 'Air Freight' },
            ].map(({ key, Icon, label }) => (
              <button
                key={key}
                onClick={() => setFreightType(key)}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-lg text-[12px] sm:text-[13px] font-semibold transition-all whitespace-nowrap ${
                  freightType === key
                    ? 'bg-[#2a2b2e] text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className={freightType === key ? 'inline text-[11px] sm:text-[13px]' : 'hidden sm:inline'}>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════
            DESKTOP LAYOUT (lg and above)
        ══════════════════════════════════════════ */}

        {/* Desktop Row 1: Stats | Inventory | Capacity */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-4 mb-4" style={{ height: 298 }}>
          <div className="lg:col-span-3 h-full">
            <WarehouseStats />
          </div>
          <div className="lg:col-span-6 h-full">
            <WarehouseInventory />
          </div>
          <div className="lg:col-span-3 h-full">
            <CapacityUsage />
          </div>
        </div>

        {/* Desktop Rows 2 & 3: Storage+Map (left flex-1) | Package+Activity (right sidebar) */}
        <div className="hidden lg:flex gap-4 pb-12">
          <div className="flex-1 min-w-0 flex flex-col gap-4">
            <WarehouseStorage />
            <WarehouseMap />
          </div>
          <div className="w-[270px] xl:w-[300px] flex-shrink-0 flex flex-col gap-4">
            <PackageStatus />
            <WarehouseActivityLog />
          </div>
        </div>

        {/* ══════════════════════════════════════════
            TABLET + MOBILE LAYOUT (below lg)
        ══════════════════════════════════════════ */}

        <div className="lg:hidden flex flex-col gap-4 pb-12">

          {/* Row 1: 3 Stat cards (3 col on all screens down to mobile) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            <StatCardMini
              label="Total SKU"
              value={mockWarehouseStats.totalSKU.value}
              change={mockWarehouseStats.totalSKU.change}
            />
            <StatCardMini
              label="Quantity on Hand"
              value={mockWarehouseStats.quantityOnHand.value}
              change={mockWarehouseStats.quantityOnHand.change}
            />
            <StatCardMini
              label="Capacity Usage"
              value={mockWarehouseStats.capacityUsage.value}
              change={mockWarehouseStats.capacityUsage.change}
            />
          </div>

          {/* Row 2: Warehouse inventory (Full width) */}
          <div>
            <WarehouseInventory />
          </div>

          {/* Row 3: Capacity Usage (left) + Package Status (right) side-by-side on tablet (md:grid-cols-2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CapacityUsage />
            <PackageStatus />
          </div>

          {/* Row 4: Warehouse storage */}
          <div>
            <WarehouseStorage />
          </div>

          {/* Row 5: Warehouse map + Activity log (side-by-side on tablet) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <WarehouseMap />
            <WarehouseActivityLog />
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
