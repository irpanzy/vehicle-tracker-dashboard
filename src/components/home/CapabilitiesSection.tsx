import { motion } from "framer-motion";
import {
  Navigation,
  Fuel,
  Clock,
  Smartphone,
  BarChart3,
  HeadphonesIcon,
} from "lucide-react";

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: Navigation,
      title: "GPS Tracking",
      description: "Precise location tracking with detailed route history",
    },
    {
      icon: Fuel,
      title: "Fuel Management",
      description: "Monitor fuel consumption and optimize costs",
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Round-the-clock surveillance and instant alerts",
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Access your dashboard anywhere, anytime",
    },
    {
      icon: BarChart3,
      title: "Smart Reports",
      description: "AI-powered insights and predictive analytics",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Expert support team available around the clock",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      className="space-y-12"
    >
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Complete Solution
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          From basic tracking to advanced analytics, we've got everything
          covered
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {capabilities.map((capability, index) => (
          <motion.div
            key={capability.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 + index * 0.1 }}
          >
            <div className="flex gap-4 p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300 group">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <capability.icon className="w-6 h-6 text-[#3674B5]" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#3674B5] transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CapabilitiesSection;
