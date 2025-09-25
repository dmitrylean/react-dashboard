// src/components/layout/TopNav.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { path: "/", label: "Партнерский счет" },
  { path: "/referrals", label: "Рефералы" },
  { path: "/links", label: "Ссылка и регистрации" },
  { path: "/payments", label: "Оплаты рефералов" },
  { path: "/rules", label: "Правила" },
  { path: "/acts", label: "Акты" },
];

export default function TopNav() {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <ul className="flex space-x-6 px-6 h-14 items-center text-sm font-medium">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `pb-2 transition ${
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-500"
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
