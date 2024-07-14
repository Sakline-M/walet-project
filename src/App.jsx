/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Sidebar from "./components/Sidebar";
import Income from "./pages/Income/Income";
import Expense from "./pages/Expense/Expense";
import Calculate from "./pages/Calculate/Calculate";
import AccountPage from "./pages/Account/Account";
import RegisterPage from "./pages/Register/RegisterPage";
import LoginPage from "./pages/Login/LoginPage";
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div >
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/income" element={<Income />} />
            <Route path="/expense" element={<Expense />} />
            <Route path="/calculate" element={<Calculate />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
