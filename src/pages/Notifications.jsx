import React from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Bell, AlertCircle, CheckCircle2, Info, Clock } from 'lucide-react';

const NOTIFICATIONS = [
  { id: 1, title: 'Customs Clearance Delay', desc: 'SHP-1058 holds required documentation verification at Rotterdam port.', time: '10 mins ago', type: 'alert', unread: true },
  { id: 2, title: 'Shipment Delivered', desc: 'SHP-1061 has been successfully delivered to Sydney terminal.', time: '2 hours ago', type: 'success', unread: true },
  { id: 3, title: 'Vessel Maintenance Notice', desc: 'FLT-002 (Atlantic Star) scheduled for routine hull inspection.', time: '5 hours ago', type: 'info', unread: false },
  { id: 4, title: 'Invoice #INV-2024-001 Paid', desc: 'Payment of $14,250 received from Global Traders Inc.', time: '1 day ago', type: 'success', unread: false },
];

const NOTIF_STYLES = {
  alert: { icon: AlertCircle, bg: 'bg-amber-100', text: 'text-amber-700' },
  success: { icon: CheckCircle2, bg: 'bg-emerald-100', text: 'text-emerald-700' },
  info: { icon: Info, bg: 'bg-sky-100', text: 'text-sky-700' },
};

export default function Notifications() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-slate-500 text-sm mt-1">System alerts, status updates, and operational logs</p>
          </div>
          <button className="text-xs font-semibold text-purple-600 hover:text-purple-700">
            Mark all as read
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm divide-y divide-slate-50 overflow-hidden">
          {NOTIFICATIONS.map(n => {
            const style = NOTIF_STYLES[n.type];
            const Icon = style.icon;
            return (
              <div key={n.id} className={`p-5 flex items-start gap-4 hover:bg-slate-50/60 transition-colors ${n.unread ? 'bg-purple-50/20' : ''}`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${style.bg} ${style.text}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-bold text-slate-800">{n.title}</h4>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {n.time}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{n.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
