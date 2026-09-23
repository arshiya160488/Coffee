
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white">

      <div className="flex w-full items-start justify-between p-16">

        {/* Brand */}
        <div className="w-1/4">
          <h1 className="mb-5 font-Coffee text-4xl font-bold tracking-wide">
            Coffee
          </h1>

          <span className="text-sm leading-6 text-blue-100">
            Coffee isn't just a drink. It's a way of life.
          </span>
        </div>

        {/* Content */}
        <div className="flex w-3/4 justify-around">

          {/* Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="flex flex-col items-start gap-2">
              <li>
                <button className="transition hover:translate-x-1 hover:text-blue-100">
                  Home
                </button>
              </li>

              <li>
                <button className="transition hover:translate-x-1 hover:text-blue-100">
                  Shop
                </button>
              </li>

              <li>
                <button className="transition hover:translate-x-1 hover:text-blue-100">
                  Contact Us
                </button>
              </li>

              <li>
                <button className="transition hover:translate-x-1 hover:text-blue-100">
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Contact
            </h3>

            <div className="flex flex-col gap-2 text-sm text-blue-100">
              <p>☕ Coffee Street</p>
              <p>📞 +98 09150525331</p>
              <p>✉ coffee32street@gmail.com</p>
              <p>💬 CoffeeStreet@telegram</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Follow Us
            </h3>

            <ul className="flex flex-col gap-2 text-blue-100">
              <li className="cursor-pointer transition hover:translate-x-1 hover:text-white">
                Instagram
              </li>

              <li className="cursor-pointer transition hover:translate-x-1 hover:text-white">
                Telegram
              </li>

              <li className="cursor-pointer transition hover:translate-x-1 hover:text-white">
                TikTok
              </li>

              <li className="cursor-pointer transition hover:translate-x-1 hover:text-white">
                Twitter
              </li>

              <li className="cursor-pointer transition hover:translate-x-1 hover:text-white">
                YouTube
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-blue-400/40 py-5 text-center text-sm text-blue-100">
        © 2026 Coffee. All rights reserved.
      </div>

    </footer>
  )
}

