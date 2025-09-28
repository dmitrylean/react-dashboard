// src/components/layout/TopNav.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { path: "/", label: "Client" },
  { path: "/referrals", label: "Orders" },
  { path: "/rules", label: "Rules" },
  { path: "/acts", label: "Checks" },
];

export default function TopNav() {
  return (
    <nav className="w-full">
      <ul className="flex space-x-6 px-6 h-10 items-center justify-between text-[15px] font-medium bg-[#00466626]">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `pb-2 transition ${
                  isActive
                    ? "text-[#475569] bg-[#FFFFFF] text-center px-28 py-5"
                    : "text-gray-600"
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
