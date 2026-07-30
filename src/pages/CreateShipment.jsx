import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, ChevronDown, Menu } from 'lucide-react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Input } from '../components/common/Input';
import { Select } from '../components/common/Select';
import { Checkbox } from '../components/common/Checkbox';
import { Radio } from '../components/common/Radio';
import { Toggle } from '../components/common/Toggle';
import { Button } from '../components/common/Button';

const COUNTRY_OPTIONS = [
  { code: 'us', dialCode: '+1',   name: 'United States' },
  { code: 'ca', dialCode: '+1',   name: 'Canada' },
  { code: 'gb', dialCode: '+44',  name: 'United Kingdom' },
  { code: 'de', dialCode: '+49',  name: 'Germany' },
  { code: 'fr', dialCode: '+33',  name: 'France' },
  { code: 'it', dialCode: '+39',  name: 'Italy' },
  { code: 'es', dialCode: '+34',  name: 'Spain' },
  { code: 'au', dialCode: '+61',  name: 'Australia' },
  { code: 'jp', dialCode: '+81',  name: 'Japan' },
  { code: 'cn', dialCode: '+86',  name: 'China' },
  { code: 'in', dialCode: '+91',  name: 'India' },
  { code: 'bd', dialCode: '+880', name: 'Bangladesh' },
  { code: 'sg', dialCode: '+65',  name: 'Singapore' },
  { code: 'ae', dialCode: '+971', name: 'UAE' },
  { code: 'br', dialCode: '+55',  name: 'Brazil' },
  { code: 'mx', dialCode: '+52',  name: 'Mexico' },
  { code: 'za', dialCode: '+27',  name: 'South Africa' },
  { code: 'ng', dialCode: '+234', name: 'Nigeria' },
  { code: 'pk', dialCode: '+92',  name: 'Pakistan' },
  { code: 'id', dialCode: '+62',  name: 'Indonesia' },
  { code: 'tr', dialCode: '+90',  name: 'Turkey' },
  { code: 'kr', dialCode: '+82',  name: 'South Korea' },
  { code: 'nl', dialCode: '+31',  name: 'Netherlands' },
  { code: 'se', dialCode: '+46',  name: 'Sweden' },
  { code: 'no', dialCode: '+47',  name: 'Norway' },
];

function FlagImg({ code, size = 20 }) {
  return (
    <img
      src={`https://flagcdn.com/w${size * 2}/${code}.png`}
      width={size}
      height={Math.round(size * 0.75)}
      alt={code.toUpperCase()}
      className="rounded-sm object-cover"
      style={{ width: size, height: Math.round(size * 0.75), display: 'inline-block', flexShrink: 0 }}
    />
  );
}

