import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const fetchVehicles = () => api.get("/api/vehicles");
export const fetchVehicleDetail = (id: number) =>
  api.get(`/api/vehicles/${id}`);
