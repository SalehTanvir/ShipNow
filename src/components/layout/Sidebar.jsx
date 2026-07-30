import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart2, 
  Calendar, 
  Package, 
  MapPin, 
  Home, 
  Truck, 
  Users, 
  FileText,
  MessageSquare,
  Bell,
  Settings,
  ChevronDown
} from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

const NAV_ITEMS = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'Analytics', icon: BarChart2, path: '/analytics' },
  { name: 'Calendar', icon: Calendar, path: '/calendar' },
  { name: 'Shipments', icon: Package, path: '/shipments' },
  { name: 'Tracking', icon: MapPin, path: '/tracking' },
  { name: 'Warehouse', icon: Home, path: '/warehouse' },
  { name: 'Fleets', icon: Truck, path: '/fleets' },
  { name: 'Drivers', icon: Users, path: '/drivers' },
  { name: 'Invoices & Billing', icon: FileText, path: '/invoices' },
];

const BOTTOM_NAV_ITEMS = [
  { name: 'Message', icon: MessageSquare, path: '/messages', badge: '19' },
  { name: 'Notification', icon: Bell, path: '/notifications', badge: '5' },
  { name: 'Settings', icon: Settings, path: '/settings' },
];

export function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar Content */}
      <div className={cn(
        "fixed md:sticky top-0 left-0 z-50 h-screen w-[260px] md:w-[80px] lg:w-[260px] bg-white border-r border-slate-100 flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 overflow-y-auto overflow-x-hidden",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 md:px-0 lg:px-6 md:justify-center lg:justify-start py-8">
          <svg width="24" height="24" viewBox="0 0 56.96 56.96" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            <g transform="translate(5, 5)">
              {/* Rectangle 3 (Top-Left) */}
              <g transform="translate(12.8, 1.57) skewX(-18)">
                <rect x="0" y="0" width="15.38" height="25.04" rx="3" fill="#a78bfa" />
              </g>
              {/* Rectangle 2 (Bottom-Right) */}
              <g transform="translate(26.88, 20.35) skewX(-18)">
                <rect x="0" y="0" width="15.38" height="25.04" rx="3" fill="#7c3aed" />
              </g>
            </g>
          </svg>
          <span className="text-slate-900 font-extrabold italic text-xl tracking-wide block md:hidden lg:block">SHIPNOW</span>
        </div>

        {/* User Profile */}
        <div className="px-6 md:px-2 lg:px-6 mb-8">
          <div className="flex items-center justify-between md:justify-center lg:justify-between p-3 md:p-2 lg:p-3 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors border border-transparent hover:border-slate-100">
            <div className="flex items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" 
                alt="John Doe" 
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <div className="block md:hidden lg:block">
                <p className="text-[14px] font-semibold text-slate-900 leading-tight">John Doe</p>
                <p className="text-[12px] text-slate-500 font-medium">Admin</p>
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400 block md:hidden lg:block flex-shrink-0" />
          </div>
        </div>

        {/* Main Navigation */}
        <div className="px-4 md:px-3 lg:px-4 flex-1">
          <nav className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                title={item.name}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-4 md:px-0 lg:px-4 py-3 md:justify-center lg:justify-start rounded-xl text-[14px] font-medium transition-colors",
                  isActive
                    ? "bg-purple-100/50 text-[#7c3aed]"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                {({ isActive }) => (
                  <>
                    <item.icon className={cn("w-5 h-5 flex-shrink-0", isActive ? "text-[#7c3aed]" : "text-slate-400")} />
                    <span className="block md:hidden lg:block">{item.name}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bottom Navigation */}
        <div className="px-4 md:px-3 lg:px-4 mt-8">
          <nav className="space-y-1">
            {BOTTOM_NAV_ITEMS.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                title={item.name}
                className={({ isActive }) => cn(
                  "flex items-center justify-between md:justify-center lg:justify-between px-4 md:px-0 lg:px-4 py-3 rounded-xl text-[14px] font-medium transition-colors",
                  isActive
                    ? "bg-purple-100/50 text-[#7c3aed]"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3 md:gap-0 lg:gap-3">
                      <item.icon className={cn("w-5 h-5 flex-shrink-0", isActive ? "text-[#7c3aed]" : "text-slate-400")} />
                      <span className="block md:hidden lg:block">{item.name}</span>
                    </div>
                    {item.badge && (
                      <span className="bg-[#7c3aed] text-white text-[11px] font-bold px-2 py-0.5 rounded-full block md:hidden lg:block">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Go Pro Card */}
        <div className="px-6 md:px-2 lg:px-6 py-6 mt-auto block md:hidden lg:block">
          <div className="bg-[#2a2b2e] rounded-2xl p-5 relative overflow-hidden group">
            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-white/10 rounded-full blur-xl transform group-hover:scale-110 transition-transform"></div>
            
            <h4 className="text-white font-bold text-[18px] mb-2 relative z-10 leading-tight">
              Loving<br />ShipNow<br />Free?
            </h4>
            <p className="text-slate-400 text-[12px] mb-4 relative z-10 leading-relaxed">
              Go Pro to access priority support, real-time tracking, and full analytics.
            </p>
            <button className="w-full bg-white text-slate-900 text-[13px] font-bold py-2.5 rounded-lg hover:bg-slate-100 transition-colors relative z-10">
              Go Pro Today
            </button>
          </div>
        </div>


      </div>
    </>
  );
}
