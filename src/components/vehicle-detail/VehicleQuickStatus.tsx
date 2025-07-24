import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Props = {
  vehicle: {
    speed: number;
    fuel_level: number;
    timestamp: string;
  };
};

const VehicleQuickStatus = ({ vehicle }: Props) => {
  const isMoving = vehicle.speed > 0;
  const fuelLevel = vehicle.fuel_level;
  const lastUpdate = new Date(vehicle.timestamp);

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg">Quick Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Engine Status</span>
          <Badge variant={isMoving ? "default" : "secondary"}>
            {isMoving ? "Running" : "Off"}
          </Badge>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">Fuel Status</span>
          <Badge
            variant="outline"
            className={
              fuelLevel > 50
                ? "text-green-700 border-green-200"
                : fuelLevel > 20
                ? "text-yellow-700 border-yellow-200"
                : "text-red-700 border-red-200"
            }
          >
            {fuelLevel > 20 ? "Good" : "Low"}
          </Badge>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600">Connection</span>
          <Badge variant="default" className="bg-green-600">
            Online
          </Badge>
        </div>

        <div className="pt-4 border-t">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Last Updated</p>
            <p className="font-semibold text-gray-900">
              {lastUpdate.toLocaleString()}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleQuickStatus;
