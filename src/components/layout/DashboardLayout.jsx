import React from "react";
import { Link } from "react-router-dom";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-4 text-xl font-bold">Dashboard</div>
        <nav className="flex-1 px-2 space-y-2">
          <Link
            to="/"
            className="block px-3 py-2 rounded hover:bg-gray-700 transition"
          >
            Partner Account
          </Link>
          <Link
            to="/payouts"
            className="block px-3 py-2 rounded hover:bg-gray-700 transition"
          >
            Payouts
          </Link>
          <Link
            to="/settings"
            className="block px-3 py-2 rounded hover:bg-gray-700 transition"
          >
            Settings
          </Link>
        </nav>
      </aside>

      <main className="flex-1 bg-gray-50 p-6 overflow-auto">{children}</main>
    </div>
  );
}
