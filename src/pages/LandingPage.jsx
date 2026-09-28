function LandingPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Decorative background */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-32
          h-64
          w-64
          rounded-full
          bg-blue-200/50
          blur-3xl
          sm:h-80
          sm:w-80
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-20
          h-72
          w-72
          rounded-full
          bg-cyan-200/50
          blur-3xl
          sm:h-96
          sm:w-96
        "
      />

      {/* Hero */}
      <section
        className="
          relative
          flex
          min-h-[100svh]
          items-center
          px-5
          pb-16
          pt-32
          sm:px-8
          sm:pt-36
          lg:px-12
        "
      >
        <div className="mx-auto w-full max-w-7xl">
          <div
            className="
              grid
              grid-cols-1
              items-center
              gap-12
              lg:grid-cols-2
              lg:gap-16
            "
          >
            {/* ================= TEXT ================= */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-blue-200
                  bg-white
                  px-3
                  py-2
                  text-xs
                  font-bold
                  text-blue-700
                  shadow-sm
                  sm:px-4
                  sm:text-sm
                "
              >
                <span className="h-2 w-2 rounded-full bg-green-500" />

                Platform Lomba & Prestasi Siswa
              </div>

              {/* Heading */}
              <h1
                className="
                  mx-auto
                  mt-6
                  max-w-3xl
                  text-4xl
                  font-black
                  leading-[1.05]
                  tracking-tight
                  text-blue-950
                  sm:text-5xl
                  md:text-6xl
                  lg:mx-0
                  lg:text-6xl
                  xl:text-7xl
                "
              >
                Dari Karya
                <br />
                <span className="text-blue-700">
                  Menjadi Prestasi.
                </span>
              </h1>

              {/* Description */}
              <p
                className="
                  mx-auto
                  mt-6
                  max-w-xl
                  text-sm
                  leading-7
                  text-slate-600
                  sm:text-base
                  md:text-lg
                  lg:mx-0
                "
              >
                Satu platform untuk mengelola lomba siswa dan
                menyimpan perjalanan prestasi secara terstruktur
                di bawah naungan Dinas Pendidikan Kabupaten/Kota.
              </p>

              {/* Buttons */}
              <div
                className="
                  mt-8
                  flex
                  flex-col
                  items-stretch
                  justify-center
                  gap-3
                  sm:flex-row
                  sm:items-center
                  lg:justify-start
                "
              >
                <a
                  href="/lomba"
                  className="
                    inline-flex
                    min-h-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-800
                    px-6
                    py-3
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    shadow-blue-200
                    transition
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-blue-900
                  "
                >
                  Lihat Lomba
                  <span className="ml-2">→</span>
                </a>

                <a
                  href="/prestasi"
                  className="
                    inline-flex
                    min-h-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-blue-200
                    bg-white
                    px-6
                    py-3
                    text-sm
                    font-bold
                    text-blue-800
                    shadow-sm
                    transition
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-blue-50
                  "
                >
                  Jelajahi Prestasi
                </a>
              </div>

              {/* Stats */}
              <div
                className="
                  mx-auto
                  mt-10
                  grid
                  max-w-md
                  grid-cols-3
                  divide-x
                  divide-blue-100
                  rounded-2xl
                  border
                  border-blue-100
                  bg-white/70
                  p-4
                  shadow-sm
                  backdrop-blur
                  lg:mx-0
                "
              >
                <div className="px-2 text-center">
                  <p className="text-lg font-black text-blue-950 sm:text-2xl">
                    Terstruktur
                  </p>

                  <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                    Pengelolaan
                  </p>
                </div>

                <div className="px-2 text-center">
                  <p className="text-lg font-black text-blue-950 sm:text-2xl">
                    Digital
                  </p>

                  <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                    Sertifikat
                  </p>
                </div>

                <div className="px-2 text-center">
                  <p className="text-lg font-black text-blue-950 sm:text-2xl">
                    12+
                  </p>

                  <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                    Tahun arsip
                  </p>
                </div>
              </div>
            </div>

            {/* ================= ILLUSTRATION ================= */}
            <div
              className="
                relative
                mx-auto
                w-full
                max-w-xl
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  inset-10
                  rounded-full
                  bg-blue-200/60
                  blur-3xl
                "
              />

              {/* Illustration Container */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white
                  bg-gradient-to-br
                  from-blue-100
                  via-white
                  to-cyan-100
                  p-4
                  shadow-2xl
                  shadow-blue-200/60
                  sm:rounded-[40px]
                  sm:p-6
                "
              >
                <div
                  className="
                    flex
                    min-h-[280px]
                    items-center
                    justify-center
                    sm:min-h-[380px]
                    lg:min-h-[430px]
                  "
                >
                  <div
                    className="
                      flex
                      h-48
                      w-48
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-200
                      sm:h-64
                      sm:w-64
                      lg:h-72
                      lg:w-72
                    "
                  >
                    <div className="text-7xl sm:text-8xl lg:text-9xl">
                      🎓
                    </div>
                  </div>
                </div>

                {/* Floating card */}
                <div
                  className="
                    absolute
                    bottom-3
                    left-3
                    max-w-[170px]
                    rounded-xl
                    bg-white
                    p-3
                    shadow-xl
                    sm:bottom-5
                    sm:left-5
                    sm:max-w-[220px]
                    sm:rounded-2xl
                    sm:p-4
                  "
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-100 text-sm sm:h-11 sm:w-11 sm:text-base">
                      ✓
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-xs font-bold text-blue-950 sm:text-sm">
                        Prestasi Tercatat
                      </p>

                      <p className="text-[10px] text-slate-500 sm:text-xs">
                        Aman & terstruktur
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating award */}
                <div
                  className="
                    absolute
                    right-3
                    top-3
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-white
                    text-xl
                    shadow-xl
                    sm:right-5
                    sm:top-5
                    sm:h-14
                    sm:w-14
                    sm:rounded-2xl
                    sm:text-2xl
                  "
                >
                  🏆
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;