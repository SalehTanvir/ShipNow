import React, { useState } from 'react';
import { mockMapSections } from '../../data/mockWarehouse';
import { cn } from '../../utils/cn';

export function WarehouseMap() {
  const [activeFloor, setActiveFloor] = useState('Floor 1');
  const floors = ['Floor 1', 'Floor 2', 'Floor 3'];

  return (
    <div className="bg-white rounded-[12px] p-4 lg:p-5 border border-slate-100 h-full flex flex-col hover:shadow-sm transition-shadow">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
        <h3 className="text-[15px] font-bold text-slate-900">Warehouse Map</h3>
        <div className="flex items-center bg-slate-50 p-1 rounded-lg w-full sm:w-auto">
          {floors.map((floor) => (
            <button
              key={floor}
              onClick={() => setActiveFloor(floor)}
              className={cn(
                "flex-1 sm:flex-none text-[12px] font-medium py-1.5 px-4 rounded-md transition-colors whitespace-nowrap",
                activeFloor === floor ? "bg-[#242628] text-white shadow-sm" : "text-slate-500 hover:text-slate-700"
              )}
            >
              {floor}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-[#f8f9fc] rounded-2xl p-3 lg:p-5 flex-1 flex flex-col">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {Object.entries(mockMapSections).map(([categoryKey, data]) => {
            const categoryName = categoryKey.replace(/([A-Z])/g, ' $1').trim().replace('Home Kitchen', 'Home & Kitchen').replace('Automotive Parts', 'Automotive Parts').replace('Sports Equipment', 'Sports Equipment').replace('Beauty Health', 'Beauty & Health');
            
            // Determine column span based on category
            const colSpanClass = categoryKey === 'Apparel' ? 'col-span-2 md:col-span-3' : 'md:col-span-1';

            return (
              <div key={categoryKey} className={cn("bg-white rounded-xl p-3 lg:p-4 shadow-sm flex flex-col", colSpanClass)}>
                <h4 className="text-[12px] lg:text-[13px] font-bold text-slate-900 mb-2">{categoryName}</h4>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {data.sections.map((section) => (
                    <div 
                      key={section.id} 
                      className={cn(
                        "w-7 h-7 lg:w-8 lg:h-8 rounded-lg flex items-center justify-center text-[10px] lg:text-[11px] font-bold transition-colors",
                        section.isFull 
                          ? "bg-[#f4f5f7] text-slate-400" 
                          : "bg-[#f0edff] text-[#7b5cfa]"
                      )}
                    >
                      {section.id}
                    </div>
                  ))}
                </div>
                
                <div className="text-[10px] lg:text-[11px] text-slate-400 mt-auto">
                  Available <span className="text-slate-900 font-bold">{data.availableText}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#f0edff]"></div>
            <span className="text-[11px] text-slate-400 font-medium">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-[#f4f5f7]"></div>
            <span className="text-[11px] text-slate-400 font-medium">Full</span>
          </div>
        </div>
      </div>
    </div>
  );
}
