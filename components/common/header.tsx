'use client'
import React, { useState, useEffect } from "react";
import { FileText, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import NavLink from "./nav-link";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <nav className="container flex justify-between items-center py-4 lg:px-8 px-4 mx-auto relative">
      <div className="flex lg:flex-1">
        <FileText className="w-6 h-6 lg:w-8 lg:h-8 text-gray-700 hover:rotate-12 transform transition duration-300 ease-in-out" />
        <NavLink href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
          <span className="font-extrabold lg:text-xl text-gray-900">NebulaPDF</span>
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <X className="w-6 h-6 text-gray-700" />
        ) : (
          <Menu className="w-6 h-6 text-gray-700" />
        )}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
        <NavLink href="/#pricing">Pricing</NavLink>
      </div>
      <div className="hidden lg:flex lg:flex-1 justify-end">
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

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg py-4 px-4 z-50">
          <div className="flex flex-col space-y-4">
            <NavLink href="/#pricing">Pricing</NavLink>
            {isLoggedIn ? (
              <>
                <NavLink href="/#dashboard">Your Summaries</NavLink>
                <NavLink href="/upload">Upload a PDF</NavLink>
                <div className="text-sm font-medium text-rose-600">Pro</div>
                <Button variant="outline" size="sm" className="w-full">User</Button>
              </>
            ) : (
              <NavLink href="/signin">Sign in</NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
