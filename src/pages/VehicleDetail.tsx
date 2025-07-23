import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchVehicleDetail } from "@/api/vehicleApi";
import { useVehicleStore } from "@/store/vehicleStore";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  MapPin,
  Gauge,
  Fuel,
  Activity,
  Car,
  ArrowLeft,
  AlertTriangle,
  Clock,
} from "lucide-react";

const VehicleDetail = () => {
  const { id } = useParams();
  const { selectedVehicle, setSelectedVehicle } = useVehicleStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      return;
    }
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

  const getFuelColor = (level: number) => {
    if (level > 50) {
      return "text-green-600";
    }
    if (level > 25) {
      return "text-yellow-600";
    }
    return "text-red-600";
  };

  const getFuelBgColor = (level: number) => {
    if (level > 50) {
      return "bg-green-50";
    }
    if (level > 25) {
      return "bg-yellow-50";
    }
    return "bg-red-50";
  };

  const getSpeedColor = (speed: number) => {
    if (speed > 80) {
      return "text-red-600";
    }
    if (speed > 40) {
      return "text-yellow-600";
    }
    return "text-green-600";
  };

  const formatDateTime = (timestamp: string | number | Date | undefined) => {
    if (!timestamp) {
      return "Tidak tersedia";
    }
    return new Date(timestamp).toLocaleString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Jakarta",
    });
  };

  const formatCoordinates = (
    lat: string | number | undefined,
    lng: string | number | undefined
  ) => {
    if (!lat || !lng) {
      return "Lokasi tidak tersedia";
    }
    return `${parseFloat(lat as string).toFixed(6)}, ${parseFloat(
      lng as string
    ).toFixed(6)}`;
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link to="/">
            <Button
              variant="outline"
              size="sm"
              className="text-white border-[#3E497A] hover:bg-[#3E497A] hover:text-gray-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-[#3E497A] flex items-center gap-2">
            <Car className="w-6 h-6" />
            Detail Kendaraan
          </h1>
        </div>
      </div>
      {loading ? (
        <div className="space-y-6">
          <Card className="p-6 bg-white shadow-md">
            <div className="flex justify-between items-center mb-6">
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-5 w-24 rounded-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      ) : error ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Error</h2>
          <p className="text-red-500 mb-6">{error}</p>
          <Link to="/">
            <Button
              variant="outline"
              className="text-[#3E497A] border-[#3E497A]"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Dashboard
            </Button>
          </Link>
        </motion.div>
      ) : selectedVehicle ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          <Card className="bg-white shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold text-[#3E497A]">
                  Vehicle #{selectedVehicle.vehicleId}
                </CardTitle>
                <Badge
                  variant="outline"
                  className={
                    selectedVehicle.speed > 0
                      ? "bg-green-100 text-green-700 border-green-300"
                      : "bg-gray-100 text-gray-700 border-gray-300"
                  }
                >
                  {selectedVehicle.speed > 0 ? "SEDANG BERGERAK" : "DIAM"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50">
                  <Activity
                    className={`w-6 h-6 ${getSpeedColor(
                      selectedVehicle.speed || 0
                    )}`}
                  />
                  <div>
                    <p className="text-sm text-gray-600 font-medium">
                      Kecepatan
                    </p>
                    <p className="text-lg font-bold text-[#3E497A]">
                      {selectedVehicle.speed ?? 0} km/h
                    </p>
                  </div>
                </div>
                <div
                  className={`flex items-center gap-3 p-3 rounded-lg ${getFuelBgColor(
                    selectedVehicle.fuel_level || 0
                  )}`}
                >
                  <Fuel
                    className={`w-6 h-6 ${getFuelColor(
                      selectedVehicle.fuel_level || 0
                    )}`}
                  />
                  <div>
                    <p className="text-sm text-gray-600 font-medium">
                      Level Bahan Bakar
                    </p>
                    <p className="text-lg font-bold text-[#3E497A]">
                      {selectedVehicle.fuel_level ?? "N/A"}%
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50">
                  <Gauge className="w-6 h-6 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-600 font-medium">
                      Odometer
                    </p>
                    <p className="text-lg font-bold text-[#3E497A]">
                      {selectedVehicle.odometer?.toLocaleString("id-ID") ??
                        "N/A"}{" "}
                      km
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex flex-col sm:flex-row items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 font-medium mb-1">
                      Lokasi Terakhir
                    </p>
                    <p className="text-[#3E497A] font-mono text-sm break-all">
                      {formatCoordinates(
                        selectedVehicle.latitude,
                        selectedVehicle.longitude
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <Clock className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600 font-medium">
                      Pembaruan Terakhir
                    </p>
                    <p className="text-[#3E497A] font-medium break-words">
                      {formatDateTime(selectedVehicle.timestamp)}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-lg text-[#3E497A]">
                  Statistik Cepat
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Status Engine</span>
                  <span className="font-semibold text-[#3E497A]">
                    {selectedVehicle.speed > 0 ? "Hidup" : "Mati"}
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-lg text-[#3E497A] flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Peringatan
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedVehicle.fuel_level &&
                selectedVehicle.fuel_level < 25 ? (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-800 font-medium">
                      Bahan Bakar Rendah!
                    </p>
                    <p className="text-xs text-red-600">
                      Level bahan bakar di bawah 25%
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">
                    Tidak ada peringatan aktif
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">Data tidak ditemukan.</p>
        </motion.div>
      )}
    </DashboardLayout>
  );
};

export default VehicleDetail;
