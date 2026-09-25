import React from 'react'

export default function Coffee() {

  const coffeeBeans = [
    {
      id: 1,
      position: 'absolute left-10 top-10 rotate-12 text-4xl'
    },
    {
      id: 2,
      position: 'absolute right-10 top-20 -rotate-12 text-3xl'
    },
    {
      id: 3,
      position: 'absolute left-24 bottom-16 -rotate-12 text-3xl'
    },
    {
      id: 4,
      position: 'absolute right-28 bottom-10 rotate-12 text-4xl'
    }
  ]

  return (
    <section className="relative min-h-[650px] w-full overflow-hidden bg-stone-100 px-6 py-16 md:px-16">

      {/* Colorful Background */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-orange-300/40 blur-3xl" />

      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-pink-300/30 blur-3xl" />

      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-yellow-300/30 blur-3xl" />

      {/* Coffee Beans */}
      {coffeeBeans.map((bean) => (
        <div
          key={bean.id}
          className={`${bean.position} z-10 animate-bounce`}
        >
          🫘
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-20 mx-auto flex min-h-[500px] max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">

        {/* Text */}
        <div className="w-full text-center md:w-1/2 md:text-left">

          <h1 className="text-7xl font-black leading-[0.9] tracking-tighter text-amber-950 md:text-8xl lg:text-9xl">
            COFFEE
          </h1>

          <h2 className="mt-3 text-5xl font-black tracking-tight text-orange-500 md:text-6xl">
            FOR
          </h2>

          <h2 className="mt-2 text-5xl font-black tracking-tight text-amber-950 md:text-6xl">
            EVERYONE
          </h2>

          <p
            className="mt-6 max-w-lg text-base leading-8 text-stone-600 md:text-lg"
            style={{ fontFamily: 'Vazir, sans-serif' }}
          >
            یک فنجان قهوه برای هر سلیقه،
            هر لحظه و هر حال خوب.
          </p>

          <button
            className="mt-7 rounded-full bg-amber-950 px-7 py-3 text-sm font-bold text-amber-100 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-amber-900 hover:shadow-2xl"
            style={{ fontFamily: 'Vazir, sans-serif' }}
          >
            مشاهده منو
          </button>

        </div>

        {/* 3D Coffee */}
        <div className="relative flex w-full items-center justify-center md:w-1/2">

          {/* Back Circle */}
          <div className="absolute h-72 w-72 rounded-full bg-orange-400/30 blur-2xl md:h-96 md:w-96" />

          {/* Rotated 3D Shape */}
          <div className="absolute h-64 w-64 rotate-12 rounded-[30%] bg-gradient-to-br from-orange-300 via-pink-300 to-yellow-200 shadow-2xl md:h-80 md:w-80" />

          {/* Cup */}
          <div className="relative z-20 perspective-[1000px]">

            <div className="relative h-56 w-56 rotate-[-8deg] transform-3d rounded-[40%_40%_45%_45%] bg-gradient-to-br from-stone-100 via-stone-200 to-stone-400 shadow-[0_30px_40px_rgba(0,0,0,0.25)] md:h-64 md:w-64">

              {/* Coffee */}
              <div className="absolute left-[10%] top-[8%] h-20 w-[80%] rounded-[50%] bg-gradient-to-br from-amber-800 via-amber-950 to-stone-950 shadow-inner md:h-24">

                {/* Coffee Foam */}
                <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-amber-700/40 text-xl">
                  ☕
                </div>

              </div>

              {/* Cup Highlight */}
              <div className="absolute left-8 top-20 h-20 w-5 rounded-full bg-white/40 blur-sm" />

            </div>

            {/* Cup Handle */}
            <div className="absolute -right-10 top-20 h-28 w-28 rounded-full border-[18px] border-stone-300 bg-transparent shadow-lg md:-right-12 md:top-24 md:h-32 md:w-32" />

            {/* Saucer */}
            <div className="absolute -bottom-5 left-1/2 h-12 w-72 -translate-x-1/2 rounded-[50%] bg-gradient-to-r from-stone-200 via-white to-stone-300 shadow-xl md:w-80" />

          </div>

          {/* Extra Beans */}
          <div className="absolute left-10 top-5 rotate-[-20deg] text-5xl">
            🫘
          </div>

          <div className="absolute right-5 bottom-10 rotate-12 text-4xl">
            🫘
          </div>

        </div>

      </div>

      {/* Decorative Bottom */}
      <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-amber-950/10 to-transparent" />

    </section>
  )
}