import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { MoreHorizontal } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend);

export function ShipmentTypeChart() {
  const data = {
    labels: ['Road Freight', 'Ocean Freight', 'Air Freight', 'Rail Freight'],
    datasets: [
      {
        data: [46, 17, 28, 9],
        backgroundColor: ['#7c3aed', '#64748b', '#1e293b', '#cbd5e1'],
        borderWidth: 0,
        hoverOffset: 4,
        cutout: '80%',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#1e293b',
        padding: 10,
        bodyFont: { size: 13, family: 'Inter' },
        displayColors: false,
        callbacks: {
          label: (context) => `${context.label}: ${context.parsed}%`,
        }
      }
    }
  };

  const types = [
    { label: 'Road Freight', value: '1,150 shipments', percent: '46%', color: 'bg-[#7c3aed]' },
    { label: 'Ocean Freight', value: '425 shipments', percent: '17%', color: 'bg-slate-500' },
    { label: 'Air Freight', value: '700 shipments', percent: '28%', color: 'bg-slate-800' },
    { label: 'Rail Freight', value: '225 shipments', percent: '9%', color: 'bg-slate-300' },
  ];

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-100 flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[16px] font-bold text-slate-900">Shipment Type</h3>
        <button className="p-1 hover:bg-slate-50 rounded-lg text-slate-400 transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="relative w-full aspect-square max-h-[200px] mx-auto mb-8">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-[11px] text-slate-400 font-medium mb-0.5">Total Shipment</span>
          <span className="text-[24px] font-bold text-slate-900">2,500</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-4 gap-x-2 mt-auto">
        {types.map((type, index) => (
          <div key={index} className="flex items-start gap-2.5">
            <div className={`mt-0.5 px-1.5 py-0.5 rounded text-[10px] font-bold text-white ${type.color}`}>
              {type.percent}
            </div>
            <div>
              <p className="text-[13px] font-bold text-slate-900 leading-tight">{type.label}</p>
              <p className="text-[11px] text-slate-500 mt-0.5">{type.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
