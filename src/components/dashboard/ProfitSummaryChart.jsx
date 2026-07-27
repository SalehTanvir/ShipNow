import React, { useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ChevronDown } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function ProfitSummaryChart() {
  const tooltipRef = useRef(null);

  const customTooltipPlugin = {
    id: 'customTooltip',
    afterDraw: (chart) => {
      const metaRevenue = chart.getDatasetMeta(0);
      const metaCost = chart.getDatasetMeta(1);
      const elementRevenue = metaRevenue.data[4]; // May
      const elementCost = metaCost.data[4]; // May
      
      if (elementRevenue && elementCost && elementRevenue.y !== undefined && elementCost.y !== undefined) {
        // Calculate center between the two bars
        const x = (elementRevenue.x + elementCost.x) / 2;
        // Place above the tallest bar
        const y = Math.min(elementRevenue.y, elementCost.y);
        
        if (tooltipRef.current) {
          tooltipRef.current.style.left = `${x}px`;
          tooltipRef.current.style.top = `${y - 12}px`;
          tooltipRef.current.style.opacity = '1';
        }
      }
    }
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false, // Use our custom HTML tooltip instead
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 25,
          color: '#94a3b8',
          font: { size: 10, family: 'Inter' },
          callback: (value) => value === 0 ? '$0' : `$${value}K`
        },
        border: { display: false },
        grid: {
          color: '#f1f5f9',
          drawTicks: false,
          borderDash: [5, 5],
        }
      },
      x: {
        ticks: {
          color: '#94a3b8',
          font: { size: 11, family: 'Inter' },
        },
        border: { display: false },
        grid: {
          display: false,
        }
      }
    },
  };

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

  const data = {
    labels,
    datasets: [
      {
        type: 'bar',
        label: 'Revenue',
        data: [42, 35, 52, 72, 87.524, 70, 58, 70],
        backgroundColor: (context) => context.dataIndex === 4 ? '#7c3aed' : '#ede9fe',
        borderRadius: 4,
        borderSkipped: 'bottom',
        barPercentage: 0.7,
        categoryPercentage: 0.6,
      },
      {
        type: 'bar',
        label: 'Cost',
        data: [30, 25, 42, 38, 45.680, 45, 50, 35],
        backgroundColor: (context) => context.dataIndex === 4 ? '#1e293b' : '#f1f5f9',
        borderRadius: 4,
        borderSkipped: 'bottom',
        barPercentage: 0.7,
        categoryPercentage: 0.6,
      }
    ],
  };

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col h-[320px]">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-[15px] font-semibold text-slate-700 mb-1">Profit Summary</h3>
          <div className="flex items-center gap-3">
            <span className="text-[24px] font-bold text-slate-900">$624,550</span>
            <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
              +5.62%
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-3">
          <button className="flex items-center gap-2 text-[12px] font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors">
            Last 8 Months <ChevronDown className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-4 hidden sm:flex">
             <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                <span className="w-2 h-2 rounded-[2px] bg-[#7c3aed]"></span>
                Revenue
             </div>
             <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                <span className="w-2 h-2 rounded-[2px] bg-slate-800"></span>
                Cost
             </div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 w-full mt-2 relative">
        <Bar options={options} data={data} plugins={[customTooltipPlugin]} />
        
        {/* Custom Tooltip */}
        <div 
          ref={tooltipRef}
          className="absolute transform -translate-x-1/2 -translate-y-full bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] rounded-lg py-2.5 px-3.5 flex flex-col gap-2 z-10 pointer-events-none opacity-0 transition-opacity duration-300 border border-slate-50 min-w-[140px]"
        >
           <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-1.5">
                 <span className="w-2 h-2 rounded-[2px] bg-[#7c3aed]"></span>
                 <span className="text-[12px] text-slate-500">Revenue</span>
              </div>
              <span className="text-[12px] font-bold text-slate-900">$87,524</span>
           </div>
           <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-1.5">
                 <span className="w-2 h-2 rounded-[2px] bg-slate-800"></span>
                 <span className="text-[12px] text-slate-500">Cost</span>
              </div>
              <span className="text-[12px] font-bold text-slate-900">$45,680</span>
           </div>
        </div>
      </div>
    </div>
  );
}
