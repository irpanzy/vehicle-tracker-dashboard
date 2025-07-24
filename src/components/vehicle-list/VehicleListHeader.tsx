import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const VehicleListHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <nav className="flex items-center space-x-2 text-sm text-[#1B3C53]">
        <Link
          to="/"
          className="hover:text-[#17465f] transition-colors font-medium flex items-center"
        >
          <ChevronLeft className="inline-block w-4 h-4 mr-1" />
          Back to Home
        </Link>
      </nav>

      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
          Vehicle List Dashboard
        </h2>
        <p className="text-gray-600">
          Monitor and manage your vehicle list in real-time
        </p>
      </div>
    </motion.div>
  );
};

export default VehicleListHeader;
