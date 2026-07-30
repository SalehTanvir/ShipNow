import React from 'react';
import { MoreHorizontal } from 'lucide-react';

export function CapacityUsage() {
  const percentage = 62.5;
  const radius = 72;
  const stroke = 16;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-[#242628] rounded-[12px] p-4 lg:p-5 w-full h-full flex flex-col hover:shadow-md transition-shadow min-h-[280px] lg:min-h-0">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-[15px] font-bold text-white">Capacity Usage</h3>
        <button className="text-slate-400 hover:text-white transition-colors">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Donut Chart */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <svg
            height={radius * 2}
            width={radius * 2}
            className="transform -rotate-90 scale-90 md:scale-100"
            style={{ overflow: 'visible' }}
          >
            {/* Track ring (white/light) */}
            <circle
              stroke="rgba(255,255,255,0.15)"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            {/* White unfilled portion */}
            <circle
              stroke="#ffffff"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              strokeDasharray={circumference + ' ' + circumference}
              style={{ strokeDashoffset: -(circumference - strokeDashoffset) }}
            />
            {/* Purple filled portion */}
            <circle
              stroke="#8b5cf6"
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={circumference + ' ' + circumference}
              style={{ strokeDashoffset }}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          {/* Center text */}
          <div className="absolute flex flex-col items-center justify-center text-center">
            <span className="text-[11px] text-slate-300 font-medium mb-0.5">Total Usage</span>
            <span className="text-[24px] font-bold text-white leading-none">{percentage}%</span>
          </div>
        </div>
      </div>

      {/* Bottom shelves */}
      <div className="flex justify-between items-end mt-3 pt-3 border-t border-white/10">
        <div>
          <p className="text-[11px] text-slate-400 font-medium mb-0.5">Loaded</p>
          <p className="text-[14px] font-bold text-white leading-tight">40 shelves</p>
        </div>
        <div className="text-right">
          <p className="text-[11px] text-slate-400 font-medium mb-0.5">Empty</p>
          <p className="text-[14px] font-bold text-white leading-tight">24 shelves</p>
        </div>
      </div>
    </div>
  );
}
