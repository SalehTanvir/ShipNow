import React from 'react';

import techGearLogo        from '../icons/TechGearInc.svg';
import styleHubLogo        from '../icons/StyleHubCo.svg';
import freshNestLogo       from '../icons/FreshNest.svg';
import fitPlusLogo         from '../icons/FitPlusGear.svg';
import autoPartsLogo       from '../icons/AutoPartsPro.svg';
import ecoLightsLogo       from '../icons/EcoLights.svg';
import greenHavenLogo      from '../icons/GreenHaven.svg';
import modaWearLogo        from '../icons/ModaWear.svg';
import smartApplianceLogo  from '../icons/SmartAppliance.svg';
import sunCoreLogo         from '../icons/SunCorePanels.svg';
import quickPartsLogo      from '../icons/QuickParts.svg';
import vitaFreshLogo       from '../icons/VitaFresh.svg';
import styleDepotLogo      from '../icons/StyleDepot.svg';

const COMPANY_LOGOS = {
  'TechGear Inc.':    techGearLogo,
  'TechGear':         techGearLogo,
  'StyleHub Co.':     styleHubLogo,
  'StyleHub':         styleHubLogo,
  'FreshNest':        freshNestLogo,
  'FitPlus Gear':     fitPlusLogo,
  'FitPlus':          fitPlusLogo,
  'AutoParts Pro':    autoPartsLogo,
  'AutoParts':        autoPartsLogo,
  'EcoLights':        ecoLightsLogo,
  'GreenHaven':       greenHavenLogo,
  'ModaWear':         modaWearLogo,
  'Moda Wear':        modaWearLogo,
  'SmartAppliance':   smartApplianceLogo,
  'Smart Appliance':  smartApplianceLogo,
  'SunCore Panels':   sunCoreLogo,
  'SunCore':          sunCoreLogo,
  'QuickParts':       quickPartsLogo,
  'VitaFresh':        vitaFreshLogo,
  'StyleDepot':       styleDepotLogo,
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

