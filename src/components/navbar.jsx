import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";

const navItems = [
  {
    label: "Beranda",
    href: "/",
  },
  {
    label: "Lomba",
    href: "/lomba",
  },
  {
    label: "Prestasi",
    href: "/prestasi",
  },
  {
    label: "Tentang",
    href: "/tentang",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-7xl px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8">
        <nav
          className="
            rounded-2xl
            border
            border-white/70
            bg-white/90
            px-4
            py-3
            shadow-lg
            shadow-blue-100/40
            backdrop-blur-xl
            sm:px-5
          "
        >
          {/* ================= DESKTOP / MOBILE HEADER ================= */}
          <div className="flex min-h-10 items-center justify-between">
            {/* LOGO */}
            <a
              href="/"
              className="flex min-w-0 items-center gap-2.5 sm:gap-3"
              aria-label="Dispen Kabupaten Kota"
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-700
                  text-white
                  shadow-md
                  sm:h-10
                  sm:w-10
                "
              >
                <GraduationCap
                  size={21}
                  strokeWidth={2.2}
                  className="sm:h-[22px] sm:w-[22px]"
                />
              </div>

              <div className="min-w-0 leading-tight">
                <p className="truncate text-sm font-extrabold tracking-tight text-blue-950 sm:text-base">
                  DISPEN
                </p>

                <p className="truncate text-[9px] font-medium text-blue-500 sm:text-[10px]">
                  Kabupaten / Kota
                </p>
              </div>
            </a>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden items-center gap-6 md:flex lg:gap-8">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`
                    relative
                    py-2
                    text-sm
                    font-semibold
                    transition-colors
                    duration-200
                    ${
                      index === 0
                        ? "text-blue-700"
                        : "text-slate-600 hover:text-blue-700"
                    }
                  `}
                >
                  {item.label}

                  {index === 0 && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-blue-700" />
                  )}
                </a>
              ))}
            </div>

            {/* DESKTOP LOGIN */}
            <div className="hidden md:block">
              <a
                href="/login"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-800
                  px-4
                  py-2.5
                  text-sm
                  font-bold
                  text-white
                  shadow-md
                  shadow-blue-200
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-blue-900
                  hover:shadow-lg
                  lg:px-5
                "
              >
                Login / Daftar
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                text-blue-950
                transition
                hover:bg-blue-50
                md:hidden
              "
              aria-label={
                isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
              }
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* ================= MOBILE MENU ================= */}
          <div
            className={`
              overflow-hidden
              transition-all
              duration-300
              md:hidden
              ${
                isOpen
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <div className="mt-3 border-t border-blue-100 pt-3">
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      rounded-xl
                      px-4
                      py-3
                      text-sm
                      font-semibold
                      transition
                      ${
                        index === 0
                          ? "bg-blue-50 text-blue-700"
                          : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                      }
                    `}
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="
                    mt-2
                    rounded-xl
                    bg-blue-800
                    px-4
                    py-3
                    text-center
                    text-sm
                    font-bold
                    text-white
                    transition
                    hover:bg-blue-900
                  "
                >
                  Login / Daftar
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;