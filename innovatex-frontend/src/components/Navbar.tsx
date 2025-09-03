import React from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar(): JSX.Element {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Register", path: "/register" },
    { label: "Schedule", path: "/schedule" },
  ];

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          EventX
        </Link>

        {/* Nav Links */}
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-colors ${
                location.pathname === item.path
                  ? "text-yellow-400 font-semibold"
                  : "text-gray-300 hover:text-yellow-400"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
