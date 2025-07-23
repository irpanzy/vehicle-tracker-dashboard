import axios from "axios";

const api = axios.create({
  baseURL: "https://vehicle-tracker-one-alpha.vercel.app",
});

export const fetchVehicles = () => api.get("/api/vehicles");
export const fetchVehicleDetail = (id: number) => api.get(`/api/vehicles/${id}`);
