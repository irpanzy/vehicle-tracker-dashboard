import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchVehicleDetail } from "@/api/vehicleApi";
import { useVehicleStore } from "@/store/vehicleStore";
import { Skeleton } from "@/components/ui/skeleton";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { MapPin, Gauge, Fuel, TimerReset, Activity, Car } from "lucide-react";

const VehicleDetail = () => {
  const { id } = useParams();
  const { selectedVehicle, setSelectedVehicle } = useVehicleStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    fetchVehicleDetail(Number(id))
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data[0] : res.data;
        if (!data) {
          setError("Data kendaraan tidak ditemukan");
        } else {
          setSelectedVehicle(data);
        }
      })
      .catch(() => setError("Gagal memuat detail kendaraan"))
      .finally(() => setLoading(false));
  }, [id, setSelectedVehicle]);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4 text-[#3E497A] flex items-center gap-2">
        <Car className="w-6 h-6" /> Detail Kendaraan
      </h1>

      {loading ? (
        <div className="p-6 bg-white rounded-lg shadow-md space-y-6 animate-pulse">
          {/* Header */}
          <div className="flex justify-between items-center">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-5 w-24 rounded-full" />
          </div>

          {/* Detail Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
            <div className="flex items-center gap-3">
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
            <div className="flex items-center gap-3">
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
            <div className="flex items-center gap-3">
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
            <div className="flex items-center gap-3 col-span-2">
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        </div>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : selectedVehicle ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="p-6 space-y-4 bg-white shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[#3E497A]">
                Vehicle #{selectedVehicle.vehicleId}
              </h2>
              <Badge
                variant="outline"
                className={
                  selectedVehicle.speed > 0
                    ? "bg-green-100 text-green-700 uppercase"
                    : "bg-gray-100 text-gray-700 uppercase"
                }
              >
                {selectedVehicle.speed > 0 ? "Sedang Bergerak" : "Diam"}
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#3E497A]">
              <div className="flex items-center gap-3">
                <Gauge className="w-5 h-5" />
                <span>
                  <strong>Odometer:</strong>{" "}
                  {selectedVehicle.odometer?.toLocaleString() ?? "N/A"} km
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Fuel className="w-5 h-5" />
                <span>
                  <strong>Fuel Level:</strong>{" "}
                  {selectedVehicle.fuel_level ?? "N/A"}%
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5" />
                <span>
                  <strong>Speed:</strong> {selectedVehicle.speed ?? 0} km/h
                </span>
              </div>

              <div className="flex items-center gap-3">
                <TimerReset className="w-5 h-5" />
                <span>
                  <strong>Timestamp:</strong>{" "}
                  {selectedVehicle.timestamp
                    ? new Date(selectedVehicle.timestamp).toLocaleString()
                    : "Tidak tersedia"}
                </span>
              </div>

              <div className="flex items-center gap-3 col-span-2">
                <MapPin className="w-5 h-5" />
                <span>
                  <strong>Location:</strong> {selectedVehicle.latitude},{" "}
                  {selectedVehicle.longitude}
                </span>
              </div>
            </div>
          </Card>
        </motion.div>
      ) : (
        <p>Data tidak ditemukan.</p>
      )}
    </DashboardLayout>
  );
};

export default VehicleDetail;
