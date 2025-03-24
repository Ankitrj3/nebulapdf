'use client'
import React, { useState, useEffect } from "react";
import { FileText } from "lucide-react";
import { Button } from "../ui/button";
import NavLink from "./nav-link";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <nav className="container flex justify-between items-center py-4 lg:px-8 px-2 mx-auto">
      <div className="flex lg:flex-1">
        <FileText className="w-6 h-6 lg:w-8 lg:h-8 text-gray-700 hover:rotate-12 transform transition duration-300 ease-in-out" />
        <NavLink href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
          <span className="font-extrabold lg:text-xl text-gray-900">NebulaPDF</span>
        </NavLink>
      </div>
      <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
        <NavLink href="/#pricing">Pricing</NavLink>
      </div>
      <div className="flex lg:flex-1 justify-end">
        {isLoggedIn ? (
          <div className="flex gap-4 items-center">
            <NavLink href="/#dashboard">Your Summaries</NavLink>
            <NavLink href="/upload">Upload a PDF</NavLink>
            <div className="text-sm font-medium text-rose-600">Pro</div>
            <Button variant="outline" size="sm">User</Button>
          </div>
        ) : (
          <NavLink href="/signin">Sign in</NavLink>
        )}
      </div>
    </nav>
  );
}

export default Header;
