import React, { useState } from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { ChevronLeft, ChevronRight, Package, Truck, AlertCircle } from 'lucide-react';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const EVENTS = {
  3: [{ label: 'SHP-1042 Departure', type: 'shipment' }],
  7: [{ label: 'Fleet Maintenance', type: 'fleet' }],
  11: [{ label: 'SHP-1058 Arrival', type: 'shipment' }, { label: 'Carrier Review', type: 'alert' }],
  15: [{ label: 'SHP-1061 Departure', type: 'shipment' }],
  19: [{ label: 'Driver Debrief', type: 'fleet' }],
  22: [{ label: 'SHP-1074 Arrival', type: 'shipment' }],
  28: [{ label: 'Month-End Report', type: 'alert' }],
};

const EVENT_STYLES = {
  shipment: { bg: 'bg-purple-100', text: 'text-purple-700', icon: Package },
  fleet: { bg: 'bg-sky-100', text: 'text-sky-700', icon: Truck },
  alert: { bg: 'bg-amber-100', text: 'text-amber-700', icon: AlertCircle },
};

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

export default function Calendar() {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Calendar</h1>
            <p className="text-slate-500 text-sm mt-1">Shipment schedules and operational events</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
            <button onClick={prevMonth} className="p-2 rounded-xl hover:bg-slate-100 transition-colors text-slate-500">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-bold text-slate-800">
              {MONTHS[viewMonth]} {viewYear}
            </h2>
            <button onClick={nextMonth} className="p-2 rounded-xl hover:bg-slate-100 transition-colors text-slate-500">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Day Headers */}
          <div className="grid grid-cols-7 border-b border-slate-100">
            {DAYS.map(d => (
              <div key={d} className="py-3 text-center text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {d}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7">
            {cells.map((day, idx) => {
              const isToday = day === today.getDate() && viewMonth === today.getMonth() && viewYear === today.getFullYear();
              const events = day ? (EVENTS[day] || []) : [];
              return (
                <div
                  key={idx}
                  className={`min-h-[100px] p-2 border-b border-r border-slate-50 ${!day ? 'bg-slate-50/50' : 'hover:bg-purple-50/30 transition-colors cursor-pointer'}`}
                >
                  {day && (
                    <>
                      <div className={`w-7 h-7 flex items-center justify-center rounded-full text-sm font-semibold mb-1
                        ${isToday ? 'bg-purple-600 text-white' : 'text-slate-700'}`}>
                        {day}
                      </div>
                      <div className="space-y-0.5">
                        {events.map((ev, ei) => {
                          const style = EVENT_STYLES[ev.type];
                          return (
                            <div key={ei} className={`flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium ${style.bg} ${style.text} truncate`}>
                              <style.icon className="w-2.5 h-2.5 flex-shrink-0" />
                              <span className="truncate">{ev.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-5 mt-4 px-1">
          {Object.entries(EVENT_STYLES).map(([type, style]) => (
            <div key={type} className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <span className={`w-2.5 h-2.5 rounded-sm ${style.bg}`} />
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
