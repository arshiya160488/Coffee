import React from 'react'
import {
  FaCoffee,
  FaStar,
  FaLeaf,
  FaHeart
} from 'react-icons/fa'

export default function Coffee() {
  return (
    <section
      className="relative mt-20 w-full overflow-hidden bg-stone-100 px-6 py-20 md:px-16"
      style={{ fontFamily: 'Vazir, sans-serif' }}
    >

      {/* Background */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-orange-300/30 blur-3xl" />

      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-yellow-300/30 blur-3xl" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

        {/* Text */}
        <div className="text-center lg:text-right">

          <span className="text-sm font-bold tracking-widest text-orange-500">
            تجربه متفاوت
          </span>

          <h1 className="mt-4 text-4xl font-black leading-tight text-amber-950 md:text-6xl">
            قهوه فقط یک نوشیدنی نیست
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-stone-600 md:text-lg">
            از اولین عطر قهوه تا آخرین جرعه، هر فنجان برای ساختن
            یک لحظه خوب آماده می‌شود.
          </p>

          {/* Features */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

            <div className="flex items-center gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-950 text-xl text-amber-100">
                <FaCoffee />
              </div>

              <div>
                <h3 className="font-bold text-amber-950">
                  قهوه تازه
                </h3>

                <p className="mt-1 text-sm text-stone-600">
                  تهیه شده با دانه‌های باکیفیت
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-xl text-white">
                <FaStar />
              </div>

              <div>
                <h3 className="font-bold text-amber-950">
                  کیفیت بالا
                </h3>

                <p className="mt-1 text-sm text-stone-600">
                  انتخاب محبوب مشتری‌ها
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-700 text-xl text-white">
                <FaLeaf />
              </div>

              <div>
                <h3 className="font-bold text-amber-950">
                  مواد تازه
                </h3>

                <p className="mt-1 text-sm text-stone-600">
                  طعم طبیعی در هر فنجان
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-700 text-xl text-white">
                <FaHeart />
              </div>

              <div>
                <h3 className="font-bold text-amber-950">
                  با عشق
                </h3>

                <p className="mt-1 text-sm text-stone-600">
                  آماده شده برای حال خوب شما
                </p>
              </div>
            </div>

          </div>

          {/* Button */}
          <button className="mt-8 rounded-full bg-amber-950 px-8 py-3 font-bold text-amber-100 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-amber-900 hover:shadow-xl">
            بیشتر درباره ما
          </button>

        </div>

        {/* 3D Coffee Side */}
        <div className="relative flex min-h-[480px] items-center justify-center">

          {/* Glow */}
          <div className="absolute h-80 w-80 rounded-full bg-orange-300/40 blur-3xl" />

          {/* Circle */}
          <div className="absolute h-72 w-72 rounded-full border border-orange-300/50 bg-gradient-to-br from-orange-200 via-yellow-100 to-pink-200 shadow-2xl md:h-96 md:w-96" />

          {/* Decorative Beans */}
          <div className="absolute left-8 top-10 rotate-[-20deg] text-4xl">
            🫘
          </div>

          <div className="absolute right-10 top-20 rotate-12 text-3xl">
            🫘
          </div>

          <div className="absolute bottom-10 left-16 rotate-12 text-3xl">
            🫘
          </div>

          <div className="absolute bottom-16 right-16 -rotate-12 text-4xl">
            🫘
          </div>

          {/* Cup */}
          <div className="relative z-20">

            {/* Steam */}
            <div className="absolute -top-24 left-1/2 flex -translate-x-1/2 gap-4 text-4xl opacity-50">
              <span className="animate-pulse">〰</span>
              <span className="animate-pulse delay-150">〰</span>
              <span className="animate-pulse delay-300">〰</span>
            </div>

            {/* Handle */}
            <div className="absolute -right-16 top-20 h-28 w-28 rounded-full border-[18px] border-stone-300 bg-transparent shadow-lg md:-right-20 md:h-36 md:w-36" />

            {/* Cup */}
            <div className="relative h-56 w-56 rotate-[-7deg] rounded-[35%_35%_45%_45%] bg-gradient-to-br from-white via-stone-200 to-stone-400 shadow-[0_35px_50px_rgba(0,0,0,0.25)] md:h-64 md:w-64">

              {/* Coffee */}
              <div className="absolute left-[10%] top-[8%] h-20 w-[80%] rounded-[50%] bg-gradient-to-br from-amber-700 via-amber-950 to-stone-950 shadow-inner md:h-24" />

              {/* Highlight */}
              <div className="absolute left-8 top-20 h-24 w-5 rounded-full bg-white/50 blur-sm" />

            </div>

            {/* Saucer */}
            <div className="absolute -bottom-6 left-1/2 h-12 w-72 -translate-x-1/2 rounded-[50%] bg-gradient-to-r from-stone-200 via-white to-stone-300 shadow-xl md:w-80" />

          </div>

          {/* Small Stats Card */}
          <div className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2 rounded-2xl border border-white/50 bg-white/80 px-6 py-4 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-6">

              <div className="text-center">
                <h3 className="text-xl font-black text-amber-950">
                  +10
                </h3>

                <p className="text-xs text-stone-500">
                  نوع قهوه
                </p>
              </div>

              <div className="h-10 w-px bg-stone-300" />

              <div className="text-center">
                <h3 className="text-xl font-black text-amber-950">
                  +5K
                </h3>

                <p className="text-xs text-stone-500">
                  مشتری
                </p>
              </div>

              <div className="h-10 w-px bg-stone-300" />

              <div className="text-center">
                <h3 className="text-xl font-black text-amber-950">
                  4.9
                </h3>

                <p className="text-xs text-stone-500">
                  امتیاز
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  )
}