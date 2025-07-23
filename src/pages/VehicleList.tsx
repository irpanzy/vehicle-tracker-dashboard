import { useEffect, useState } from "react";
import { useVehicleStore } from "@/store/vehicleStore";
import { fetchVehicles } from "@/api/vehicleApi";
import { Skeleton } from "@/components/ui/skeleton";
import VehicleCard from "@/components/VehicleCard";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ArrowLeft, ArrowRight, CarFront } from "lucide-react";

export default function VehicleList() {
  const { vehicles, setVehicles } = useVehicleStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    fetchVehicles()
      .then((res) => setVehicles(res.data))
      .catch(() => setError("Gagal memuat data kendaraan"))
      .finally(() => setLoading(false));
  }, [setVehicles]);

  const filteredVehicles = vehicles.filter((v) =>
    v.name.toLowerCase().includes(query.toLowerCase())
  );

  const paginated = filteredVehicles.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const maxPage = Math.ceil(filteredVehicles.length / itemsPerPage);

  return (
    <DashboardLayout>
      <div className="w-full space-y-6">
        {/* Title */}
        <div className="flex items-center gap-2 text-[#3E497A]">
          <CarFront className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Daftar Kendaraan</h1>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Cari kendaraan..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            className="pl-9"
          />
        </div>

        {/* List */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="border p-4 rounded-lg bg-white shadow">
                <Skeleton className="h-5 w-1/2 mb-2" />
                <Skeleton className="h-4 w-1/3 mb-1" />
                <Skeleton className="h-4 w-1/4 mb-1" />
                <Skeleton className="h-4 w-1/3" />
              </div>
            ))}
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : filteredVehicles.length === 0 ? (
          <p className="text-muted-foreground">
            Tidak ada kendaraan ditemukan.
          </p>
        ) : (
          <>
            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {paginated.map((vehicle) => (
                <VehicleCard
                  key={vehicle.id}
                  {...vehicle}
                  status={vehicle.status as "ACTIVE" | "INACTIVE"}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                className="bg-[#3E497A] text-white hover:bg-[#2f3a65]"
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Prev
              </Button>

              <p className="text-sm text-[#3E497A] font-medium">
                Halaman {page} dari {maxPage}
              </p>

              <Button
                className="bg-[#3E497A] text-white hover:bg-[#2f3a65]"
                onClick={() => setPage((p) => Math.min(p + 1, maxPage))}
                disabled={page === maxPage}
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}
