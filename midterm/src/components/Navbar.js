import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const items = [
    { label: "Seasonal Fresh", to: "/" },
    { label: "Fresh Fruits", to: "/fruits" },
    { label: "Fresh Vegetables", to: "/vegetables" },
    { label: "Meat & Seafood", to: "/meat-seafood" },
    { label: "Dairy, Cheese & Eggs", to: "/dairy" },
    { label: "Special Offer", to: "/special-offer" },
  ];

  const baseClass = "block rounded-md px-3 py-2 bg-[#F8FCEA] text-[#3D7E2D]";
  const activeClass = [
    "block rounded-md px-3 py-2",
    "bg-[#94C884] text-white font-semibold",
    "relative pl-5",
    "before:content-[''] before:absolute before:left-2",
    "before:top-1/2 before:-translate-y-1/2",
    "before:w-1 before:h-4 before:bg-white before:rounded",
  ].join(" ");

  return (
    <div className="flex flex-col gap-2 pt-16">
      <h1 className="text-xl font-semibold">Category</h1>
      {items.map(({ label, to }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => (isActive ? activeClass : baseClass)}
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
