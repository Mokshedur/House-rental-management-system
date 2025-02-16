import "./App.css";
import PublicHeader from "./components/headers/publicHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AgentAuthPage from "./pages/auth/AgentAuthPage";
import BuyerAuthPage from "./pages/auth/BuyerAuthpage";
import SellerAuthPage from "./pages/auth/SellerAuthPage";
import LogoutPage from "./pages/auth/LogoutPage";
import BuyerDashPage from "./pages/dashboards/BuyerDashPage";
import AgentHouseListPage from "./pages/houseList/AgentHouseListPage";
import AgentHouseDetailsPage from "./pages/houseDetails/AgentHouseDetailsPage";
import AddHousePage from "./pages/AddHousePage";
import VerifyAccountPage from "./pages/auth/VerifyAccountPage";
import SearchHousePage from "./pages/SearchHousePage";
import HouseDetailsPage from "./pages/HouseDetailsPage";
import SellerHouseDetailsPage from "./pages/houseDetails/SellerHouseDetailsPage";
import SellerHouseListPage from "./pages/houseList/SellerHouseListPage";
import HouseRentPage from "./pages/HouseRentPage";
import Transactions from "./pages/Transactions";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminAuthPage from "./pages/admin/Auth";
import UserList from "./pages/admin/UserList";
import HouseList from "./pages/admin/HouseList";

function App() {
  return (
    <div>
      <Router>
        <div className="max-w-[1140px] mx-auto">
          {/* Header */}
          <PublicHeader />
        </div>
        <main className="max-w-[1140px] mx-auto my-14">
          {/* App routing */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/user-list" element={<UserList />} />
            <Route path="/admin/house-list" element={<HouseList />} />
            <Route path="/auth/agent" element={<AgentAuthPage />} />
            <Route path="/auth/admin" element={<AdminAuthPage />} />
            <Route path="/auth/buyer" element={<BuyerAuthPage />} />
            <Route path="/auth/seller" element={<SellerAuthPage />} />
            <Route
              path="/auth/verify-account/:token"
              element={<VerifyAccountPage />}
            />
            <Route path="/_/agent" element={<AgentHouseListPage />} />
            <Route path="/th" element={<Transactions />} />
            <Route path="/_/agent/add-house" element={<AddHousePage />} />
            <Route path="/_/seller/add-house" element={<AddHousePage />} />
            <Route path="/search-house" element={<SearchHousePage />} />
            <Route path="/houses/:houseId" element={<HouseDetailsPage />} />
            <Route path="/houses/:houseId/rent" element={<HouseRentPage />} />
            <Route
              path="/_/agent/house-list"
              element={<AgentHouseListPage />}
            />
            <Route
              path="/_/agent/house-list/:houseId"
              element={<AgentHouseDetailsPage />}
            />
            <Route
              path="/_/seller/house-list/:houseId"
              element={<SellerHouseDetailsPage />}
            />
            <Route path="/_/buyer" element={<BuyerDashPage />} />
            <Route path="/_/seller" element={<SellerHouseListPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
