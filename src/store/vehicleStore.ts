import { create } from "zustand";

interface Vehicle {
  id: number;
  name: string;
  status: string;
  speed: number;
  updated_at: string;
}

interface VehicleDetail {
  vehicleId: number;
  odometer: number;
  fuel_level: number;
  timestamp: string;
  latitude: number;
  longitude: number;
  speed: number;
}

interface VehicleStore {
  vehicles: Vehicle[];
  selectedVehicle: VehicleDetail | null;
  setVehicles: (data: Vehicle[]) => void;
  setSelectedVehicle: (data: VehicleDetail) => void;
}

export const useVehicleStore = create<VehicleStore>((set) => ({
  vehicles: [],
  selectedVehicle: null,
  setVehicles: (data) => set({ vehicles: data }),
  setSelectedVehicle: (data) => set({ selectedVehicle: data }),
}));
