import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartTab from "./CartTab";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Header />

      <main className="grid grid-cols-[260px_1fr] gap-8 w-5/6 max-w-full mx-auto p-15">

        <div className="self-start sticky top-20">
          <Navbar />
        </div>

        <div className="min-w-0">
          <Outlet />
        </div>
      </main>

      <CartTab />
    </div>
  );
};

export default Layout;
