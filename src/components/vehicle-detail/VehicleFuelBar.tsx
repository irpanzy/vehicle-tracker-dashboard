import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Fuel } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  level: number;
};

const VehicleFuelBar = ({ level }: Props) => {
  const getText = () => {
    if (level > 50) {
      return "Good Level";
    }
    if (level > 20) {
      return "Moderate";
    }
    return "Refuel Soon";
  };

  const getTextColor = () => {
    if (level > 50) {
      return "text-[#1B3C53]";
    }
    if (level > 20) {
      return "text-[#2F5249]";
    }
    return "text-[#722323]";
  };

  const getBarColor = () => {
    if (level > 50) {
      return "bg-[#1B3C53]";
    }
    if (level > 20) {
      return "bg-[#2F5249]";
    }
    return "bg-[#722323]";
  };

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Fuel className="w-5 h-5 text-blue-600" />
          Fuel Level
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative">
            <div className="w-full bg-gray-200 rounded-full h-6">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${level}%` }}
                transition={{ delay: 0.5, duration: 1 }}
                className={`h-6 rounded-full ${getBarColor()}`}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold text-white mix-blend-difference">
                {level}%
              </span>
            </div>
          </div>
          <div className="text-center">
            <p className={`text-lg font-bold ${getTextColor()}`}>{getText()}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleFuelBar;
