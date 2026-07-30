import React from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Users, Phone, Mail, Award, CheckCircle2, Clock, AlertTriangle } from 'lucide-react';

const DRIVERS = [
  {
    id: 'DRV-101',
    name: 'Michael Chen',
    role: 'Senior Long-Haul Driver',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    status: 'Available',
    statusType: 'available',
    deliveries: 342,
    rating: 4.9,
    vehicleAssigned: 'FLT-001 (Pacific Runner)',
    phone: '+1 (555) 234-5678',
  },
  {
    id: 'DRV-102',
    name: 'Sarah Jenkins',
    role: 'Regional Logistics Specialist',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80',
    status: 'On Duty',
    statusType: 'onduty',
    deliveries: 289,
    rating: 4.8,
    vehicleAssigned: 'FLT-003 (Gulf Express)',
    phone: '+1 (555) 876-5432',
  },
  {
    id: 'DRV-103',
    name: 'Carlos Rodriguez',
    role: 'Heavy Freight Driver',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    status: 'On Duty',
    statusType: 'onduty',
    deliveries: 415,
    rating: 5.0,
    vehicleAssigned: 'FLT-005 (Asia Titan)',
    phone: '+1 (555) 456-7890',
  },
  {
    id: 'DRV-104',
    name: 'David Kim',
    role: 'Express Delivery Driver',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    status: 'Off Duty',
    statusType: 'offduty',
    deliveries: 198,
    rating: 4.7,
    vehicleAssigned: 'Unassigned',
    phone: '+1 (555) 321-9876',
  },
];

const STATUS_MAP = {
  available: { label: 'Available', bg: 'bg-emerald-100', text: 'text-emerald-700', icon: CheckCircle2 },
  onduty: { label: 'On Duty', bg: 'bg-purple-100', text: 'text-purple-700', icon: Clock },
  offduty: { label: 'Off Duty', bg: 'bg-slate-100', text: 'text-slate-600', icon: AlertTriangle },
};

export default function Drivers() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Drivers</h1>
            <p className="text-slate-500 text-sm mt-1">Manage personnel roster and assignment status</p>
          </div>
          <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-sm shadow-purple-200">
            <Users className="w-4 h-4" /> Add Driver
          </button>
        </div>

        {/* Drivers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DRIVERS.map(driver => {
            const statusStyle = STATUS_MAP[driver.statusType];
            const Icon = statusStyle.icon;
            return (
              <div key={driver.id} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <img
                      src={driver.avatar}
                      alt={driver.name}
                      className="w-14 h-14 rounded-2xl object-cover ring-2 ring-purple-100"
                    />
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${statusStyle.bg} ${statusStyle.text}`}>
                      <Icon className="w-3 h-3" />
                      {statusStyle.label}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base">{driver.name}</h3>
                  <p className="text-xs text-slate-500 font-medium mb-4">{driver.role}</p>

                  <div className="space-y-2.5 py-3 border-y border-slate-100 mb-4 text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span className="text-slate-400 font-medium">Deliveries:</span>
                      <span className="font-bold text-slate-800">{driver.deliveries}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span className="text-slate-400 font-medium">Rating:</span>
                      <span className="font-bold text-amber-600 flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-amber-500 inline" />
                        {driver.rating} / 5.0
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-600 truncate">
                      <span className="text-slate-400 font-medium">Assigned:</span>
                      <span className="font-semibold text-slate-800 truncate max-w-[120px]" title={driver.vehicleAssigned}>{driver.vehicleAssigned}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a href={`tel:${driver.phone}`} className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    Call
                  </a>
                  <button className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-purple-50 text-xs font-semibold text-purple-700 hover:bg-purple-100 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-purple-500" />
                    Message
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
