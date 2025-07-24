import { Car } from "lucide-react";
import { motion } from "framer-motion";

const VehicleNotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-12"
    >
      <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
      <p className="text-gray-500 text-lg">Vehicle data not found</p>
    </motion.div>
  );
};

export default VehicleNotFound;
