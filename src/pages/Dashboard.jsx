import React from 'react';
import { Package, Truck, DollarSign } from 'lucide-react';
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

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-5 max-w-[1600px] mx-auto">
        
        {/* Main Grid: Left Column (Cards, Charts, Map) & Right Column (Type, Alerts, Activity) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Left Column */}
          <div className="lg:col-span-8 2xl:col-span-9 flex flex-col gap-5">
            
            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              <StatCard 
                title="Active Shipments" 
                value="1,284"
                subtitle="shipments"
                change="+9.7%" 
                isPositive={true} 
                icon={Package} 
              />
              <StatCard 
                title="Delivery Performance" 
                value="94.3%"
                subtitle="on-time"
                change="-1.2%" 
                isPositive={false} 
                icon={Truck} 
              />
              <StatCard 
                title="Revenue" 
                value="$82,450" 
                change="+12.6%" 
                isPositive={true} 
                icon={DollarSign} 
              />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
              <ShipmentStatisticChart />
              <ProfitSummaryChart />
            </div>

            {/* Bottom Row of Left Column */}
            <div className="grid grid-cols-1 xl:grid-cols-[auto_1fr] gap-5">
              <div className="xl:w-[320px] 2xl:w-[380px]">
                <ProductCategories />
              </div>
              <div className="flex-1">
                <ShipmentMapTracker />
              </div>
            </div>

            {/* Recent Shipments Table (Bottom of Left Column) */}
            <div className="w-full">
              <RecentShipmentsTable />
            </div>

          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 2xl:col-span-3 flex flex-col gap-5">
            <div className="flex-none">
              <ShipmentTypeChart />
            </div>
            <div className="flex-none">
              <ShipmentAlerts />
            </div>
            <div className="flex-none">
              <RecentActivity />
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
