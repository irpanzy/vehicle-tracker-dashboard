# 🚗 Vehicle Tracker Dashboard

A modern, responsive web application for real-time vehicle fleet monitoring and management.
Built with React 19, powered by Vite 7 for fast development, styled using Tailwind CSS 4.1, and utilizes shadcn/ui for UI components. Animations are handled by Framer Motion, with global state managed via Zustand. All requests are made using Axios, and the project is written entirely in TypeScript 5.8.

![React](https://img.shields.io/badge/React-19.1-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.0-blue?style=for-the-badge&logo=vite)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-blue?style=for-the-badge&logo=tailwindcss)
![Shadcn/UI](https://img.shields.io/badge/Shadcn/UI-2.9-blue?style=for-the-badge&logo=radixui)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.2-blue?style=for-the-badge&logo=framer)
![Zustand](https://img.shields.io/badge/🐻_Zustand-%205.0-blue?style=for-the-badge)
![Axios](https://img.shields.io/badge/Axios-1.1-blue?style=for-the-badge&logo=axios)

## ✨ Features

### 🎯 Core Functionality

- **Real-time Vehicle Monitoring** - Track vehicle status, speed, and location
- **Fleet Overview Dashboard** - Comprehensive statistics and metrics
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
   git clone <repository-url>
   cd vehicle-tracker-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📦 Project Structure

```
src/
├── api/                        # API integration
│   └── vehicleApi.ts           # Vehicle API calls
├── components/                 # Reusable components
│   ├── ui/                     # Shadcn/ui components
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── separator.tsx
│   │   └── skeleton.tsx
│   ├── layout/                 # Layout components
│   │   └── DashboardLayout.tsx
│   └── VehicleCard.tsx         # Vehicle card component
├── lib/                        # Utilities
│   └── utils.ts                # Utility functions
├── pages/                      # Page components
│   ├── VehicleList.tsx         # Main dashboard
│   └── VehicleDetail.tsx       # Vehicle details page
├── store/                      # State management
│   └── vehicleStore.ts         # Zustand store
├── App.tsx                     # Main app component
├── main.tsx                    # App entry point
└── index.css                   # Global styles
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://vehicle-tracker-one-alpha.vercel.app
```

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

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check

# Dependencies
npm install          # Install dependencies
npm update           # Update dependencies
```

## 🎯 Performance Optimizations

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components loaded on demand
- **Optimized Images**: Responsive image loading
- **Minimal Bundle Size**: Tree-shaking and dead code elimination
- **Caching**: Efficient API response caching

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile** : 320px - 640px
- **Tablet** : 641px - 1024px
- **Desktop** : 1025px+

## ♿ Accessibility

- **WCAG 2.1 AA Compliant**: Meets accessibility standards
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: ARIA labels and semantic HTML
- **Color Contrast**: Sufficient contrast ratios
- **Focus Management**: Clear focus indicators

## 🔮 Future Enhancements

- [ ] **Real-time Updates**: WebSocket integration for live data
- [ ] **Map Integration**: Interactive maps with vehicle locations
- [ ] **Historical Data**: Charts and graphs for vehicle analytics
- [ ] **Notifications**: Push notifications for alerts
- [ ] **Export Functionality**: PDF and Excel exports
- [ ] **Dark Mode**: Theme switching capability
- [ ] **Mobile App**: React Native companion app

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

**Built with ❤️ using React, TypeScript, and modern web technologies**
