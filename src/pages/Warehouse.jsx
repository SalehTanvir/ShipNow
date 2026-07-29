import React, { useState } from 'react';
import { Truck, Train, Ship, Plane } from 'lucide-react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { WarehouseStats } from '../components/warehouse/WarehouseStats';
import { WarehouseInventory } from '../components/warehouse/WarehouseInventory';
import { CapacityUsage } from '../components/warehouse/CapacityUsage';
import { PackageStatus } from '../components/warehouse/PackageStatus';
import { WarehouseStorage } from '../components/warehouse/WarehouseStorage';
import { WarehouseMap } from '../components/warehouse/WarehouseMap';
import { WarehouseActivityLog } from '../components/warehouse/WarehouseActivityLog';

export default function Warehouse() {
  const [freightType, setFreightType] = useState('road');
  return (
    <DashboardLayout showHeader={false}>
      <div className="max-w-[1600px] mx-auto min-h-full pt-4 lg:pt-0">
        {/* Header Section */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-[24px] font-bold text-slate-900 mb-1">Warehouse</h1>
            <div className="flex items-center gap-2 text-[13px] font-medium text-slate-500">
              <span className="text-[#7c3aed]">Dashboard</span>
              <span>/</span>
              <span>Warehouse</span>
            </div>
          </div>

          {/* Freight Type Selector */}
          <div className="flex items-center bg-white rounded-xl p-1 shadow-sm border border-slate-100 overflow-x-auto">
            <button 
              onClick={() => setFreightType('road')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-[13px] font-semibold transition-colors whitespace-nowrap ${
                freightType === 'road' ? 'bg-[#2a2b2e] text-white' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Truck className="w-4 h-4" />
              Road Freight
            </button>
            <button 
              onClick={() => setFreightType('rail')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-[13px] font-semibold transition-colors whitespace-nowrap ${
                freightType === 'rail' ? 'bg-[#2a2b2e] text-white' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Train className="w-4 h-4" />
              Rail Freight
            </button>
            <button 
              onClick={() => setFreightType('ocean')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-[13px] font-semibold transition-colors whitespace-nowrap ${
                freightType === 'ocean' ? 'bg-[#2a2b2e] text-white' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Ship className="w-4 h-4" />
              Ocean Freight
            </button>
            <button 
              onClick={() => setFreightType('air')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-[13px] font-semibold transition-colors whitespace-nowrap ${
                freightType === 'air' ? 'bg-[#2a2b2e] text-white' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Plane className="w-4 h-4" />
              Air Freight
            </button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 pb-12">
          
          {/* Column 1 - Stats */}
          <div className="lg:col-span-3 md:col-span-2 flex order-1">
            <WarehouseStats />
          </div>

          {/* Column 2 - Inventory */}
          <div className="lg:col-span-6 md:col-span-2 order-2">
            <WarehouseInventory />
          </div>

          {/* Column 3 - Capacity */}
          <div className="lg:col-span-3 md:col-span-1 order-3">
            <CapacityUsage />
          </div>

          {/* Package Status (Tablet: Row 3 Right | Desktop: Row 2 Right) */}
          <div className="lg:col-span-3 md:col-span-1 order-4 lg:order-5">
            <PackageStatus />
          </div>

          {/* Storage (Tablet: Row 4 Full | Desktop: Row 2 Left) */}
          <div className="lg:col-span-9 md:col-span-2 order-5 lg:order-4">
            <WarehouseStorage />
          </div>

          {/* Map */}
          <div className="lg:col-span-9 md:col-span-2 order-6">
            <WarehouseMap />
          </div>

          {/* Activity Log */}
          <div className="lg:col-span-3 md:col-span-2 order-7">
            <WarehouseActivityLog />
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
