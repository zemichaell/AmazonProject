import React from "react";

import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

function SharedLayout() {
  return (
    <div>
      <Header />
      <Navbar />

      <Outlet />
    </div>
  );
}

export default SharedLayout;
