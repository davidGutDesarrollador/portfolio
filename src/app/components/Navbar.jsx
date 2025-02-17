"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [navBarOpen, setNavbarOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // Estado para asegurarse que se monta en el cliente

  // Efecto que asegura que el componente solo se monte en el cliente
  useEffect(() => {
    setMounted(true);
  }, []); 

  if (!mounted) {
    return null; // Evita el renderizado en el SSR
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-7">
        <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
          DAVID
        </Link>
        <div className="mobile-menu block md:hidden">
          {
            navBarOpen ? (
              <button 
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                onClick={() => setNavbarOpen(!navBarOpen)}
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            ) : (
              <button 
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                onClick={() => setNavbarOpen(!navBarOpen)}
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            )
          }
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navBarOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
  );
};

export default Navbar;
