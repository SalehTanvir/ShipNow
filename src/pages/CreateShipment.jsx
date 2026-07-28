import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Menu } from 'lucide-react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Input } from '../components/common/Input';
import { Select } from '../components/common/Select';
import { Checkbox } from '../components/common/Checkbox';
import { Radio } from '../components/common/Radio';
import { Toggle } from '../components/common/Toggle';
import { Button } from '../components/common/Button';

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
          <button className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
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
                  <div className="flex gap-2">
                    <div className="w-24">
                      <Select 
                        options={[{label: '🇺🇸 +1', value: '+1'}]} 
                        defaultValue="+1" 
                      />
                    </div>
                    <div className="flex-1">
                      <Input placeholder="408-555-7210" defaultValue="408-555-7210" />
                    </div>
                  </div>
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
                  <div className="flex gap-2">
                    <div className="w-24">
                      <Select 
                        options={[{label: '🇺🇸 +1', value: '+1'}]} 
                        defaultValue="+1" 
                      />
                    </div>
                    <div className="flex-1">
                      <Input placeholder="786-555-4432" defaultValue="786-555-4432" />
                    </div>
                  </div>
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
