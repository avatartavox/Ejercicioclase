import { Link, NavLink } from "react-router"

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2 text-sm transition-colors ${
    isActive
      ? "bg-white text-[#17243b]"
      : "text-white/80 hover:bg-white/10 hover:text-white"
  }`

export function MainMenu() {
  return (
    <header className="relative z-50 bg-[#0b1a2d] px-5 py-3 font-['Inter:Regular',sans-serif]">
      <nav
        aria-label="Menú principal"
        className="mx-auto flex max-w-[1271px] items-center justify-between gap-5"
      >
        <Link to="/" className="shrink-0 text-base text-white">
          FlexiAcademy
        </Link>
        <div className="flex items-center gap-1 overflow-x-auto">
          <NavLink to="/" end className={linkClass}>
            Inicio
          </NavLink>
          <NavLink to="/categories" className={linkClass}>
            Categorías
          </NavLink>
          <NavLink to="/horizon-courts" className={linkClass}>
            Horizon Courts
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
