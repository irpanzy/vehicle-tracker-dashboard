import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { MapPin, Activity, BarChart3, Shield } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: MapPin,
      title: "Real-time Tracking",
      description: "Monitor vehicle locations with GPS precision in real-time",
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      icon: Activity,
      title: "Live Monitoring",
      description: "Track speed, fuel levels, and engine status instantly",
      color: "bg-green-500",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive reports and data visualization",
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
    },
    {
      icon: Shield,
      title: "Security Alerts",
      description: "Instant notifications for unauthorized usage or issues",
      color: "bg-red-500",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="space-y-12"
    >
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Powerful Features
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to manage your vehicle fleet efficiently and
          effectively
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-gradient-to-br from-white to-gray-50 group-hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 ${feature.bgColor} rounded-full mb-4 mx-auto`}
                >
                  <feature.icon className={`w-8 h-8 ${feature.textColor}`} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
