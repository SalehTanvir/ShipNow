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

export function ShipmentStatisticChart() {
  const tooltipRef = useRef(null);

  const customDotPlugin = {
    id: 'customDot',
    afterDraw: (chart) => {
      const ctx = chart.ctx;
      const meta = chart.getDatasetMeta(0);
      const element = meta.data[4]; // 'May' index
      if (element && element.y !== undefined && !isNaN(element.y)) {
        const { x, y } = element.tooltipPosition();
        
        // Draw dot
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, 4.5, 0, 2 * Math.PI);
        ctx.fillStyle = '#1e293b'; 
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
        ctx.restore();

        // Position HTML tooltip
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
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 4800,
        ticks: {
          stepSize: 1200,
          color: '#94a3b8',
          font: { size: 10, family: 'Inter' },
          callback: (value) => value === 0 ? '0K' : `${value / 1000}K`
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
  const dataValues = [1400, 2100, 1100, 2000, 3124, 2600, 3600, 4300];

  const data = {
    labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx } = chart;
          if (!context.element || context.element.y === undefined || isNaN(context.element.y)) {
             return 'transparent';
          }
          const y = context.element.y;
          const base = context.element.base;
          if (y === base) return 'transparent';

          const gradient = ctx.createLinearGradient(0, y, 0, base);
          if (context.dataIndex === 4) { // May
             gradient.addColorStop(0, 'rgba(124, 58, 237, 0.4)'); // #7c3aed
             gradient.addColorStop(1, 'rgba(124, 58, 237, 0.0)');
          } else {
             gradient.addColorStop(0, 'rgba(148, 163, 184, 0.2)'); // #94a3b8
             gradient.addColorStop(1, 'rgba(148, 163, 184, 0.0)');
          }
          return gradient;
        },
        borderColor: (context) => {
          return context.dataIndex === 4 ? '#7c3aed' : '#475569';
        },
        borderWidth: { top: 2, right: 0, bottom: 0, left: 0 },
        barPercentage: 1.0,
        categoryPercentage: 1.0,
        borderRadius: 0,
      },
    ],
  };

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col h-[320px]">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-[15px] font-semibold text-slate-700 mb-1">Shipment Statistic</h3>
          <div className="flex items-center gap-3">
            <span className="text-[24px] font-bold text-slate-900">4,352</span>
            <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
              +8.7%
            </div>
          </div>
        </div>
        <button className="flex items-center gap-2 text-[12px] font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors">
          Last Year <ChevronDown className="w-3 h-3" />
        </button>
      </div>
      
      <div className="flex-1 w-full mt-2 relative">
        <Bar options={options} data={data} plugins={[customDotPlugin]} />
        {/* Custom Overlay for the highlighted bar tooltip */}
        <div 
          ref={tooltipRef}
          className="absolute transform -translate-x-1/2 -translate-y-full bg-[#ede9fe] rounded-lg py-1.5 px-3 flex flex-col items-center z-10 pointer-events-none opacity-0 transition-opacity duration-300"
        >
           <span className="text-[10px] text-[#8b5cf6] font-medium mb-0.5">May 2030</span>
           <span className="text-[14px] font-bold text-slate-900 leading-none">3,124</span>
        </div>
      </div>
    </div>
  );
}
