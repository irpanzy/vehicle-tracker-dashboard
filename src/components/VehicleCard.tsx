import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, GaugeCircle } from "lucide-react";

type Props = {
  id: number;
  name: string;
  status: "ACTIVE" | "INACTIVE";
  speed: number;
  updated_at: string;
};

const VehicleCard = ({ id, name, status, speed, updated_at }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-4 rounded-lg border border-gray-200 bg-white hover:shadow-md transition">
        {/* Header: Name & Status */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-[#3E497A]">{name}</h2>
          <Badge
            variant="outline"
            className={cn(
              "uppercase px-2 py-1 text-xs font-bold tracking-wide",
              status === "ACTIVE"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            )}
          >
            {status}
          </Badge>
        </div>

        {/* Info */}
        <div className="flex items-center gap-2 text-sm text-[#3E497A] mb-1">
          <GaugeCircle className="w-4 h-4" />
          <span>Speed: {speed} km/h</span>
        </div>
        <p className="text-xs text-muted-foreground mb-3">
          Updated: {new Date(updated_at).toLocaleString()}
        </p>

        {/* Action */}
        <div className="text-right">
          <Link to={`/vehicles/${id}`}>
            <Button
              size="sm"
              className="bg-[#3E497A] text-white hover:bg-[#2f3a65] transition"
            >
              <Eye className="w-4 h-4 mr-1" />
              Lihat Detail
            </Button>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
};

export default VehicleCard;
