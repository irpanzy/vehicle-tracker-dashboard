import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import VehicleCard from "./VehicleCard";
import { motion } from "framer-motion";
import { Car } from "lucide-react";

type Vehicle = {
  id: number;
  name: string;
  status: string;
  speed: number;
  updated_at: string;
};

type Props = {
  loading: boolean;
  error: string;
  vehicles: Vehicle[];
  onRetry: () => void;
};

const VehicleGrid = ({ loading, error, vehicles, onRetry }: Props) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="border-0 shadow-lg">
            <CardContent className="p-6">
              <Skeleton className="h-6 w-3/4 mb-4" />
              <Skeleton className="h-4 w-1/2 mb-2" />
              <Skeleton className="h-4 w-2/3 mb-4" />
              <Skeleton className="h-10 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <div className="text-red-500 text-lg mb-4">{error}</div>
        <Button onClick={onRetry} variant="outline">
          Try Again
        </Button>
      </motion.div>
    );
  }

  if (vehicles.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12"
      >
        <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500 text-lg">No vehicles found</p>
        <p className="text-gray-400">
          Try adjusting your search or filter criteria
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {vehicles.map((vehicle, index) => (
        <motion.div
          key={vehicle.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
        >
          <VehicleCard
            {...vehicle}
            status={vehicle.status as "ACTIVE" | "INACTIVE"}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default VehicleGrid;
