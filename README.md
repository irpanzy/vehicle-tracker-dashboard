# 🚗 Vehicle Tracker Dashboard

A modern, responsive web application for real-time vehicle monitoring and management. Built with **React 19**, powered by **Vite 7** for fast development, styled with **Tailwind CSS 4.1**, and utilizes **shadcn/ui** for UI components. Routing is handled by **React Router 7.7.0**, animations are powered by **Framer Motion**, and global state is managed via **Zustand**. All requests are made using **Axios**, and the project is written entirely in **TypeScript 5.8**.

🔗 **Live Demo**: [vehicle-tracker-dashboard.vercel.app](https://vehicle-tracker-dashboard.vercel.app)  
📦 **GitHub Repository**: [github.com/irpanzy/vehicle-tracker-dashboard](https://github.com/irpanzy/vehicle-tracker-dashboard)

---

## 🧩 Tech Stack

![React](https://img.shields.io/badge/React-19.1-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.0-blue?style=for-the-badge&logo=vite)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-blue?style=for-the-badge&logo=tailwindcss)
![Shadcn/UI](https://img.shields.io/badge/Shadcn/UI-2.9-blue?style=for-the-badge&logo=radixui)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.2-blue?style=for-the-badge&logo=framer)
![React Router](https://img.shields.io/badge/React_Router-7.7-blue?style=for-the-badge&logo=react-router&logoColor=white)
![Zustand](https://img.shields.io/badge/🐻_Zustand-5.0-blue?style=for-the-badge)
![Axios](https://img.shields.io/badge/Axios-1.1-blue?style=for-the-badge&logo=axios)

---

## ✨ Features

### 🎯 Core Functionality

- **Real-time Vehicle Monitoring** - Track vehicle status, speed, and location
- **List Overview Dashboard** - Comprehensive statistics and metrics
- **Individual Vehicle Details** - Detailed information for each vehicle
- **Advanced Search & Filtering** - Find vehicles by name or status
- **Responsive Design** - Optimized for desktop, tablet, and mobile

### 🎨 UI/UX Features

- **Modern Design** - Clean, professional interface with smooth animations
- **Interactive Components** - Hover effects, transitions, and micro-interactions
- **Glass Morphism Effects** - Contemporary backdrop blur and transparency
- **Status Indicators** - Visual cues for vehicle status and activity
- **Comprehensive Metrics** - Speed, fuel level, odometer, and location data

### 📱 Technical Features

- **Type Safety** - Full TypeScript implementation
- **State Management** - Zustand for efficient state handling
- **Routing** - React Router for navigation
- **Component Library** - Shadcn/ui for consistent design system
- **Icons** - Lucide React for beautiful, consistent icons
- **Animations** - Framer Motion for smooth transitions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/irpanzy/vehicle-tracker-dashboard.git
   cd vehicle-tracker-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory:

   ```env
   VITE_API_BASE_URL=https://vehicle-tracker-one-alpha.vercel.app
   ```

4. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### API Integration

The application connects to a REST API with the following endpoints:

- `GET /api/vehicles` - Fetch all vehicles
- `GET /api/vehicles/:id` - Fetch vehicle details

## 📊 Features Overview

### Dashboard (Vehicle List)

- **Statistics Cards**: Total vehicles, active vehicles, moving vehicles, average speed
- **Search Functionality**: Real-time search by vehicle name
- **Status Filtering**: Filter by ALL, ACTIVE, or INACTIVE status
- **Pagination**: Navigate through vehicle pages
- **Responsive Grid**: Adaptive layout for different screen sizes

### Vehicle Details

- **Comprehensive Metrics**: Speed, odometer, fuel level, timestamps
- **Location Information**: GPS coordinates with map integration option
- **Status Indicators**: Real-time status with visual feedback
- **Quick Actions**: Navigation back to dashboard

### Vehicle Cards

- **Status Indicators**: Visual status with animated elements
- **Speed Metrics**: Color-coded speed information
- **Last Update Times**: Human-readable timestamps
- **Interactive Elements**: Hover effects and smooth transitions

## 🎯 Performance Optimizations

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components loaded on demand
- **Optimized Images**: Responsive image loading
- **Minimal Bundle Size**: Tree-shaking and dead code elimination
- **Caching**: Efficient API response caching

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for the component library
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## 📞 Support

For support, please open an issue in the GitHub repository or contact the development team.

---
