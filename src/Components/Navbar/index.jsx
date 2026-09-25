import React, { useState } from 'react'
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaCoffee
} from 'react-icons/fa'

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="relative z-50 bg-gradient-to-r from-amber-950 via-amber-900 to-yellow-900 shadow-lg">

      <div className="mx-auto flex min-h-17 max-w-7xl items-center justify-between px-6 py-4 md:px-8 md:py-0">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-950 shadow-md">
            <FaCoffee />
          </div>

          <div className="font-Coffee text-4xl font-bold tracking-wide text-white">
            Coffee
          </div>

        </div>

        {/* Menu */}
        <ul
          className={`
            absolute left-0 top-full w-full flex-col items-center gap-6
            border-t border-amber-700/40 bg-amber-950/95 py-7
            shadow-xl backdrop-blur-md
            transition-all duration-300
            md:static md:flex md:w-auto md:flex-row md:gap-8
            md:border-0 md:bg-transparent md:py-0 md:shadow-none
            md:backdrop-blur-0
            ${menuOpen
              ? 'flex translate-y-0 opacity-100'
              : 'pointer-events-none -translate-y-3 opacity-0 md:pointer-events-auto md:translate-y-0 md:opacity-100'
            }
          `}
        >
          <li>
            <button
              onClick={() => setMenuOpen(false)}
              className="group relative text-lg text-amber-100 transition duration-300 hover:text-white"
            >
              Home

              <span className="absolute -bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-orange-300 transition-all duration-300 group-hover:w-full" />
            </button>
          </li>

          <li>
            <button
              onClick={() => setMenuOpen(false)}
              className="group relative text-lg text-amber-100 transition duration-300 hover:text-white"
            >
              Shop

              <span className="absolute -bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-orange-300 transition-all duration-300 group-hover:w-full" />
            </button>
          </li>

          <li>
            <button
              onClick={() => setMenuOpen(false)}
              className="group relative text-lg text-amber-100 transition duration-300 hover:text-white"
            >
              Contact us

              <span className="absolute -bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-orange-300 transition-all duration-300 group-hover:w-full" />
            </button>
          </li>

          <li>
            <button
              onClick={() => setMenuOpen(false)}
              className="group relative text-lg text-amber-100 transition duration-300 hover:text-white"
            >
              About us

              <span className="absolute -bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-orange-300 transition-all duration-300 group-hover:w-full" />
            </button>
          </li>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 md:hidden">

            <button
              onClick={() => setMenuOpen(false)}
              className="rounded-lg border border-amber-200/40 px-5 py-2 text-amber-100 transition duration-300 hover:bg-amber-800/50"
            >
              Login
            </button>

            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 rounded-lg bg-amber-100 px-5 py-2 font-medium text-amber-950 shadow-md transition duration-300 hover:bg-amber-200"
            >
              <FaSearch />
              Search
            </button>

          </div>

        </ul>

        {/* Actions */}
        <div className="hidden items-center gap-3 md:flex">

          <button className="rounded-lg border border-amber-200/40 px-4 py-2 text-amber-100 transition duration-300 hover:-translate-y-0.5 hover:bg-amber-800/50">
            Login
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-amber-100 px-4 py-2 font-medium text-amber-950 shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-amber-200 hover:shadow-lg">
            <FaSearch />
            Search
          </button>

        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="باز کردن منو"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-200/20 bg-amber-900/40 text-xl text-amber-100 transition duration-300 hover:bg-amber-800 md:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Bottom Glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-300/50 to-transparent" />

    </nav>
  )
}