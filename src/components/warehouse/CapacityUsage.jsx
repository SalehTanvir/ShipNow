import React from 'react';
import { MoreHorizontal } from 'lucide-react';

export function CapacityUsage() {
  const percentage = 62.5;
  const radius = 90;
  const stroke = 16;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-[#242628] rounded-2xl p-5 lg:p-6 h-full flex flex-col hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-[15px] font-bold text-white">Capacity Usage</h3>
        <button className="text-slate-400 hover:text-white">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative flex items-center justify-center mb-6">
          <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
            {/* Background circle */}
            <circle
              stroke="rgba(255,255,255,0.1)"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            {/* Progress circle */}
            <circle
              stroke="#7b5cfa"
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={circumference + ' ' + circumference}
              style={{ strokeDashoffset }}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
            <span className="text-[11px] text-slate-300 mb-0.5">Total Usage</span>
            <span className="text-[26px] font-bold text-white leading-none">{percentage}%</span>
          </div>
        </div>

        <div className="w-full flex justify-between items-end mt-auto px-2">
          <div>
            <p className="text-[11px] text-slate-400 mb-1">Loaded</p>
            <p className="text-[13px] font-bold text-white">40 shelves</p>
          </div>
          <div className="text-right">
            <p className="text-[11px] text-slate-400 mb-1">Empty</p>
            <p className="text-[13px] font-bold text-white">24 shelves</p>
          </div>
        </div>
      </div>
    </div>
  );
}
