import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

export const Select = React.forwardRef(({ className, label, error, helperText, options, ...props }, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-[13px] font-semibold text-slate-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className={cn(
            "appearance-none flex h-11 w-full rounded-lg border-0 bg-[#f4f5f7] px-4 py-2 pr-10 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#7b5cfa] disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
            error && "ring-2 ring-red-500 text-red-900 focus:ring-red-500",
            className
          )}
          ref={ref}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
      {(error || helperText) && (
        <p className={cn("mt-1.5 text-xs", error ? "text-red-500" : "text-slate-500")}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Select.displayName = 'Select';
