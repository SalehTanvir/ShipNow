import React from 'react';
import { cn } from '../../utils/cn';

export const Toggle = React.forwardRef(({ className, label, checked, onChange, disabled, ...props }, ref) => {
  return (
    <label className={cn("flex items-center space-x-3 cursor-pointer", disabled && "cursor-not-allowed opacity-50", className)}>
      {label && <span className="text-sm text-slate-700">{label}</span>}
      <div className="relative inline-flex items-center">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        <div className="h-6 w-11 rounded-full bg-slate-200 peer-checked:bg-[#7b5cfa] transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-[#7b5cfa] peer-focus-visible:ring-offset-2"></div>
        <div className="absolute left-[2px] top-[2px] h-5 w-5 rounded-full bg-white transition-transform peer-checked:translate-x-5 shadow-sm"></div>
      </div>
    </label>
  );
});

Toggle.displayName = 'Toggle';
