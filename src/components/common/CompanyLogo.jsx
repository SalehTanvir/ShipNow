import React from 'react';

const COMPANY_LOGOS = {
  'TechGear Inc.': '/src/components/icons/TechGearInc.svg',
  'TechGear': '/src/components/icons/TechGearInc.svg',
  'StyleHub Co.': '/src/components/icons/StyleHubCo.svg',
  'StyleHub': '/src/components/icons/StyleHubCo.svg',
  'FreshNest': '/src/components/icons/FreshNest.svg',
  'FitPlus Gear': '/src/components/icons/FitPlusGear.svg',
  'FitPlus': '/src/components/icons/FitPlusGear.svg',
  'AutoParts Pro': '/src/components/icons/AutoPartsPro.svg',
  'AutoParts': '/src/components/icons/AutoPartsPro.svg',
  'EcoLights': '/src/components/icons/EcoLights.svg',
  'GreenHaven': '/src/components/icons/GreenHaven.svg',
  'ModaWear': '/src/components/icons/ModaWear.svg',
  'Moda Wear': '/src/components/icons/ModaWear.svg',
  'SmartAppliance': '/src/components/icons/SmartAppliance.svg',
  'Smart Appliance': '/src/components/icons/SmartAppliance.svg',
  'SunCore Panels': '/src/components/icons/SunCorePanels.svg',
  'SunCore': '/src/components/icons/SunCorePanels.svg',
  'QuickParts': '/src/components/icons/QuickParts.svg',
  'VitaFresh': '/src/components/icons/VitaFresh.svg',
  'StyleDepot': '/src/components/icons/StyleDepot.svg',
};

const normalize = (str) => (str || '').toLowerCase().replace(/[^a-z0-9]/g, '');

export function CompanyLogo({ name = '', className = "w-8 h-8", logoOnly = false }) {
  const normName = normalize(name);
  
  let logoSrc = COMPANY_LOGOS[name];

  if (!logoSrc && normName) {
    const foundKey = Object.keys(COMPANY_LOGOS).find((key) => {
      const normKey = normalize(key);
      return normKey === normName || normName.includes(normKey) || normKey.includes(normName);
    });
    if (foundKey) {
      logoSrc = COMPANY_LOGOS[foundKey];
    }
  }

  if (logoSrc) {
    return (
      <div className={`${className} bg-slate-50 flex items-center justify-center p-1 rounded-full border border-slate-100 flex-shrink-0 shadow-2xs`}>
        <img src={logoSrc} alt={name} className="w-full h-full object-contain" />
      </div>
    );
  }

  // Fallback for company without explicit SVG
  const colors = ['bg-blue-600', 'bg-emerald-600', 'bg-purple-600', 'bg-slate-800', 'bg-rose-600'];
  const charCode = (name || 'C').charCodeAt(0);
  const bgClass = colors[charCode % colors.length];
  const initial = (name || 'C').charAt(0);

  return (
    <div className={`${className} ${bgClass} rounded-full flex items-center justify-center text-white font-bold text-[12px] flex-shrink-0`}>
      {initial}
    </div>
  );
}

