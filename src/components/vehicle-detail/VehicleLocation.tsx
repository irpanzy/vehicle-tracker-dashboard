import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, MapPinned, Navigation } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  vehicle: {
    latitude: number;
    longitude: number;
  };
};

const VehicleLocation = ({ vehicle }: Props) => {
  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps?q=${vehicle.latitude},${vehicle.longitude}`;
    window.open(url, "_blank");
  };

  const getDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${vehicle.latitude},${vehicle.longitude}`;
    window.open(url, "_blank");
  };
  
  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

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
            Detail Lokasi
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-800">
                  Posisi Sekarang
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
            <div className="relative">
              <div className="h-64 w-full rounded-lg overflow-hidden border-2 border-gray-200 bg-gray-100">
                <iframe
                  src={`https://www.google.com/maps?q=${vehicle.latitude},${vehicle.longitude}&z=15&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Kendaraan"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <motion.button
                onClick={openInGoogleMaps}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200"
              >
                <MapPin className="w-4 h-4" />
                Lihat di Maps
              </motion.button>
              <motion.button
                onClick={getDirections}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Navigation className="w-4 h-4" />
                Petunjuk Arah
              </motion.button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default VehicleLocation;
