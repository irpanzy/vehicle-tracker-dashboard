import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CarFront, Gauge, ShieldAlert, ShieldCheck } from "lucide-react";

type Vehicle = {
  id: number;
  name: string;
  status: string;
  speed: number;
  updated_at: string;
};

type Props = {
  vehicles: Vehicle[];
};

const VehicleStats = ({ vehicles }: Props) => {
  const activeVehicles = vehicles.filter((v) => v.status === "ACTIVE").length;
  const inactiveVehicles = vehicles.filter(
    (v) => v.status === "INACTIVE"
  ).length;
  const avgSpeed =
    vehicles.length > 0
      ? Math.round(
          vehicles.reduce((sum, v) => sum + v.speed, 0) / vehicles.length
        )
      : 0;

  const stats = [
    {
      title: "Total Vehicles",
      value: vehicles.length,
      icon: CarFront,
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-[#1B3C53]",
    },
    {
      title: "Active Vehicles",
      value: activeVehicles,
      icon: ShieldCheck,
      color: "bg-green-500",
      bgColor: "bg-green-50",
      textColor: "text-[#437057]",
    },
    {
      title: "Inactive Vehicles",
      value: inactiveVehicles,
      icon: ShieldAlert,
      color: "bg-red-500",
      bgColor: "bg-red-50",
      textColor: "text-[#722323]",
    },
    {
      title: "Avg Speed",
      value: `${avgSpeed} km/h`,
      icon: Gauge,
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      textColor: "text-[#BA487F]",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 * index }}
        >
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default VehicleStats;
