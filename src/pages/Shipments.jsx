import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { LayoutGrid, List, Plus } from 'lucide-react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { ShipmentsGridView } from '../components/shipments/ShipmentsGridView';
import { ShipmentsTableView } from '../components/shipments/ShipmentsTableView';
import { mockShipments } from '../data/mockShipments';

export default function Shipments() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentView = searchParams.get('view') === 'table' ? 'table' : 'grid';

  const setView = (view) => {
    setSearchParams({ view });
  };

  return (
    <DashboardLayout showHeader={false} title="Shipments">
      <div className="flex flex-col gap-6 max-w-[1600px] mx-auto min-h-full">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-[24px] font-bold text-slate-900 mb-1">Shipments</h1>
            <div className="flex items-center gap-2 text-[13px] font-medium text-slate-500">
              <span className="text-[#7c3aed]">Dashboard</span>
              <span>/</span>
              <span>Shipments</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 self-end sm:self-auto">
            {/* View Switcher Control */}
            <div className="flex items-center bg-white border border-slate-200 rounded-lg p-1 shadow-sm">
              <button 
                onClick={() => setView('grid')}
                className={`p-1.5 rounded-md flex items-center justify-center transition-all ${currentView === 'grid' ? 'bg-slate-100 text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                title="Grid View"
              >
                <LayoutGrid className="w-[18px] h-[18px]" strokeWidth={2.5} />
              </button>
              <button 
                onClick={() => setView('table')}
                className={`p-1.5 rounded-md flex items-center justify-center transition-all ${currentView === 'table' ? 'bg-slate-100 text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                title="Table View"
              >
                <List className="w-[18px] h-[18px]" strokeWidth={2.5} />
              </button>
            </div>
            
            <button 
              onClick={() => navigate('/shipments/create')}
              className="flex items-center gap-2 bg-[#1e293b] text-white px-4 py-2.5 rounded-xl text-[14px] font-medium hover:bg-slate-800 transition-colors shadow-sm"
            >
              <Plus className="w-4 h-4" />
              New Shipment
            </button>
          </div>
        </div>

        {/* Dynamic View Content */}
        <div className="flex-1 w-full">
          {currentView === 'grid' ? (
            <ShipmentsGridView data={mockShipments} />
          ) : (
            <ShipmentsTableView data={mockShipments} />
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
