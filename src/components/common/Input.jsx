import React from 'react';
import { cn } from '../../utils/cn';

export const Input = React.forwardRef(({ className, type = 'text', label, error, helperText, rightElement, ...props }, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-[13px] font-semibold text-slate-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-11 w-full rounded-lg border-0 bg-[#f4f5f7] px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7b5cfa] disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
            error && "ring-2 ring-red-500 text-red-900 focus:ring-red-500",
            rightElement && "pr-10",
            className
          )}
          ref={ref}
          {...props}
        />
        {rightElement && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            {rightElement}
          </div>
        )}
      </div>
      {(error || helperText) && (
        <p className={cn("mt-1.5 text-xs", error ? "text-red-500" : "text-slate-500")}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';
