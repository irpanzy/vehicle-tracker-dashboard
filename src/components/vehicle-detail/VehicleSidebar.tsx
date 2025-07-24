import { motion } from "framer-motion";
import VehicleQuickStatus from "./VehicleQuickStatus";
import VehicleFuelBar from "./VehicleFuelBar";

type Props = {
  vehicle: {
    speed: number;
    fuel_level: number;
    timestamp: string;
  };
};

const VehicleSidebar = ({ vehicle }: Props) => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <VehicleQuickStatus vehicle={vehicle} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <VehicleFuelBar level={vehicle.fuel_level} />
      </motion.div>
    </div>
  );
};

export default VehicleSidebar;
