import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Eye } from "lucide-react";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center bg-white py-10"
    >
      <div className="max-w-4xl mx-auto space-y-10 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-blue-50 text-[#1B3C53] px-4 py-2 rounded-full text-[10px] sm:text-sm font-medium"
        >
          <Zap className="w-4 h-4" />
          Advanced Vehicle Tracking System
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-balance text-[#1B3C53]"
        >
          Monitor Your Vehicles
          <br />
          <span className="inline-block bg-gradient-to-r from-[#1B3C53] to-[#3674B5] bg-clip-text text-transparent">
            In Real-Time
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-balance"
        >
          Take control of your vehicle list with our comprehensive tracking
          solution. Monitor locations, manage fuel consumption, and ensure
          optimal performance across all your vehicles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
        >
          <Link to="/vehicles" className="w-fit">
            <Button className="bg-[#1B3C53] hover:bg-[#17465f] text-white text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200 ease-in-out flex items-center gap-2 w-fit">
              <Eye className="w-5 h-5" />
              View Vehicle List
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
