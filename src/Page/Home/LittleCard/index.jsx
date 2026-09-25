import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function LittleCard() {

  const detail = [
    {
      id: 1,
      title: 'اسپرسو',
      description: 'یک انتخاب ساده و قوی برای عاشقان قهوه',
      image:
        'https://cdn.tarhpik.com/5_Preview/1404/8/1/200207/creamy-latte-art-in-beige-cup-delicious-coffee-drink-on-saucer-400.webp'
    },
    {
      id: 2,
      title: 'لاته',
      description: 'قهوه‌ای ملایم با شیر و فوم نرم',
      image:
        'https://cdn.tarhpik.com/5_Preview/1404/8/1/192807/coffee-cup-delicious-drink-400.webp'
    },
    {
      id: 3,
      title: 'کاپوچینو',
      description: 'ترکیبی خوش‌عطر از قهوه، شیر و فوم',
      image:
        'https://cdn.tarhpik.com/5_Preview/1404/8/1/192523/coffee-house-cafe-coffee-service-cappuccino-coffee-cup-generative-ai-1000.webp'
    },
    {
      id: 4,
      title: 'آمریکانو',
      description: 'اسپرسو با آب داغ برای طعمی سبک‌تر',
      image:
        'https://cdn.tarhpik.com/5_Preview/1404/8/1/192807/coffee-cup-delicious-drink-400.webp'
    },
    {
      id: 5,
      title: 'موکا',
      description: 'قهوه‌ای خوشمزه با ترکیب شکلات و شیر',
      image:
        'https://cdn.tarhpik.com/5_Preview/1404/8/1/192523/coffee-house-cafe-coffee-service-cappuccino-coffee-cup-generative-ai-1000.webp'
    },
    {
      id: 6,
      title: 'ماکیاتو',
      description: 'اسپرسو با مقدار کمی فوم شیر',
      image:
        'https://cdn.tarhpik.com/5_Preview/1404/8/1/192807/coffee-cup-delicious-drink-400.webp'
    },
    {
      id: 7,
      title: 'آیس لاته',
      description: 'لاته خنک و مناسب روزهای گرم',
      image:
        'https://cdn.tarhpik.com/5_Preview/1404/8/1/192523/coffee-house-cafe-coffee-service-cappuccino-coffee-cup-generative-ai-1000.webp'
    },
    {
      id: 8,
      title: 'آیس کافی',
      description: 'یک قهوه خنک برای طرفداران نوشیدنی سرد',
      image:
        'https://cdn.tarhpik.com/5_Preview/1404/8/1/191827/coffee-latte-art-in-coffee-shop-in-vintage-color-filter-1000.webp'
    },
    {
      id: 9,
      title: 'قهوه ترک',
      description: 'عطر و طعم سنتی و غلیظ قهوه',
      image:
        'https://cdn.tarhpik.com/5_Preview/1404/8/1/192807/coffee-cup-delicious-drink-400.webp'
    },
    {
      id: 10,
      title: 'قهوه سرد',
      description: 'انتخابی خنک و جذاب برای تابستان',
      image:
        'https://cdn.tarhpik.com/5_Preview/1404/8/1/192807/coffee-cup-delicious-drink-400.webp'
    }
  ]

  const [current, setCurrent] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {

    const handleResize = () => {

      if (window.innerWidth < 640) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }

    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }

  }, [])

  const next = () => {
    setCurrent((prev) => {
      if (prev >= detail.length - visibleCount) {
        return 0
      }

      return prev + 1
    })
  }

  const prev = () => {
    setCurrent((prev) => {
      if (prev <= 0) {
        return detail.length - visibleCount
      }

      return prev - 1
    })
  }

  return (
    <section
      className="relative mt-16 mb-16 w-full overflow-hidden px-4 py-10"
      style={{ fontFamily: 'Vazir, sans-serif' }}
    >

      {/* Background Decoration */}
      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-orange-300/30 blur-3xl" />

      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-yellow-300/30 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/20 blur-3xl" />

      {/* Title */}
      <div className="relative z-10 mb-10 text-center">

        <h1 className="text-3xl font-black text-amber-950 md:text-5xl">
          محبوب‌ترین قهوه‌ها
        </h1>

        <p className="mt-3 text-sm text-stone-600 md:text-base">
          انتخاب‌های محبوب مشتری‌های کافه
        </p>

      </div>

      {/* Slider Box */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center gap-3 md:gap-5 md:p-6">

        {/* Previous */}
        <button
          onClick={prev}
          aria-label="قبلی"
          className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-950 text-amber-100 shadow-lg transition duration-300 hover:-translate-x-1 hover:bg-amber-900 hover:shadow-xl sm:flex"
        >
          <FaChevronLeft />
        </button>

        {/* Cards Container */}
        <div className="w-full overflow-hidden rounded-3xl">

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / visibleCount)}%)`
            }}
          >

            {detail.map((item) => (

              <div
                key={item.id}
                className="shrink-0 px-2"
                style={{
                  width: `${100 / visibleCount}%`
                }}
              >

                {/* Card */}
                <div className="group overflow-hidden rounded-3xl border border-amber-200/70 bg-gradient-to-br from-white via-amber-50 to-orange-50  transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(92,55,20,0.25)]">

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden md:h-64">

                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-950/50 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                    {/* Number */}
                    <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-amber-950/80 text-sm font-bold text-amber-100 shadow-lg backdrop-blur-sm">
                      {item.id}
                    </div>

                  </div>

                  {/* Content */}
                  <div className="p-5 text-center">

                    <h2 className="text-2xl font-black text-amber-950">
                      {item.title}
                    </h2>

                    <p className="mt-3 min-h-12 text-sm leading-7 text-stone-600">
                      {item.description}
                    </p>

                    <button className="mt-5 rounded-full bg-amber-950 px-6 py-2.5 text-sm font-bold text-amber-100 shadow-md transition duration-300 hover:-translate-y-1 hover:bg-amber-900 hover:shadow-lg">
                      مشاهده
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Next */}
        <button
          onClick={next}
          aria-label="بعدی"
          className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-950 text-amber-100 shadow-lg transition duration-300 hover:translate-x-1 hover:bg-amber-900 hover:shadow-xl sm:flex"
        >
          <FaChevronRight />
        </button>

      </div>

      {/* Mobile Buttons */}
      <div className="relative z-10 mt-6 flex justify-center gap-4 sm:hidden">

        <button
          onClick={prev}
          aria-label="قبلی"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-950 text-amber-100 shadow-lg transition hover:scale-105 hover:bg-amber-900"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={next}
          aria-label="بعدی"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-950 text-amber-100 shadow-lg transition hover:scale-105 hover:bg-amber-900"
        >
          <FaChevronRight />
        </button>

      </div>

      {/* Slider Counter */}
      <div className="relative z-10 mt-5 text-center text-xs text-stone-500">
        {current + 1} / {detail.length - visibleCount + 1}
      </div>

    </section>
  )
}