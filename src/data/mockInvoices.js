// NOTE: packages only store `price` and `qty` — `amount` and all totals are
// calculated at render time in InvoiceDetails.jsx (price × qty per line;
// subtotal = sum of line amounts; tax = subtotal × TAX_RATE; total = subtotal + tax + fee).

export const TAX_RATE = 0.08; // 8%

export const invoiceStats = [
  { id: 'paid', label: 'Paid Invoices', amount: '$28,890', count: 350, icon: 'check-circle' },
  { id: 'unpaid', label: 'Unpaid Invoices', amount: '$16,700', count: 120, icon: 'x-circle' },
  { id: 'pending', label: 'Pending Invoices', amount: '$8,050', count: 80, icon: 'clock' },
  { id: 'overdue', label: 'Overdue Invoices', amount: '$22,110', count: 245, icon: 'alert-circle', isOverdue: true },
];

const SHIP_TO = {
  name: 'ShipNow Logistics',
  email: 'accounts@shipnow.com',
  address: '901 Distribution Ave, Charlotte, NC 28217, USA',
  phone: '+1 704-555-9911',
};

export const mockInvoices = [
  // ── INV-1208 · MediaWise ─────────────────────────────────────────────────
  {
    id: 'INV-1208',
    company: 'Moda Wear', companyLogo: 'MW', companyColor: '#7c3aed',
    shippingId: '#SH9201478', issuedDate: 'Mar 28, 2026', dueDate: 'May 10, 2026',
    amount: 399.60, status: 'Unpaid',
    billFrom: {
      name: 'Moda Wear', email: 'accounts@modawear.com',
      address: '6 Blunt Ave, Chicago, IL 60601, USA', phone: '+1 312-555-0160',
    },
    billTo: SHIP_TO,
    fee: 0,
    packages: [
      { description: 'Media Display Unit', type: 'Air Freight Express', price: 120, qty: 2 },
      { description: 'Campaign Print Pack', type: 'Road Freight Standard', price: 85, qty: 1 },
      { description: 'Brand Kit Package', type: 'Road Freight Standard', price: 55, qty: 2 },
    ],
    note: 'Payment is due within 30 days. Please ensure timely remittance to avoid service interruption. Late fees may apply after 3 business days past due.',
  },

  // ── INV-1001 · TechGear Inc. ─────────────────────────────────────────────
  {
    id: 'INV-1001',
    company: 'TechGear Inc.', companyLogo: 'T', companyColor: '#6366f1',
    shippingId: '#SH9283746', issuedDate: 'Mar 15, 2035', dueDate: 'Mar 22, 2035',
    amount: 1250.00, status: 'Paid',
    billFrom: {
      name: 'TechGear Inc.', email: 'billing@techgear.com',
      address: '12 Innovation Blvd, Austin, TX 73301, USA', phone: '+1 512-555-0101',
    },
    billTo: SHIP_TO,
    fee: 0,
    packages: [
      { description: 'Pro Wireless Headset', type: 'Air Freight Express', price: 250, qty: 3 },
      { description: 'USB-C Hub Pro', type: 'Road Freight Standard', price: 100, qty: 5 },
    ],
    note: 'Payment cleared. Thank you for your business.',
  },

  // ── INV-1002 · StyleHub Co. ──────────────────────────────────────────────
  {
    id: 'INV-1002',
    company: 'StyleHub Co.', companyLogo: 'S', companyColor: '#ec4899',
    shippingId: '#SH9182635', issuedDate: 'Mar 16, 2035', dueDate: 'Mar 23, 2035',
    amount: 980.00, status: 'Unpaid',
    billFrom: {
      name: 'StyleHub Co.', email: 'billing@stylehub.com',
      address: '88 Fashion Lane, New York, NY 10001, USA', phone: '+1 212-555-0088',
    },
    billTo: SHIP_TO,
    fee: 10,
    packages: [
      { description: 'Winter Collection Bundle', type: 'Road Freight Standard', price: 245, qty: 2 },
      { description: 'Silk Scarf Set (×12)', type: 'Road Freight Express', price: 490, qty: 1 },
    ],
    note: 'Please process payment by the due date to avoid delivery disruption.',
  },

  // ── INV-1003 · FreshNest ─────────────────────────────────────────────────
  {
    id: 'INV-1003',
    company: 'FreshNest', companyLogo: 'F', companyColor: '#10b981',
    shippingId: '#SH9037821', issuedDate: 'Mar 14, 2035', dueDate: 'Mar 21, 2035',
    amount: 1320.00, status: 'Paid',
    billFrom: {
      name: 'FreshNest', email: 'billing@freshnest.com',
      address: '44 Green Ave, Portland, OR 97201, USA', phone: '+1 503-555-0044',
    },
    billTo: SHIP_TO,
    fee: 0,
    packages: [
      { description: 'Organic Kitchen Set', type: 'Road Freight Express', price: 330, qty: 2 },
      { description: 'Bamboo Utensil Pack', type: 'Road Freight Standard', price: 88, qty: 3 },
      { description: 'Glass Storage Jars', type: 'Ocean Freight Standard', price: 54, qty: 6 },
    ],
    note: 'Paid in full.',
  },

  // ── INV-1004 · FitPlus Gear ──────────────────────────────────────────────
  {
    id: 'INV-1004',
    company: 'FitPlus Gear', companyLogo: 'FP', companyColor: '#f59e0b',
    shippingId: '#SH9374652', issuedDate: 'Mar 17, 2035', dueDate: 'Mar 24, 2035',
    amount: 1150.00, status: 'Unpaid',
    billFrom: {
      name: 'FitPlus Gear', email: 'billing@fitplusgear.com',
      address: '77 Sport Blvd, Denver, CO 80201, USA', phone: '+1 720-555-0077',
    },
    billTo: SHIP_TO,
    fee: 10,
    packages: [
      { description: 'Pro Yoga Mat Set', type: 'Road Freight Standard', price: 115, qty: 4 },
      { description: 'Resistance Band Kit', type: 'Road Freight Express', price: 75, qty: 3 },
      { description: 'Foam Roller (Heavy)', type: 'Road Freight Standard', price: 55, qty: 5 },
    ],
    note: 'Please process payment by the due date.',
  },

  // ── INV-1005 · AutoParts Pro ─────────────────────────────────────────────
  {
    id: 'INV-1005',
    company: 'AutoParts Pro', companyLogo: 'AP', companyColor: '#ef4444',
    shippingId: '#SH9457830', issuedDate: 'Mar 15, 2035', dueDate: 'Mar 22, 2035',
    amount: 1480.00, status: 'Overdue',
    billFrom: {
      name: 'AutoParts Pro', email: 'billing@autopartspro.com',
      address: '55 Motor Way, Detroit, MI 48201, USA', phone: '+1 313-555-0055',
    },
    billTo: SHIP_TO,
    fee: 15,
    packages: [
      { description: 'Brake Pad Set (Premium)', type: 'Road Freight Express', price: 185, qty: 4 },
      { description: 'Oil Filter Pack (×10)', type: 'Road Freight Standard', price: 45, qty: 8 },
      { description: 'Spark Plug Set', type: 'Road Freight Standard', price: 30, qty: 12 },
    ],
    note: 'This invoice is overdue. Please remit payment immediately to avoid penalties.',
  },

  // ── INV-1006 · EcoLights ─────────────────────────────────────────────────
  {
    id: 'INV-1006',
    company: 'EcoLights', companyLogo: 'E', companyColor: '#84cc16',
    shippingId: '#SH8821349', issuedDate: 'Mar 13, 2035', dueDate: 'Mar 20, 2035',
    amount: 790.00, status: 'Paid',
    billFrom: {
      name: 'EcoLights', email: 'billing@ecolights.com',
      address: '33 Solar Park, San Jose, CA 95101, USA', phone: '+1 408-555-0033',
    },
    billTo: SHIP_TO,
    fee: 0,
    packages: [
      { description: 'LED Smart Bulb Pack', type: 'Road Freight Standard', price: 79, qty: 6 },
      { description: 'Motion Sensor Light', type: 'Road Freight Express', price: 99, qty: 2 },
    ],
    note: 'Payment received. Thank you.',
  },

  // ── INV-1007 · GreenHaven ────────────────────────────────────────────────
  {
    id: 'INV-1007',
    company: 'GreenHaven', companyLogo: 'G', companyColor: '#059669',
    shippingId: '#SH8967432', issuedDate: 'Mar 14, 2035', dueDate: 'Mar 21, 2035',
    amount: 875.00, status: 'Paid',
    billFrom: {
      name: 'GreenHaven', email: 'billing@greenhaven.com',
      address: '22 Garden Blvd, Seattle, WA 98101, USA', phone: '+1 206-555-0022',
    },
    billTo: SHIP_TO,
    fee: 0,
    packages: [
      { description: 'Eco Planter Collection', type: 'Road Freight Standard', price: 175, qty: 3 },
      { description: 'Seed Starter Kit', type: 'Road Freight Standard', price: 55, qty: 4 },
    ],
    note: 'Paid in full. Thank you!',
  },

  // ── INV-1008 · ModaWear ──────────────────────────────────────────────────
  {
    id: 'INV-1008',
    company: 'ModaWear', companyLogo: 'MW', companyColor: '#8b5cf6',
    shippingId: '#SH8893247', issuedDate: 'Mar 16, 2035', dueDate: 'Mar 23, 2035',
    amount: 910.00, status: 'Unpaid',
    billFrom: {
      name: 'ModaWear', email: 'billing@modawear.com',
      address: '89 Franklin St, Boston, MA 02110, USA', phone: '+1 617-555-2290',
    },
    billTo: SHIP_TO,
    fee: 10,
    packages: [
      { description: 'Lightweight Hoodie Pack', type: 'Road Freight Express', price: 120, qty: 3 },
      { description: 'Autumn Jacket Set', type: 'Road Freight Standard', price: 180, qty: 2 },
      { description: 'Lightweight Hoodie Pack', type: 'Road Freight Express', price: 95, qty: 2 },
    ],
    note: 'Please process payment by the due date to avoid delivery disruption. Late fees may apply after 3 business days past due.',
  },

  // ── INV-1009 · SunCore Panels ────────────────────────────────────────────
  {
    id: 'INV-1009',
    company: 'SunCore Panels', companyLogo: 'SC', companyColor: '#f97316',
    shippingId: '#SH9018723', issuedDate: 'Mar 17, 2035', dueDate: 'Mar 24, 2035',
    amount: 1600.00, status: 'Unpaid',
    billFrom: {
      name: 'SunCore Panels', email: 'billing@suncorepanels.com',
      address: '99 Solar Ave, Phoenix, AZ 85001, USA', phone: '+1 602-555-0099',
    },
    billTo: SHIP_TO,
    fee: 15,
    packages: [
      { description: 'Solar Panel Kit 400W', type: 'Road Freight Express', price: 800, qty: 1 },
      { description: 'Mounting Bracket Set', type: 'Road Freight Standard', price: 120, qty: 5 },
      { description: 'Inverter Unit 3kW', type: 'Road Freight Express', price: 250, qty: 1 },
    ],
    note: 'Awaiting payment.',
  },

  // ── INV-1010 · VitaFresh ─────────────────────────────────────────────────
  {
    id: 'INV-1010',
    company: 'VitaFresh', companyLogo: 'VF', companyColor: '#14b8a6',
    shippingId: '#SH8881190', issuedDate: 'Mar 15, 2035', dueDate: 'Mar 22, 2035',
    amount: 1120.00, status: 'Overdue',
    billFrom: {
      name: 'VitaFresh', email: 'billing@vitafresh.com',
      address: '11 Wellness Dr, Miami, FL 33101, USA', phone: '+1 305-555-0011',
    },
    billTo: SHIP_TO,
    fee: 10,
    packages: [
      { description: 'Organic Supplement Pack', type: 'Air Freight Express', price: 140, qty: 5 },
      { description: 'Vitamin D3 Bundle', type: 'Air Freight Express', price: 88, qty: 4 },
    ],
    note: 'This invoice is overdue. Please contact us immediately.',
  },

  // ── INV-1011 · SmartAppliance ────────────────────────────────────────────
  {
    id: 'INV-1011',
    company: 'SmartAppliance', companyLogo: 'SA', companyColor: '#6366f1',
    shippingId: '#SH8923752', issuedDate: 'Mar 18, 2035', dueDate: 'Mar 25, 2035',
    amount: 1050.00, status: 'Paid',
    billFrom: {
      name: 'SmartAppliance', email: 'billing@smartappliance.com',
      address: '66 Tech Park, San Francisco, CA 94101, USA', phone: '+1 415-555-0066',
    },
    billTo: SHIP_TO,
    fee: 0,
    packages: [
      { description: 'Smart Air Purifier', type: 'Road Freight Express', price: 350, qty: 2 },
      { description: 'HEPA Filter Pack', type: 'Road Freight Standard', price: 70, qty: 5 },
    ],
    note: 'Payment confirmed. Thank you for your business.',
  },
];
