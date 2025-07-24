import { Car, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type VehicleHeaderProps = {
  vehicle: {
    vehicleId: number;
    speed: number;
  };
};

const VehicleHeader = ({ vehicle }: VehicleHeaderProps) => {
  const isMoving = vehicle.speed > 0;

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <Link to="/">
          <Button variant="outline" size="sm" className="w-fit">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Car className="w-6 h-6 text-blue-600" />
            <span>Vehicle #{vehicle.vehicleId}</span>
          </h1>
          <p className="text-sm text-gray-600">
            Detailed vehicle information and status
          </p>
        </div>
      </div>

      <div className="flex justify-start md:justify-end">
        <Badge
          variant="outline"
          className={`px-3 py-2 font-semibold w-fit ${
            isMoving
              ? "bg-green-50 text-green-700 border-green-200"
              : "bg-gray-50 text-gray-700 border-gray-200"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full mr-2 ${
              isMoving ? "bg-green-500 animate-pulse" : "bg-gray-400"
            }`}
          />
          {isMoving ? "ACTIVE" : "INACTIVE"}
        </Badge>
      </div>
    </div>
  );
};

export default VehicleHeader;
