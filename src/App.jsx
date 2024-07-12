/* eslint-disable no-unused-vars */
import {
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Sidebar from "./components/Sidebar";
import Income from "./pages/Income/Income";
import Expense from "./pages/Expense/Expense";
import Calculate from "./pages/Calculate/Calculate";
import AccountPage from "./pages/Account/Account";
import RegisterPage from "./pages/Register/RegisterPage";
import LoginPage from "./pages/Login/LoginPage";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/calculate" element={<Calculate />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
