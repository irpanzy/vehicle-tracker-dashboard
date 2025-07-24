import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, MapPinned } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  vehicle: {
    latitude: number;
    longitude: number;
  };
};

const VehicleLocation = ({ vehicle }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <MapPinned className="w-6 h-6 text-green-600" />
            Location Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-800">
                  Current Position
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Latitude:</span>
                  <span className="ml-2 font-mono font-medium text-gray-900">
                    {vehicle.latitude}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Longitude:</span>
                  <span className="ml-2 font-mono font-medium text-gray-900">
                    {vehicle.longitude}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default VehicleLocation;
