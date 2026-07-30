import React from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { StatCard } from '../components/dashboard/StatCard';
import { ShipmentStatisticChart } from '../components/dashboard/ShipmentStatisticChart';
import { ProfitSummaryChart } from '../components/dashboard/ProfitSummaryChart';
import { ShipmentTypeChart } from '../components/dashboard/ShipmentTypeChart';
import { ProductCategories } from '../components/dashboard/ProductCategories';
import { ShipmentMapTracker } from '../components/dashboard/ShipmentMapTracker';
import { ShipmentAlerts } from '../components/dashboard/ShipmentAlerts';
import { RecentActivity } from '../components/dashboard/RecentActivity';
import { RecentShipmentsTable } from '../components/dashboard/RecentShipmentsTable';
import activeShipmentIcon      from '../components/icons/Active_ShipmentIcon.svg';
import deliveryPerformanceIcon from '../components/icons/DeliveryPerformanceIcon.svg';
import revenueIcon             from '../components/icons/RevenueIcon.svg';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-5 max-w-[1600px] mx-auto">
        
        {/* Row 1: Top Stat Cards (3 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <StatCard 
            title="Active Shipments" 
            value="1,284"
            subtitle="shipments"
            change="+9.7%" 
            isPositive={true} 
            iconSrc={activeShipmentIcon}
          />
          <StatCard 
            title="Delivery Performance" 
            value="94.3%"
            subtitle="on-time"
            change="-1.2%" 
            isPositive={false} 
            iconSrc={deliveryPerformanceIcon}
          />
          <StatCard 
            title="Revenue" 
            value="$82,450" 
            change="+12.6%" 
            isPositive={true} 
            iconSrc={revenueIcon}
          />
        </div>

        {/* Row 2: Shipment Statistic & Profit Summary (2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ShipmentStatisticChart />
          <ProfitSummaryChart />
        </div>

        {/* Row 3: Shipment Type & Product Categories (2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ShipmentTypeChart />
          <ProductCategories />
        </div>

        {/* Row 4: Shipment Map Tracker (Full Width) */}
        <div className="w-full">
          <ShipmentMapTracker />
        </div>

        {/* Row 5: Shipment Alerts & Recent Activity (2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ShipmentAlerts />
          <RecentActivity />
        </div>

        {/* Row 6: Recent Shipments Table (Full Width) */}
        <div className="w-full">
          <RecentShipmentsTable />
        </div>

      </div>
    </DashboardLayout>
  );
}

