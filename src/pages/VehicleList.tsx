import { useCallback, useEffect, useState } from "react";
import { useVehicleStore } from "@/store/vehicleStore";
import { fetchVehicles } from "@/api/vehicleApi";
import { Skeleton } from "@/components/ui/skeleton";
import VehicleCard from "@/components/VehicleCard";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Search,
  ArrowLeft,
  ArrowRight,
  Car,
  Activity,
  Users,
  Filter,
  TrendingDown,
} from "lucide-react";

export default function VehicleList() {
  const { vehicles, setVehicles } = useVehicleStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<
    "ALL" | "ACTIVE" | "INACTIVE"
  >("ALL");
  const itemsPerPage = 6;

  const loadVehicles = useCallback(async () => {
    try {
      const res = await fetchVehicles();
      setVehicles(res.data);
      setError("");
    } catch {
      setError("Gagal memuat data kendaraan");
    } finally {
      setLoading(false);
    }
  }, [setVehicles]);

  useEffect(() => {
    loadVehicles();
  }, [loadVehicles]);

  const filteredVehicles = vehicles.filter((v) => {
    const matchesQuery = v.name.toLowerCase().includes(query.toLowerCase());
    const matchesStatus = statusFilter === "ALL" || v.status === statusFilter;
    return matchesQuery && matchesStatus;
  });

  const paginated = filteredVehicles.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const maxPage = Math.ceil(filteredVehicles.length / itemsPerPage);

  const activeVehicles = vehicles.filter((v) => v.status === "ACTIVE").length;
  const inactiveVehicles = vehicles.filter(
    (v) => v.status === "INACTIVE"
  ).length;
  const avgSpeed =
    vehicles.length > 0
      ? Math.round(
          vehicles.reduce((sum, v) => sum + v.speed, 0) / vehicles.length
        )
      : 0;

  const stats = [
    {
      title: "Total Vehicles",
      value: vehicles.length,
      icon: Car,
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      title: "Active Vehicles",
      value: activeVehicles,
      icon: Activity,
      color: "bg-green-500",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      title: "Inactive Vehicles",
      value: inactiveVehicles,
      icon: TrendingDown,
      color: "bg-red-500",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
    },
    {
      title: "Avg Speed",
      value: `${avgSpeed} km/h`,
      icon: Users,
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Vehicle Fleet Dashboard
          </h1>
          <p className="text-gray-600">
            Monitor and manage your vehicle fleet in real-time
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full ${stat.bgColor}`}>
                      <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
        >
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search vehicles..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
                className="pl-10 w-64 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <div className="flex gap-2">
                {["ALL", "ACTIVE", "INACTIVE"].map((status) => (
                  <Badge
                    key={status}
                    variant={statusFilter === status ? "default" : "outline"}
                    className={`cursor-pointer transition-all ${
                      statusFilter === status
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      setStatusFilter(status as typeof statusFilter);
                      setPage(1);
                    }}
                  >
                    {status}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        {loading ? (
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
        ) : error ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-red-500 text-lg mb-4">{error}</div>
            <Button onClick={loadVehicles} variant="outline">
              Try Again
            </Button>
          </motion.div>
        ) : filteredVehicles.length === 0 ? (
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
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {paginated.map((vehicle, index) => (
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
            {maxPage > 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-6"
              >
                <Button
                  variant="outline"
                  onClick={() => setPage((p) => Math.max(p - 1, 1))}
                  disabled={page === 1}
                  className="border-gray-200 text-white hover:text-gray-300 hover:bg-gray-50"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Previous</span>
                </Button>
                <div className="hidden sm:flex items-center gap-2">
                  {Array.from({ length: Math.min(5, maxPage) }, (_, i) => {
                    const pageNum = i + 1;
                    const isActive = page === pageNum;
                    return (
                      <Button
                        key={pageNum}
                        size="sm"
                        disabled={isActive}
                        onClick={() => setPage(pageNum)}
                        className={
                          isActive
                            ? "bg-blue-600 text-white cursor-default"
                            : "border border-gray-200 text-white hover:text-gray-300 hover:bg-gray-50"
                        }
                      >
                        {pageNum}
                      </Button>
                    );
                  })}
                  {maxPage > 5 && (
                    <>
                      <span className="text-gray-400">...</span>
                      <Button
                        size="sm"
                        disabled={page === maxPage}
                        onClick={() => setPage(maxPage)}
                        className={
                          page === maxPage
                            ? "bg-blue-600 text-white cursor-default"
                            : "border border-gray-200 text-white hover:text-gray-300 hover:bg-gray-50"
                        }
                      >
                        {maxPage}
                      </Button>
                    </>
                  )}
                </div>
                <Button
                  variant="outline"
                  onClick={() => setPage((p) => Math.min(p + 1, maxPage))}
                  disabled={page === maxPage}
                  className="border-gray-200 text-white hover:text-gray-300 hover:bg-gray-50"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </DashboardLayout>
  );
}
