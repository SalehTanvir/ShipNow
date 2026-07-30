import React from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { User, Bell, Shield, Globe, CreditCard, Save } from 'lucide-react';

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <p className="text-slate-500 text-sm mt-1">Manage your profile, preferences, and organization details</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Settings Nav */}
          <div className="space-y-1">
            {[
              { label: 'Profile', icon: User, active: true },
              { label: 'Notifications', icon: Bell, active: false },
              { label: 'Security', icon: Shield, active: false },
              { label: 'Regional', icon: Globe, active: false },
              { label: 'Billing', icon: CreditCard, active: false },
            ].map(item => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors text-left ${
                  item.active
                    ? 'bg-purple-100/60 text-purple-700'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="md:col-span-3 bg-white rounded-2xl border border-slate-100 p-6 shadow-sm space-y-6">
            <h3 className="font-bold text-slate-800 border-b border-slate-100 pb-4">Profile Information</h3>

            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=80&h=80&q=80"
                alt="John Doe"
                className="w-16 h-16 rounded-full object-cover ring-4 ring-purple-50"
              />
              <button className="px-3.5 py-2 border border-slate-200 text-xs font-semibold rounded-xl text-slate-700 hover:bg-slate-50 transition-colors">
                Change Photo
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">First Name</label>
                <input type="text" defaultValue="John" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:border-purple-500" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Last Name</label>
                <input type="text" defaultValue="Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:border-purple-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email Address</label>
                <input type="email" defaultValue="john.doe@shipnow.logistics" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:border-purple-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Role / Designation</label>
                <input type="text" defaultValue="Fleet Logistics Administrator" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:border-purple-500" />
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-100">
              <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-sm shadow-purple-200">
                <Save className="w-3.5 h-3.5" /> Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
