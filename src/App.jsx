import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Shipments from './pages/Shipments';
import CreateShipment from './pages/CreateShipment';
import Warehouse from './pages/Warehouse';
import InvoicesBilling from './pages/InvoicesBilling';
import Analytics from './pages/Analytics';
import Calendar from './pages/Calendar';
import Tracking from './pages/Tracking';
import Fleets from './pages/Fleets';
import Drivers from './pages/Drivers';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/shipments" element={<Shipments />} />
        <Route path="/shipments/create" element={<CreateShipment />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/warehouse" element={<Warehouse />} />
        <Route path="/fleets" element={<Fleets />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/invoices" element={<InvoicesBilling />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
