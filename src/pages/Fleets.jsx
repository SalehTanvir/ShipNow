import React from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Truck, AlertCircle, CheckCircle2, Clock, Wrench, ArrowUpRight } from 'lucide-react';

const FLEETS = [
  { id: 'FLT-001', name: 'Pacific Runner', type: 'Container Ship', status: 'Active', statusType: 'active', load: 87, nextService: 'Sep 12, 2025', location: 'Pacific Ocean' },
  { id: 'FLT-002', name: 'Atlantic Star', type: 'Bulk Carrier', status: 'In Maintenance', statusType: 'maintenance', load: 0, nextService: 'Aug 5, 2025', location: 'Rotterdam Port' },
  { id: 'FLT-003', name: 'Gulf Express', type: 'Tanker', status: 'Active', statusType: 'active', load: 72, nextService: 'Oct 1, 2025', location: 'Arabian Sea' },
  { id: 'FLT-004', name: 'Euro Falcon', type: 'Ro-Ro Vessel', status: 'Idle', statusType: 'idle', load: 0, nextService: 'Aug 20, 2025', location: 'Hamburg Port' },
  { id: 'FLT-005', name: 'Asia Titan', type: 'Container Ship', status: 'Active', statusType: 'active', load: 94, nextService: 'Nov 3, 2025', location: 'South China Sea' },
  { id: 'FLT-006', name: 'Coastal Spirit', type: 'Feeder Vessel', status: 'Alert', statusType: 'alert', load: 55, nextService: 'Aug 1, 2025', location: 'Bay of Bengal' },
];

const STATUS_MAP = {
  active: { icon: CheckCircle2, bg: 'bg-emerald-100', text: 'text-emerald-700' },
  maintenance: { icon: Wrench, bg: 'bg-amber-100', text: 'text-amber-700' },
  idle: { icon: Clock, bg: 'bg-slate-100', text: 'text-slate-600' },
  alert: { icon: AlertCircle, bg: 'bg-red-100', text: 'text-red-600' },
};

const SUMMARY = [
  { label: 'Total Fleet', value: '6', icon: Truck, color: '#7c3aed' },
  { label: 'Active', value: '3', icon: CheckCircle2, color: '#059669' },
  { label: 'In Maintenance', value: '1', icon: Wrench, color: '#f59e0b' },
  { label: 'Alerts', value: '1', icon: AlertCircle, color: '#dc2626' },
];

export default function Fleets() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>

            <p className="text-slate-500 text-sm mt-1">Manage and monitor your vessel fleet</p>
          </div>
          <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-sm shadow-purple-200">
            <Truck className="w-4 h-4" /> Add Vessel
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {SUMMARY.map(s => (
            <div key={s.label} className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: s.color + '1a' }}>
                <s.icon className="w-5 h-5" style={{ color: s.color }} />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-slate-900">{s.value}</p>
                <p className="text-xs text-slate-500 font-medium">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Fleet Table */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100">
            <h2 className="font-bold text-slate-800">Fleet Register</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  {['Vessel ID', 'Name', 'Type', 'Status', 'Load %', 'Location', 'Next Service', ''].map(h => (
                    <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {FLEETS.map(f => {
                  const statusStyle = STATUS_MAP[f.statusType];
                  const Icon = statusStyle.icon;
                  return (
                    <tr key={f.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="px-6 py-4 font-mono text-xs text-slate-500">{f.id}</td>
                      <td className="px-6 py-4 font-semibold text-slate-800">{f.name}</td>
                      <td className="px-6 py-4 text-slate-500">{f.type}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${statusStyle.bg} ${statusStyle.text}`}>
                          <Icon className="w-3 h-3" />{f.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full"
                              style={{ width: `${f.load}%`, background: f.load > 80 ? '#7c3aed' : f.load > 0 ? '#0ea5e9' : '#e2e8f0' }}
                            />
                          </div>
                          <span className="text-xs text-slate-600 font-medium">{f.load}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-500">{f.location}</td>
                      <td className="px-6 py-4 text-slate-500">{f.nextService}</td>
                      <td className="px-6 py-4">
                        <button className="p-1.5 hover:bg-purple-50 rounded-lg transition-colors text-slate-400 hover:text-purple-600">
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
