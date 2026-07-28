import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '../../utils/cn';

export const Checkbox = React.forwardRef(({ className, label, checked, onChange, disabled, ...props }, ref) => {
  return (
    <label className={cn("flex items-center space-x-3 cursor-pointer", disabled && "cursor-not-allowed opacity-50", className)}>
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        <div className="h-5 w-5 rounded bg-slate-200 peer-checked:bg-[#7b5cfa] transition-colors border border-transparent peer-focus-visible:ring-2 peer-focus-visible:ring-[#7b5cfa] peer-focus-visible:ring-offset-2"></div>
        <Check className={cn("absolute h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity")} />
      </div>
      {label && <span className="text-sm text-slate-700">{label}</span>}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';
