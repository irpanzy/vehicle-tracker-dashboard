import VehicleList from "./pages/VehicleList";
import VehicleDetail from "./pages/VehicleDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<VehicleList />} />
      <Route path="/vehicles/:id" element={<VehicleDetail />} />
    </Routes>
  );
}

export default App;
