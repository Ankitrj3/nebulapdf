'use client'
import React from "react";
import { FileText } from "lucide-react";
import NavLink from "./nav-link";
import { UploadFile } from "../upload-file";
function Header() {
  return (
    <nav className="container flex justify-between items-center py-4 lg:px-8 px-4 mx-auto">
      <div className="flex lg:flex-1">
        <FileText className="w-6 h-6 lg:w-8 lg:h-8 text-gray-700 hover:rotate-12 transform transition duration-300 ease-in-out" />
        <NavLink href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
          <span className="font-extrabold lg:text-xl text-gray-900">NebulaPDF</span>
        </NavLink>
      </div>

      <div className="flex items-center">
        <UploadFile />
      </div>
    </nav>
  );
}

export default Header;
