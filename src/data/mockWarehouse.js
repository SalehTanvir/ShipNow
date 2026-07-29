export const mockWarehouseStats = {
  totalSKU: { value: '285', change: '+2.58%' },
  quantityOnHand: { value: '12,450', change: '+4.37%' },
  capacityUsage: { value: '62.5%', change: '+1.54%' }
};

export const mockInventory = [
  { category: 'Electronics', percentage: 25, value: '2,500', color: 'bg-[#7b5cfa]' },
  { category: 'Apparel', percentage: 20, value: '2,000', color: 'bg-[#7b5cfa]', isStriped: true },
  { category: 'Home & Kitchen', percentage: 18, value: '1,800', color: 'bg-[#242628]' },
  { category: 'Beauty & Health', percentage: 15, value: '1,500', color: 'bg-[#242628]', isStriped: true },
  { category: 'Automotive Parts', percentage: 12, value: '1,200', color: 'bg-slate-400' },
  { category: 'Sports Equipment', percentage: 10, value: '1,000', color: 'bg-slate-400', isStriped: true }
];

export const mockPackageStatus = [
  { id: 'PKG-HK77420', date: 'March 20, 2035 - 05:30 PM', status: 'Sent' },
  { id: 'PKG-A50812', date: 'March 21, 2035 - 01:45 PM', status: 'Received' },
  { id: 'PKG-E10293', date: 'March 22, 2035 - 09:00 AM', status: 'Expected' }
];

export const mockStorage = [
  { floor: 1, section: 'A1 - A10', category: 'Electronics', percentage: 80, available: '20/100' },
  { floor: 2, section: 'B1 - B10', category: 'Apparel', percentage: 60, available: '40/100' },
  { floor: 1, section: 'C1 - C10', category: 'Home & Kitchen', percentage: 90, available: '10/100' },
  { floor: 3, section: 'D1 - D10', category: 'Automotive Parts', percentage: 50, available: '50/100' },
  { floor: 2, section: 'E1 - E10', category: 'Beauty & Health', percentage: 70, available: '30/100' }
];

export const mockMapSections = {
  Electronics: {
    availableText: '30/1000',
    sections: [
      { id: 'A1', isFull: false },
      { id: 'A2', isFull: true },
      { id: 'A3', isFull: false },
    ]
  },
  HomeKitchen: {
    availableText: '10/100',
    sections: [
      { id: 'C1', isFull: true },
      { id: 'C2', isFull: true },
      { id: 'C3', isFull: true },
    ]
  },
  AutomotiveParts: {
    availableText: '50/1500',
    sections: [
      { id: 'D1', isFull: false },
      { id: 'D2', isFull: true },
      { id: 'D3', isFull: false },
    ]
  },
  SportsEquipment: {
    availableText: '45/300',
    sections: [
      { id: 'F1', isFull: false },
      { id: 'F2', isFull: true },
      { id: 'F3', isFull: true },
    ]
  },
  Apparel: {
    availableText: '30/1000',
    sections: [
      { id: 'B1', isFull: false },
      { id: 'B2', isFull: true },
      { id: 'B3', isFull: true },
      { id: 'B4', isFull: false },
      { id: 'B5', isFull: true },
      { id: 'B6', isFull: true },
      { id: 'B7', isFull: false },
      { id: 'B8', isFull: true },
      { id: 'B9', isFull: true },
      { id: 'B10', isFull: false },
    ]
  },
  BeautyHealth: {
    availableText: '30/100',
    sections: [
      { id: 'E1', isFull: false },
      { id: 'E2', isFull: true },
      { id: 'E3', isFull: false },
      { id: 'E4', isFull: false },
    ]
  }
};

export const mockActivityLog = [
  { id: 1, user: 'Leo Fernandez', action: 'confirmed receipt of 40 units of Winter Jacket Series in Section B3 (Apparel)', time: '01:45 PM', iconType: 'check' },
  { id: 2, user: 'Ava Martinez', action: 'added 25 units of Smart Router Kit to Section A1 (Electronics)', time: '09:15 AM', iconType: 'add' },
  { id: 3, user: 'Oscar Liem', action: 'dispatched 18 units of Stainless Steel Cookware Set from Section C5 (Home & Kitchen)', time: '05:30 PM', iconType: 'dispatch' },
  { id: 4, user: 'Dina Choi', action: 'created a shipment entry for Brake Pad Sets in Section D2 (Automotive Parts)', time: '04:10 PM', iconType: 'document' }
];
