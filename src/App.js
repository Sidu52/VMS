import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Devices from "./pages/Devices";

export default function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/devices" element={<Devices />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