function PhoneInput({ defaultValue = '', defaultCode = 'us' }) {
  const [selected, setSelected] = useState(
    () => COUNTRY_OPTIONS.find((c) => c.code === defaultCode) || COUNTRY_OPTIONS[0]
  );
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const wrapperRef = useRef(null);
  const searchRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
        setSearch('');
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Focus search when dropdown opens
  useEffect(() => {
    if (open && searchRef.current) searchRef.current.focus();
  }, [open]);

  const filtered = COUNTRY_OPTIONS.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.dialCode.includes(search) ||
      c.code.includes(search.toLowerCase())
  );

  return (
    <div ref={wrapperRef} className="relative flex items-center h-11 w-full rounded-lg bg-white border border-slate-200 shadow-sm focus-within:ring-2 focus-within:ring-[#7b5cfa] focus-within:border-transparent transition-all overflow-visible px-0">
      {/* Country Trigger Button */}
      <button
        type="button"
        onClick={() => { setOpen((v) => !v); setSearch(''); }}
        className="flex items-center gap-1.5 h-full px-3 border-r border-slate-200 hover:bg-slate-50 transition-colors rounded-l-lg shrink-0 focus:outline-none"
      >
        <FlagImg code={selected.code} size={20} />
        <span className="text-sm font-medium text-slate-700 whitespace-nowrap">{selected.dialCode}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {/* Phone input */}
      <input
        type="tel"
        defaultValue={defaultValue}
        placeholder="408-555-7210"
        className="w-full h-full bg-transparent text-sm text-slate-900 px-3 focus:outline-none placeholder:text-slate-400 rounded-r-lg"
      />

      {/* Dropdown */}
      {open && (
        <div className="absolute top-[calc(100%+6px)] left-0 z-50 w-64 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden">
          {/* Search */}
          <div className="p-2 border-b border-slate-100">
            <input
              ref={searchRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search country..."
              className="w-full px-3 py-1.5 text-sm rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#7b5cfa] placeholder:text-slate-400"
            />
          </div>
          {/* List */}
          <ul className="max-h-52 overflow-y-auto py-1">
            {filtered.length === 0 && (
              <li className="px-4 py-3 text-sm text-slate-400 text-center">No results</li>
            )}
            {filtered.map((c) => (
              <li key={c.code}>
                <button
                  type="button"
                  onClick={() => { setSelected(c); setOpen(false); setSearch(''); }}
                  className={`flex items-center gap-2.5 w-full px-3 py-2 text-sm hover:bg-[#f3f0ff] transition-colors ${
                    selected.code === c.code ? 'bg-[#f3f0ff] text-[#7b5cfa] font-semibold' : 'text-slate-700'
                  }`}
                >
                  <FlagImg code={c.code} size={20} />
                  <span className="flex-1 text-left truncate">{c.name}</span>
                  <span className="text-slate-400 text-xs shrink-0">{c.dialCode}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function CreateShipment() {
  const navigate = useNavigate();
  const [freightType, setFreightType] = useState('road');
  const [tracking, setTracking] = useState(true);

  return (
    <DashboardLayout showHeader={false}>
      <div className="max-w-7xl mx-auto pb-12">
        {/* Header Section */}
        <div className="flex items-center justify-between pt-4 lg:pt-8 pb-6 px-4 lg:px-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <button 
                onClick={() => navigate('/shipments')}
                className="p-1 -ml-1 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-xl lg:text-2xl font-bold text-slate-900">Create New Shipment</h1>
            </div>
            <div className="text-sm text-slate-500 ml-7">
              <span className="text-[#7b5cfa] cursor-pointer hover:underline" onClick={() => navigate('/dashboard')}>Dashboard</span>
              <span className="mx-2">/</span>
              <span className="text-[#7b5cfa] cursor-pointer hover:underline" onClick={() => navigate('/shipments')}>Shipments</span>
              <span className="mx-2">/</span>
              <span>Create New Shipment</span>
            </div>
          </div>
          {/* Mobile Menu Button - usually handled by layout but we hide the layout's and put it here to match design */}
          <button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
             <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Main Form Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 lg:p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Shipment Form</h2>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-8">
            {/* Sender Info */}
            <div className="flex-1 bg-[#f8f9fc] rounded-xl p-4 lg:p-6">
              <h3 className="font-semibold text-slate-800 mb-4">Sender Info</h3>
              <div className="space-y-4">
                <Input label="Company" placeholder="GreenHaven" defaultValue="GreenHaven" />
                <Input label="Email" type="email" placeholder="logistics@greenhaven.com" defaultValue="logistics@greenhaven.com" />
                
                <div>
                  <label className="block text-[13px] font-semibold text-slate-700 mb-2">Phone Number</label>
                  <PhoneInput defaultValue="408-555-7210" defaultCode="us" />
                </div>

                <Input label="Pickup Address" placeholder="1120 Birch Street, Portland, OR 97205, USA" defaultValue="1120 Birch Street, Portland, OR 97205, USA" />
              </div>
            </div>

            {/* Recipient Info */}
            <div className="flex-1 bg-[#f8f9fc] rounded-xl p-4 lg:p-6">
              <h3 className="font-semibold text-slate-800 mb-4">Recipient Info</h3>
              <div className="space-y-4">
                <Input label="Company" placeholder="FreshNest" defaultValue="FreshNest" />
                <Input label="Email" type="email" placeholder="warehouse@freshnest.com" defaultValue="warehouse@freshnest.com" />
                
                <div>
                  <label className="block text-[13px] font-semibold text-slate-700 mb-2">Phone Number</label>
                  <PhoneInput defaultValue="786-555-4432" defaultCode="us" />
                </div>

                <Input 
                  label="Delivery Address" 
                  placeholder="Street address, city, state/province, ZIP code" 
                  helperText="Address is required."
                  error={false}
                  className="border-[#7b5cfa] ring-1 ring-[#7b5cfa] bg-white" // highlighting the active state in design
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-8">
            {/* Package Details */}
            <div className="lg:w-[45%]">
              <h3 className="font-semibold text-slate-800 mb-4">Package Details</h3>
              <div className="space-y-4">
                <Input label="Item Description" placeholder="Premium Garden Tool Set" defaultValue="Premium Garden Tool Set" />
                
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Quantity" type="number" defaultValue="40" />
                  <Input label="Value" defaultValue="$3,200" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Input label="Weight" defaultValue="125" />
                  <Select label="Units" options={[{label: 'Kg', value: 'kg'}, {label: 'Lbs', value: 'lbs'}]} defaultValue="kg" />
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-slate-700 mb-2">Dimensions</label>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <Input defaultValue="80" rightElement={<span className="text-sm text-slate-400">cm</span>} />
                      <span className="text-xs text-slate-500 mt-1 block">Length</span>
                    </div>
                    <div>
                      <Input defaultValue="60" rightElement={<span className="text-sm text-slate-400">cm</span>} />
                      <span className="text-xs text-slate-500 mt-1 block">Width</span>
                    </div>
                    <div>
                      <Input placeholder="ex. 20" rightElement={<span className="text-sm text-slate-400">cm</span>} />
                      <span className="text-xs text-slate-500 mt-1 block">Height</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Details */}
            <div className="flex-1 flex flex-col">
              <h3 className="font-semibold text-slate-800 mb-4">Shipping Details</h3>
              <div className="space-y-6 flex-1">
                <div>
                  <label className="block text-[13px] font-semibold text-slate-700 mb-3">Freight Type</label>
                  <div className="flex flex-wrap gap-4 lg:gap-6">
                    <Radio name="freight" value="road" label="Road Freight" checked={freightType === 'road'} onChange={() => setFreightType('road')} />
                    <Radio name="freight" value="rail" label="Rail Freight" checked={freightType === 'rail'} onChange={() => setFreightType('rail')} />
                    <Radio name="freight" value="ocean" label="Ocean Freight" checked={freightType === 'ocean'} onChange={() => setFreightType('ocean')} />
                    <Radio name="freight" value="air" label="Air Freight" checked={freightType === 'air'} onChange={() => setFreightType('air')} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Select 
                    label="Carrier" 
                    options={[{label: 'FedEx', value: 'fedex'}, {label: 'UPS', value: 'ups'}, {label: 'DHL', value: 'dhl'}]} 
                    defaultValue="fedex" 
                  />
                  <Select 
                    label="Shipping Method" 
                    options={[{label: 'Select Method', value: ''}]} 
                    helperText="Shipping method is required."
                    error={false}
                    className="border-[#7b5cfa] ring-1 ring-[#7b5cfa] bg-white text-[#7b5cfa]"
                  />
                  <Input 
                    label="Shipment ID" 
                    defaultValue="#SH9583742" 
                    disabled 
                    helperText="Auto-generated" 
                    className="bg-slate-100 text-slate-400"
                  />
                  <div className="relative">
                    <Input 
                      label="Shipment Date" 
                      defaultValue="March 21, 2035" 
                      rightElement={<Calendar className="w-4 h-4 text-slate-400" />}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-slate-700 mb-2">Notes</label>
                  <textarea 
                    className="w-full h-24 rounded-lg border-0 bg-[#f4f5f7] px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7b5cfa] resize-none"
                    placeholder="Add special delivery notes (optional)"
                  ></textarea>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:justify-between gap-6 pt-2">
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-3">Additional Services</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                      <Checkbox label="Insurance Coverage" checked={true} readOnly />
                      <Checkbox label="Temperature Control" checked={true} readOnly />
                      <Checkbox label="Signature on Delivery" checked={true} readOnly />
                      <Checkbox label="Fragile Item Handling" checked={false} readOnly />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-slate-700 mb-3">Tracking & Status Updates</label>
                    <Toggle label="Notify Recipient via Email/SMS" checked={tracking} onChange={() => setTracking(!tracking)} />
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-6 border-t border-slate-100">
            <Button variant="ghost" className="bg-[#f4f5f7] hover:bg-slate-200 text-slate-700 px-6">
              Delete Form
            </Button>
            <Button variant="primary" className="bg-[#242628] hover:bg-black px-6">
              Submit Shipment
            </Button>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
