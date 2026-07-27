import React from 'react';
import { MoreHorizontal, FileText, CheckCircle2, RefreshCw, AlertCircle } from 'lucide-react';
import clsx from 'clsx';

export function RecentActivity() {
  const activities = [
    {
      user: 'User @TechGuru99',
      action: 'submitted a bulk shipment request',
      time: '12:00 PM',
      icon: FileText,
      color: 'bg-indigo-100 text-indigo-600',
    },
    {
      user: 'Customer Support @SupportKen',
      action: 'added a priority tag to Order ID 77889JKL',
      time: '11:50 AM',
      icon: AlertCircle,
      color: 'bg-emerald-100 text-emerald-600',
    },
    {
      user: 'User @SallyMae88',
      action: 'initiated a return process for Order ID 44556GHI',
      time: '11:00 AM',
      icon: RefreshCw,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      user: 'Administrator @AdminLisa',
      action: 'resolved a delivery issue for Order ID 12345XYZ',
      time: '10:15 AM',
      icon: CheckCircle2,
      color: 'bg-slate-100 text-slate-600',
    },
  ];

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[16px] font-bold text-slate-900">Recent Activity</h3>
        <button className="p-1 hover:bg-slate-50 rounded-lg text-slate-400 transition-colors bg-slate-50">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      <div className="relative flex-1">
        {/* Vertical Line */}
        <div className="absolute left-[19px] top-4 bottom-4 w-px bg-slate-100 z-0"></div>

        <div className="space-y-6 relative z-10">
          {activities.map((activity, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className={clsx("w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10 border-[3px] border-white", activity.color)}>
                <activity.icon className="w-4 h-4" />
              </div>
              <div className="pt-1">
                <p className="text-[13px] text-slate-600 leading-snug">
                  <span className="font-semibold text-slate-900">{activity.user.split(' ')[0]} </span>
                  <span className="font-semibold text-[#7c3aed]">{activity.user.split(' ')[1]} </span>
                  {activity.action}
                </p>
                <p className="text-[11px] text-slate-400 mt-1 font-medium">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
