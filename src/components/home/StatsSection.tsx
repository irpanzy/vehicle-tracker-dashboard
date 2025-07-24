import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Car,
  Users,
  Globe,
  Gauge,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Car,
      label: "Vehicles Monitored",
      value: "500+",
      trend: "+12%",
      trendUp: true,
    },
    {
      icon: Users,
      label: "Active Users",
      value: "1,200+",
      trend: "+8%",
      trendUp: true,
    },
    {
      icon: Globe,
      label: "Countries Served",
      value: "25+",
      trend: "+3",
      trendUp: true,
    },
    {
      icon: Gauge,
      label: "Uptime",
      value: "99.9%",
      trend: "Stable",
      trendUp: true,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + index * 0.1 }}
        >
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm font-medium text-gray-600">
                  {stat.label}
                </p>
                <div className="flex items-center justify-center gap-1">
                  {stat.trendUp ? (
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                  )}
                  <span
                    className={`text-sm font-medium ${
                      stat.trendUp ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.trend}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsSection;
