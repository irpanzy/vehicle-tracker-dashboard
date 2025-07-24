import VehicleList from "./pages/VehicleList";
import VehicleDetail from "./pages/VehicleDetail";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vehicles" element={<VehicleList />} />
      <Route path="/vehicles/:id" element={<VehicleDetail />} />
    </Routes>
  );
}

export default App;
