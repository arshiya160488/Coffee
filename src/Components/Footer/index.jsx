import React from 'react'
import {
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
  FaTwitter,
  FaYoutube,
  FaCoffee,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-amber-950 text-white"
      style={{ fontFamily: 'Vazir, sans-serif' }}
    >

      {/* Decorative Background */}
      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

      {/* Top Border */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-700 via-orange-400 to-amber-700" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-16">

        {/* Main Content */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">

            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-xl text-amber-950 shadow-lg">
                <FaCoffee />
              </div>

              <h1 className="font-Coffee text-4xl font-bold tracking-wide">
                Coffee
              </h1>
            </div>

            <p className="max-w-sm text-sm leading-7 text-amber-100/80">
              Coffee isn't just a drink. It's a way of life.
              هر فنجان برای ساختن یک لحظه خوب آماده می‌شود.
            </p>

            {/* Social */}
            <div className="mt-7 flex flex-wrap gap-3">

              <button
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-700/50 bg-amber-900/50 text-lg text-amber-100 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:bg-orange-500 hover:text-white"
              >
                <FaInstagram />
              </button>

              <button
                aria-label="Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-700/50 bg-amber-900/50 text-lg text-amber-100 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:bg-orange-500 hover:text-white"
              >
                <FaTelegramPlane />
              </button>

              <button
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-700/50 bg-amber-900/50 text-lg text-amber-100 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:bg-orange-500 hover:text-white"
              >
                <FaTiktok />
              </button>

              <button
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-700/50 bg-amber-900/50 text-lg text-amber-100 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:bg-orange-500 hover:text-white"
              >
                <FaTwitter />
              </button>

              <button
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-700/50 bg-amber-900/50 text-lg text-amber-100 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:bg-orange-500 hover:text-white"
              >
                <FaYoutube />
              </button>

            </div>
          </div>

          {/* Links */}
          <div>

            <h3 className="mb-5 text-lg font-bold text-amber-50">
              Quick Links
            </h3>

            <div className="mb-5 h-1 w-10 rounded-full bg-orange-400" />

            <ul className="flex flex-col items-start gap-3">

              <li>
                <button className="text-sm text-amber-100/80 transition duration-300 hover:translate-x-1 hover:text-orange-300">
                  Home
                </button>
              </li>

              <li>
                <button className="text-sm text-amber-100/80 transition duration-300 hover:translate-x-1 hover:text-orange-300">
                  Shop
                </button>
              </li>

              <li>
                <button className="text-sm text-amber-100/80 transition duration-300 hover:translate-x-1 hover:text-orange-300">
                  Contact Us
                </button>
              </li>

              <li>
                <button className="text-sm text-amber-100/80 transition duration-300 hover:translate-x-1 hover:text-orange-300">
                  About Us
                </button>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-5 text-lg font-bold text-amber-50">
              Contact
            </h3>

            <div className="mb-5 h-1 w-10 rounded-full bg-orange-400" />

            <div className="flex flex-col gap-4 text-sm text-amber-100/80">

              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-orange-300" />
                <span>Coffee Street</span>
              </p>

              <p className="flex items-center gap-3">
                <FaPhone className="shrink-0 text-orange-300" />
                <span>+98 09150525331</span>
              </p>

              <p className="flex items-center gap-3 break-all">
                <FaEnvelope className="shrink-0 text-orange-300" />
                <span>coffee32street@gmail.com</span>
              </p>

              <p className="flex items-center gap-3">
                <FaTelegramPlane className="shrink-0 text-orange-300" />
                <span>CoffeeStreet@telegram</span>
              </p>

            </div>
          </div>

          {/* Opening */}
          <div>

            <h3 className="mb-5 text-lg font-bold text-amber-50">
              Opening Hours
            </h3>

            <div className="mb-5 h-1 w-10 rounded-full bg-orange-400" />

            <div className="rounded-2xl border border-amber-700/40 bg-amber-900/40 p-5 shadow-lg">

              <div className="flex items-center justify-between border-b border-amber-700/30 pb-3">
                <span className="text-sm text-amber-100/70">
                  شنبه - پنجشنبه
                </span>

                <span className="text-sm font-bold text-orange-300">
                  08:00 - 23:00
                </span>
              </div>

              <div className="flex items-center justify-between pt-3">
                <span className="text-sm text-amber-100/70">
                  جمعه
                </span>

                <span className="text-sm font-bold text-orange-300">
                  10:00 - 22:00
                </span>
              </div>

              <p className="mt-4 text-xs leading-6 text-amber-100/60">
                هر روز آماده‌ایم تا قهوه مورد علاقه‌ات را برایت آماده کنیم.
              </p>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-14 flex flex-col gap-3 border-t border-amber-700/40 pt-6 text-center text-xs text-amber-100/60 md:flex-row md:items-center md:justify-between md:text-right">

          <p>
            © 2026 Coffee. All rights reserved.
          </p>

          <p>
            Made with ☕ & passion <a href="arshiya.ir" className='via-blue-500'>arshiya</a>
          </p>

        </div>

      </div>

    </footer>
  )
}