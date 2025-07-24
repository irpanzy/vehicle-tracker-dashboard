import { useCallback, useEffect, useState } from "react";
import { useVehicleStore } from "@/store/vehicleStore";
import { fetchVehicles } from "@/api/vehicleApi";
import DashboardLayout from "@/components/layout/DashboardLayout";
import VehicleListHeader from "@/components/vehicle-list/VehicleListHeader";
import VehicleStats from "@/components/vehicle-list/VehicleStats";
import VehicleFilters from "@/components/vehicle-list/VehicleFilters";
import VehicleGrid from "@/components/vehicle-list/VehicleGrid";
import VehiclePagination from "@/components/vehicle-list/VehiclePagination";
import VehicleListSkeleton from "@/components/vehicle-list/VehicleListSkeleton";

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
      setError("Failed to load vehicle data");
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

  const paginatedVehicles = filteredVehicles.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const maxPage = Math.ceil(filteredVehicles.length / itemsPerPage);

  if (loading) {
    return (
      <DashboardLayout>
        <VehicleListSkeleton />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <VehicleListHeader />
        <VehicleStats vehicles={vehicles} />
        <VehicleFilters
          query={query}
          setQuery={setQuery}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          setPage={setPage}
        />
        <VehicleGrid
          loading={false}
          error={error}
          vehicles={paginatedVehicles}
          onRetry={loadVehicles}
        />
        <VehiclePagination page={page} maxPage={maxPage} setPage={setPage} />
      </div>
    </DashboardLayout>
  );
}
