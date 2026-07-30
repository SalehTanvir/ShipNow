import React, { useState } from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { MapPin, Package, Clock, CheckCircle2, AlertCircle, Truck } from 'lucide-react';
import trackingMapImg from '../assets/tracking_map.png';

const SHIPMENTS = [
  {
    id: 'SHP-1042',
    origin: 'Shanghai, CN',
    dest: 'Los Angeles, US',
    status: 'In Transit',
    statusType: 'transit',
    eta: 'Aug 4, 2025',
    carrier: 'Pacific Freight Co.',
    progress: 65,
  },
  {
    id: 'SHP-1058',
    origin: 'Rotterdam, NL',
    dest: 'New York, US',
    status: 'Customs Clearance',
    statusType: 'alert',
    eta: 'Aug 2, 2025',
    carrier: 'Atlantic Lines',
    progress: 82,
  },
  {
    id: 'SHP-1061',
    origin: 'Singapore, SG',
    dest: 'Sydney, AU',
    status: 'Delivered',
    statusType: 'done',
    eta: 'Jul 29, 2025',
    carrier: 'AsiaPac Cargo',
    progress: 100,
  },
  {
    id: 'SHP-1074',
    origin: 'Dubai, AE',
    dest: 'Hamburg, DE',
    status: 'Pending Pickup',
    statusType: 'pending',
    eta: 'Aug 10, 2025',
    carrier: 'Gulf Shipping Ltd.',
    progress: 10,
  },
];

const STATUS_STYLES = {
  transit: { bg: 'bg-sky-100', text: 'text-sky-700', icon: Truck },
  alert: { bg: 'bg-amber-100', text: 'text-amber-700', icon: AlertCircle },
  done: { bg: 'bg-emerald-100', text: 'text-emerald-700', icon: CheckCircle2 },
  pending: { bg: 'bg-slate-100', text: 'text-slate-600', icon: Clock },
};

export default function Tracking() {
  const [selected, setSelected] = useState(SHIPMENTS[0].id);
  const selectedShipment = SHIPMENTS.find(s => s.id === selected);

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-slate-500 text-sm mt-1">Real-time shipment location and status</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Shipment List */}
          <div className="space-y-3">
            {SHIPMENTS.map(s => {
              const style = STATUS_STYLES[s.statusType];
              const Icon = style.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelected(s.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${
                    selected === s.id
                      ? 'border-purple-400 bg-purple-50 shadow-md shadow-purple-100'
                      : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="font-bold text-slate-800 text-sm">{s.id}</span>
                    <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${style.bg} ${style.text}`}>
                      <Icon className="w-3 h-3" />
                      {s.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                    <MapPin className="w-3 h-3 text-purple-400" />
                    {s.origin}
                    <span className="text-slate-300">→</span>
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    {s.dest}
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-violet-400 transition-all duration-500"
                      style={{ width: `${s.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>Progress</span>
                    <span className="font-semibold text-slate-600">{s.progress}%</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Map Panel */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-purple-500" />
                <span className="font-bold text-slate-800 text-sm">{selected}</span>
                {selectedShipment && (
                  <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full ${STATUS_STYLES[selectedShipment.statusType].bg} ${STATUS_STYLES[selectedShipment.statusType].text}`}>
                    {selectedShipment.status}
                  </span>
                )}
              </div>
              {selectedShipment && (
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Clock className="w-3.5 h-3.5" /> ETA: <span className="font-semibold text-slate-700">{selectedShipment.eta}</span>
                </div>
              )}
            </div>

            {/* Static Map */}
            <div className="relative flex-1 min-h-[300px]">
              <img
                src={trackingMapImg}
                alt="Shipment tracking map"
                className="w-full h-full object-cover"
              />
              {/* Overlay info */}
              {selectedShipment && (
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-slate-100 shadow-lg">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest mb-0.5">Origin</p>
                      <p className="text-sm font-bold text-slate-800">{selectedShipment.origin}</p>
                    </div>
                    <div className="border-x border-slate-100">
                      <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest mb-0.5">Carrier</p>
                      <p className="text-xs font-semibold text-slate-700">{selectedShipment.carrier}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest mb-0.5">Destination</p>
                      <p className="text-sm font-bold text-slate-800">{selectedShipment.dest}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
