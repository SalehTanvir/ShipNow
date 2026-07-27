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
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar Content */}
      <div className={cn(
        "fixed lg:sticky top-0 left-0 z-50 h-screen w-[260px] bg-white border-r border-slate-100 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 overflow-y-auto",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-8">
          <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="4" width="4" height="10" transform="skewX(-15)" fill="#a78bfa" />
            <rect x="11" y="10" width="4" height="10" transform="skewX(-15)" fill="#7c3aed" />
          </svg>
          <span className="text-slate-900 font-extrabold italic text-xl tracking-wide">SHIPNOW</span>
        </div>

        {/* User Profile */}
        <div className="px-6 mb-8">
          <div className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors border border-transparent hover:border-slate-100">
            <div className="flex items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" 
                alt="John Doe" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-[14px] font-semibold text-slate-900 leading-tight">John Doe</p>
                <p className="text-[12px] text-slate-500 font-medium">Admin</p>
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
        </div>

        {/* Main Navigation */}
        <div className="px-4 flex-1">
          <nav className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium transition-colors",
                  isActive || item.path === '/dashboard' 
                    ? "bg-purple-100/50 text-[#7c3aed]" 
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <item.icon className={cn("w-5 h-5", item.path === '/dashboard' ? "text-[#7c3aed]" : "text-slate-400")} />
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bottom Navigation */}
        <div className="px-4 mt-8">
          <nav className="space-y-1">
            {BOTTOM_NAV_ITEMS.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-[14px] font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-slate-400" />
                  {item.name}
                </div>
                {item.badge && (
                  <span className="bg-[#7c3aed] text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Go Pro Card */}
        <div className="px-6 py-6 mt-auto">
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

        <div className="px-6 pb-6 pt-2 text-[11px] text-slate-400 font-medium flex flex-wrap gap-x-3 gap-y-1 justify-center opacity-80">
          <span>Copyright © 2025 Peterdraw</span>
          <a href="#" className="hover:text-slate-600">Privacy Policy</a>
          <a href="#" className="hover:text-slate-600">Term and conditions</a>
          <a href="#" className="hover:text-slate-600">Contact</a>
        </div>

      </div>
    </>
  );
}
