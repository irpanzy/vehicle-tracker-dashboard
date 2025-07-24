import { CarFront, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

type VehicleDetailHeaderProps = {
  vehicle: {
    vehicleId: number;
    speed: number;
  };
};

const VehicleDetailHeader = ({ vehicle }: VehicleDetailHeaderProps) => {
  const isMoving = vehicle.speed > 0;

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
      <div className="space-y-4">
        <nav className="flex items-center space-x-2 text-sm text-[#1B3C53]">
          <Link
            to="/vehicles"
            className="hover:text-[#17465f] transition-colors font-medium flex items-center"
          >
            <ChevronLeft className="inline-block w-4 h-4 mr-1" />
            Back to Vehicles List
          </Link>
        </nav>

        <div className="space-y-2">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-full">
              <CarFront className="w-5 h-5 sm:w-6 sm:h-6 text-[#1B3C53]" />
            </div>
            <span className="text-base sm:text-xl md:text-2xl">
              Vehicle #{vehicle.vehicleId}
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-600">
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

export default VehicleDetailHeader;
