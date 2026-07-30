import React from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { MessageSquare, Send, Search, CheckCheck } from 'lucide-react';

const CONVERSATIONS = [
  { id: 1, name: 'Port Operations - L.A.', unread: 3, lastMsg: 'Vessel SHP-1042 cleared berth 4', time: '10:42 AM', online: true },
  { id: 2, name: 'Michael Chen (Driver)', unread: 1, lastMsg: 'Customs docs submitted successfully', time: '09:15 AM', online: true },
  { id: 3, name: 'Gulf Shipping Dispatch', unread: 0, lastMsg: 'Revised invoice for SHP-1074 sent', time: 'Yesterday', online: false },
  { id: 4, name: 'Warehouse Ops Team', unread: 0, lastMsg: 'Pallet count verified for bay C', time: 'Jul 28', online: false },
];

export default function Messages() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Messages</h1>
          <p className="text-slate-500 text-sm mt-1">Operational communications and dispatch chat</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-3 min-h-[550px]">
          {/* Contacts List */}
          <div className="border-r border-slate-100 flex flex-col">
            <div className="p-4 border-b border-slate-100">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search chats..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs font-medium focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
            <div className="divide-y divide-slate-50 flex-1 overflow-y-auto">
              {CONVERSATIONS.map(c => (
                <div key={c.id} className="p-4 hover:bg-purple-50/50 cursor-pointer transition-colors flex items-start gap-3">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs">
                      {c.name.substring(0, 2).toUpperCase()}
                    </div>
                    {c.online && (
                      <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white absolute bottom-0 right-0" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-xs font-bold text-slate-800 truncate">{c.name}</h4>
                      <span className="text-[10px] text-slate-400">{c.time}</span>
                    </div>
                    <p className="text-xs text-slate-500 truncate">{c.lastMsg}</p>
                  </div>
                  {c.unread > 0 && (
                    <span className="bg-purple-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                      {c.unread}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Active Chat */}
          <div className="md:col-span-2 flex flex-col bg-slate-50/30">
            <div className="p-4 bg-white border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs">
                  PO
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800">Port Operations - L.A.</h3>
                  <p className="text-[11px] text-emerald-600 font-medium">● Online</p>
                </div>
              </div>
            </div>

            <div className="flex-1 p-6 space-y-4 overflow-y-auto">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs flex-shrink-0">
                  PO
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none p-3.5 shadow-sm max-w-sm text-xs text-slate-700">
                  Vessel SHP-1042 cleared berth 4. Unloading procedure started.
                  <span className="block text-[9px] text-slate-400 mt-1">10:40 AM</span>
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <div className="bg-purple-600 text-white rounded-2xl rounded-tr-none p-3.5 shadow-sm max-w-sm text-xs">
                  Copy that. Transport team is prepped for gate pickup.
                  <div className="flex items-center justify-end gap-1 text-[9px] text-purple-200 mt-1">
                    10:42 AM <CheckCheck className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-slate-100 flex items-center gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-medium focus:outline-none focus:border-purple-500"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white p-2.5 rounded-xl transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
