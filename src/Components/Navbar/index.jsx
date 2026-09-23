
import React from 'react'

export default function Navbar() {
  return (
    <nav className="h-20 bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <div className="font-Coffee text-4xl font-bold tracking-wide text-white">
          Coffee
        </div>

        {/* Menu */}
        <ul className="flex items-center gap-8">
          <li className="cursor-pointer text-lg text-white transition hover:text-blue-100">
            Home
          </li>
          <li className="cursor-pointer text-lg text-white transition hover:text-blue-100">
            Shop
          </li>
          <li className="cursor-pointer text-lg text-white transition hover:text-blue-100">
            Contact us
          </li>
          <li className="cursor-pointer text-lg text-white transition hover:text-blue-100">
            About us
          </li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="rounded-lg border border-white/40 px-4 py-2 text-white transition hover:bg-white/10">
            Login
          </button>

          <button className="rounded-lg bg-white px-4 py-2 font-medium text-blue-600 shadow transition hover:bg-blue-50">
            Search
          </button>
        </div>

      </div>
    </nav>
  )
}

