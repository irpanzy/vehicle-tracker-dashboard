import { AlertTriangle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type Props = {
  message: string;
};

const VehicleErrorState = ({ message }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-12"
    >
      <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Error</h2>
      <p className="text-red-500 mb-6">{message}</p>
      <Link to="/vehicles">
        <Button variant="outline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>
      </Link>
    </motion.div>
  );
};

export default VehicleErrorState;
