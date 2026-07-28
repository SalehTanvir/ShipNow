import React from 'react';
import { cn } from '../../utils/cn';

export const Radio = React.forwardRef(({ className, label, name, value, checked, onChange, disabled, ...props }, ref) => {
  return (
    <label className={cn("flex items-center space-x-3 cursor-pointer", disabled && "cursor-not-allowed opacity-50", className)}>
      <div className="relative flex items-center justify-center">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="peer sr-only"
          disabled={disabled}
          ref={ref}
          {...props}
        />
        <div className="h-4 w-4 rounded-full border-2 border-slate-300 peer-checked:border-[#7b5cfa] transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-[#7b5cfa] peer-focus-visible:ring-offset-2"></div>
        <div className="absolute h-2 w-2 rounded-full bg-[#7b5cfa] scale-0 peer-checked:scale-100 transition-transform"></div>
      </div>
      {label && <span className="text-sm text-slate-700">{label}</span>}
    </label>
  );
});

Radio.displayName = 'Radio';
