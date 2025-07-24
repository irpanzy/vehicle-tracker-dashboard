import {
  Clock,
  Fuel,
  Zap,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  Activity,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

type Props = {
  vehicle: {
    speed: number;
    odometer: number;
    fuel_level: number;
    timestamp: string;
  };
};

const VehicleMetrics = ({ vehicle }: Props) => {
  const isMoving = vehicle.speed > 0;
  const fuelLevel = vehicle.fuel_level || 0;
  const lastUpdate = new Date(vehicle.timestamp);

  const getFuelColor = (level: number) =>
    level > 50
      ? "text-[#456882]"
      : level > 20
      ? "text-[#748DAE]"
      : "text-[#F44336]";
  const getFuelBgColor = (level: number) =>
    level > 50
      ? "bg-green-50 border-green-200"
      : level > 20
      ? "bg-yellow-50 border-yellow-200"
      : "bg-red-50 border-red-200";
  const getSpeedColor = (speed: number) =>
    speed === 0
      ? "text-gray-500"
      : speed < 30
      ? "text-green-600"
      : speed < 60
      ? "text-yellow-600"
      : "text-red-600";

  const metrics = [
    {
      title: "Current Speed",
      value: `${vehicle.speed} km/h`,
      icon: Zap,
      color: getSpeedColor(vehicle.speed),
      bgColor: isMoving
        ? "bg-blue-50 border-blue-200"
        : "bg-gray-50 border-gray-200",
      status: isMoving ? "Moving" : "Stationary",
    },
    {
      title: "Odometer",
      value: `${vehicle.odometer?.toLocaleString()} km`,
      icon: BarChart3,
      color: "text-purple-600",
      bgColor: "bg-purple-50 border-purple-200",
      status: "Mileage",
    },
    {
      title: "Fuel Level",
      value: `${fuelLevel}%`,
      icon: Fuel,
      color: getFuelColor(fuelLevel),
      bgColor: getFuelBgColor(fuelLevel),
      status: fuelLevel > 20 ? "Good" : "Low",
    },
    {
      title: "Last Update",
      value: lastUpdate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      icon: Clock,
      color: "text-blue-600",
      bgColor: "bg-blue-50 border-blue-200",
      status: lastUpdate.toLocaleDateString(),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
            <Activity className="w-6 h-6 text-blue-600" />
            Vehicle Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 pt-2">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className={`p-4 rounded-2xl border ${metric.bgColor} hover:shadow-md transition-shadow duration-200`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <metric.icon className={`w-5 h-5 ${metric.color}`} />
                    <span className="font-medium text-gray-700 text-sm">
                      {metric.title}
                    </span>
                  </div>
                  {metric.title === "Current Speed" &&
                    (isMoving ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-gray-400" />
                    ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className={`text-2xl font-bold ${metric.color}`}>
                    {metric.value}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">
                    {metric.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default VehicleMetrics;
