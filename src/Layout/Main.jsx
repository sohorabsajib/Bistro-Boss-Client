import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/Footer/NavBar/NavBar";

function Main() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />

    </div>
  );
}

export default Main;
