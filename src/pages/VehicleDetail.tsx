import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchVehicleDetail } from "@/api/vehicleApi";
import { useVehicleStore } from "@/store/vehicleStore";
import DashboardLayout from "@/components/layout/DashboardLayout";
import VehicleHeader from "@/components/vehicle-detail/VehicleHeader";
import VehicleMetrics from "@/components/vehicle-detail/VehicleMetrics";
import VehicleLocation from "@/components/vehicle-detail/VehicleLocation";
import VehicleSidebar from "@/components/vehicle-detail/VehicleSidebar";
import VehicleSkeleton from "@/components/vehicle-detail/VehicleSkeleton";
import VehicleErrorState from "@/components/vehicle-detail/VehicleErrorState";
import VehicleNotFound from "@/components/vehicle-detail/VehicleNotFound";

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
          setError("Vehicle data not found");
        } else {
          setSelectedVehicle(data);
        }
      })
      .catch(() => setError("Failed to load vehicle details"))
      .finally(() => setLoading(false));
  }, [id, setSelectedVehicle]);

  if (loading)
    return (
      <DashboardLayout>
        <VehicleSkeleton />
      </DashboardLayout>
    );
  if (error)
    return (
      <DashboardLayout>
        <VehicleErrorState message={error} />
      </DashboardLayout>
    );
  if (!selectedVehicle)
    return (
      <DashboardLayout>
        <VehicleNotFound />
      </DashboardLayout>
    );

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <VehicleHeader vehicle={selectedVehicle} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <VehicleMetrics vehicle={selectedVehicle} />
            <VehicleLocation vehicle={selectedVehicle} />
          </div>
          <VehicleSidebar vehicle={selectedVehicle} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VehicleDetail;
