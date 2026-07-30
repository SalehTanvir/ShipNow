import React from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { BarChart2, TrendingUp, TrendingDown, Activity, PieChart, ArrowUpRight } from 'lucide-react';

const METRIC_CARDS = [
  { label: 'Total Shipments', value: '12,480', change: '+8.2%', up: true, color: '#7c3aed' },
  { label: 'On-Time Rate', value: '94.6%', change: '+1.3%', up: true, color: '#059669' },
  { label: 'Revenue MTD', value: '$284,320', change: '+12.5%', up: true, color: '#0ea5e9' },
  { label: 'Avg. Delay (hrs)', value: '1.8', change: '-0.4', up: false, color: '#f59e0b' },
];

const BAR_DATA = [65, 80, 55, 90, 72, 88, 60, 95, 78, 85, 70, 92];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function Analytics() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
        
            <p className="text-slate-500 text-sm mt-1">Performance overview for the current period</p>
          </div>
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            <Activity className="w-4 h-4 text-purple-500" />
            Last 12 Months
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {METRIC_CARDS.map((m) => (
            <div key={m.label} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">{m.label}</p>
              <p className="text-3xl font-extrabold text-slate-900 mb-2">{m.value}</p>
              <span
                className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ background: m.up ? '#d1fae5' : '#fee2e2', color: m.up ? '#059669' : '#dc2626' }}
              >
                {m.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {m.change}
              </span>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Bar Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-slate-800 text-base flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-purple-500" /> Monthly Shipment Volume
              </h2>
              <span className="text-xs text-slate-400">2025</span>
            </div>
            <div className="flex items-end gap-2 h-40">
              {BAR_DATA.map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-lg transition-all duration-500"
                    style={{
                      height: `${h}%`,
                      background: i === 7 ? 'linear-gradient(to top, #7c3aed, #a78bfa)' : '#ede9fe',
                    }}
                  />
                  <span className="text-[10px] text-slate-400 font-medium">{MONTHS[i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Donut Placeholder */}
          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col">
            <h2 className="font-bold text-slate-800 text-base flex items-center gap-2 mb-6">
              <PieChart className="w-5 h-5 text-purple-500" /> Route Distribution
            </h2>
            <div className="flex-1 flex flex-col gap-3 justify-center">
              {[
                { label: 'Asia–Pacific', pct: 38, color: '#7c3aed' },
                { label: 'North America', pct: 27, color: '#0ea5e9' },
                { label: 'Europe', pct: 22, color: '#10b981' },
                { label: 'Other', pct: 13, color: '#f59e0b' },
              ].map((r) => (
                <div key={r.label}>
                  <div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: r.color }} />
                      {r.label}
                    </span>
                    <span>{r.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${r.pct}%`, background: r.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coming Soon Banner */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-purple-600 to-violet-500 p-6 flex items-center justify-between text-white shadow-lg">
          <div>
            <p className="font-bold text-lg">Advanced Analytics — Coming Soon</p>
            <p className="text-purple-200 text-sm mt-1">AI-powered insights, predictive ETAs, and carrier scorecards.</p>
          </div>
          <div className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors px-5 py-2.5 rounded-xl text-sm font-semibold cursor-pointer">
            Learn More <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
