# 🚀 ShipNow — Modern Logistics & Warehouse Management System

ShipNow is a modern, high-performance web application for logistics, supply chain monitoring, and warehouse management. Built with **React 19**, **Vite**, and **Tailwind CSS v4**, ShipNow provides real-time shipment tracking, inventory capacity metrics, invoice management, and full mobile/tablet responsive layouts.

---

## 🔗 Demo & Repository

- **Live Demo Link:** [Insert Your Live Demo URL Here](https://ship-now-demo.vercel.app)
- **GitHub Repository:** `https://github.com/SalehTanvir/ShipNow.git`

---

## 📋 Screen-by-Screen Implementation Status

Below is the status breakdown of all primary user screens in accordance with Section 9.1 README requirements:

| Flow Order | Screen Name | Status | Key Features & Implementation Details |
| :--- | :--- | :---: | :--- |
| **1** | **Login** | `Complete` | Modern login interface with role selection, password toggle, form validation, and instant demo dashboard entry. |
| **2** | **Dashboard** | `Complete` | High-level metrics overview, total shipments, revenue analytics chart, active fleets summary, and recent activity log. |
| **3** | **Shipments (Both Views)** | `Complete` | **Dual View Modes**: Supports both **Table (List) View** and **Card (Grid) View**. Includes status filter tabs (*All*, *In Transit*, *Delivered*, *Pending*, *Cancelled*), search filtering, and shipment details panel. |
| **4** | **Create New Shipment** | `Complete` | Interactive shipment creation wizard with sender/recipient details, package dimensions & weight calculation, shipping carrier options, and instant cost estimator. |
| **5** | **Invoices & Billing** | `Complete` | Stat overview cards (*Paid*, *Unpaid*, *Pending*, *Overdue*), searchable invoice list, side-by-side invoice detail view on desktop, overlapping drawer on tablet, and responsive 2x2 card grid on mobile. |
| **6** | **Warehouse** | `Complete` | Freight mode switcher (*Road*, *Rail*, *Ocean*, *Air*), interactive **Capacity Usage** gauge, 6-category **Warehouse Inventory** (vertical bar chart on desktop/tablet, stacked horizontal progress bars on mobile), floor section map, and real-time activity log. |

> **Note on Additional Navigation Screens:**  
> Supporting navigation pages (*Analytics*, *Calendar*, *Fleets*, *Drivers*, *Messages*, *Notifications*, *Settings*) are also implemented and accessible via the sidebar navigation.

---

## 🛠️ Technology Stack

- **Core:** [React 19](https://react.dev/), [Vite 8](https://vitejs.dev/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/), [PostCSS](https://postcss.org/)
- **Icons & UI:** [Lucide React](https://lucide.dev/), Custom SVGs
- **Form Validation:** [React Hook Form](https://react-hook-form.com/)
- **Data Visualization:** [Chart.js](https://www.chartjs.org/) + [React-ChartJS-2](https://react-chartjs-2.js.org/)

---

## 💻 Setup & Local Development Instructions

### Prerequisites
Make sure you have **Node.js 18.x** or higher installed on your system.

### 1. Clone the Repository
```bash
git clone https://github.com/SalehTanvir/ShipNow.git
cd ShipNow
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
To preview the production bundle locally:
```bash
npm run preview
```

---

## 📱 Responsive Design Highlights

- **Mobile View (`< 768px`)**:
  - Compact header with centered page title, brand icon, and mobile drawer menu.
  - 3-column compact stat cards for quick KPI visibility.
  - Horizontal progress bar view for warehouse inventory to prevent data squishing.
  - 2x2 grid for invoice status metrics.
- **Tablet View (`768px - 1023px`)**:
  - Icon-only collapsed sidebar (`80px`).
  - Side-by-side grid layout for Capacity Usage donut chart and Package Status lists.
  - Full-width invoice list with interactive right-side detail drawer.
- **Desktop View (`1024px+`)**:
  - Full sidebar navigation (`260px`).
  - Multi-column dashboards optimized for widescreen monitors (`1440px+`).

---

## 📄 License
Created for project demonstration. All rights reserved.
