import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, Clock, Zap, AlertTriangle, CheckCircle2 } from "lucide-react";

type Props = {
  id: number;
  name: string;
  status: "ACTIVE" | "INACTIVE";
  speed: number;
  updated_at: string;
};

const VehicleCard = ({ id, name, status, speed, updated_at }: Props) => {
  const isActive = status === "ACTIVE";
  const isMoving = speed > 0;
  const lastUpdated = new Date(updated_at);
  const timeDiff = Date.now() - lastUpdated.getTime();
  const hoursAgo = Math.floor(timeDiff / (1000 * 60 * 60));
  const minutesAgo = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

  const getSpeedColor = (speed: number) => {
    if (speed === 0) {
      return "text-gray-500";
    }
    if (speed < 30) {
      return "text-green-600";
    }
    if (speed < 60) {
      return "text-yellow-600";
    }
    return "text-red-600";
  };

  const getSpeedIcon = (speed: number) => {
    if (speed === 0) return <AlertTriangle className="w-4 h-4 text-gray-500" />;
    return <Zap className="w-4 h-4 text-blue-600" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Card
        className={cn(
          "relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300",
          "bg-gradient-to-br from-white to-gray-50",
          isActive ? "ring-2 ring-green-200" : "ring-2 ring-gray-200"
        )}
      >
        <div
          className={cn(
            "absolute top-0 left-0 right-0 h-1",
            isActive
              ? "bg-gradient-to-r from-green-400 to-emerald-500"
              : "bg-gradient-to-r from-gray-300 to-gray-400"
          )}
        />
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                {name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">Vehicle ID: #{id}</p>
            </div>
            <Badge
              variant="outline"
              className={cn(
                "font-semibold tracking-wide border-2",
                isActive
                  ? "bg-green-50 text-green-700 border-green-200"
                  : "bg-red-50 text-red-700 border-red-200"
              )}
            >
              <div
                className={cn(
                  "w-2 h-2 rounded-full mr-2",
                  isActive ? "bg-green-500 animate-pulse" : "bg-red-500"
                )}
              />
              {status}
            </Badge>
          </div>
          <div className="grid grid-cols-1 gap-3 mb-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
              <div className="flex items-center gap-3">
                {getSpeedIcon(speed)}
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Current Speed
                  </p>
                  <p className={cn("text-lg font-bold", getSpeedColor(speed))}>
                    {speed} km/h
                  </p>
                </div>
              </div>
              <div className="text-right">
                {isMoving ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
              <Clock className="w-4 h-4 text-blue-600" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-700">Last Update</p>
                <p className="text-sm text-gray-600">
                  {hoursAgo > 0
                    ? `${hoursAgo}h ${minutesAgo}m ago`
                    : `${minutesAgo}m ago`}
                </p>
              </div>
              <div className="text-xs text-blue-600 font-medium">
                {lastUpdated.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          </div>
          <Link to={`/vehicles/${id}`} className="block">
            <Button
              className={cn(
                "w-full group relative overflow-hidden",
                "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800",
                "text-white font-semibold shadow-lg hover:shadow-xl",
                "transform transition-all duration-200 hover:scale-[1.02]"
              )}
            >
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                initial={false}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 0.3 }}
              />
              <Eye className="w-4 h-4 mr-2" />
              View Details
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default VehicleCard;
