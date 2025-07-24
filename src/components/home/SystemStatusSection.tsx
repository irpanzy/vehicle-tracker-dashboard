import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const SystemStatusSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1 }}
      className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100"
    >
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            System Status
          </h2>
          <p className="text-gray-600">
            All systems operational and ready to serve your vehicle tracking needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-2xl shadow-sm">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
            <div className="text-left">
              <p className="font-semibold text-gray-900">GPS Service</p>
              <p className="text-sm text-green-600">Online</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-2xl shadow-sm">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
            <div className="text-left">
              <p className="font-semibold text-gray-900">Data Sync</p>
              <p className="text-sm text-green-600">Active</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-4 bg-white rounded-2xl shadow-sm">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
            <div className="text-left">
              <p className="font-semibold text-gray-900">API Status</p>
              <p className="text-sm text-green-600">Healthy</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SystemStatusSection;
