import { NavLink } from 'react-router-dom'
import Button from './Button.jsx'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/users', label: 'Users' },
  { to: '/about', label: 'About' },
]

function Navbar({ favoriteCount, isDark, onToggleTheme }) {
  return (
    <header className="particle-surface border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-y-3 px-4 py-3 sm:px-6">
        <NavLink to="/" className="order-1 mr-auto flex items-center gap-3 md:mr-0" aria-label="Team Directory home">
          <span className="grid size-9 place-items-center rounded-md border-b-2 border-sky-400 bg-neutral-950 text-xs font-black text-white dark:bg-neutral-950 dark:text-white">
            TD
          </span>
          <span>
            <span className="block font-serif text-lg font-semibold leading-none text-neutral-950 dark:text-white">
              Team Directory
            </span>
            <span className="mt-1 block text-xs font-semibold uppercase text-sky-700 dark:text-sky-300">
              Team workspace
            </span>
          </span>
        </NavLink>

        <nav aria-label="Main navigation" className="order-3 flex w-full items-center gap-1 border-t border-neutral-100 pt-2 md:order-2 md:ml-8 md:w-auto md:border-0 md:pt-0 dark:border-neutral-800">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-sky-600 text-white dark:bg-sky-400 dark:text-slate-950'
                    : 'text-neutral-700 hover:bg-neutral-100 hover:text-black dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="order-2 flex items-center gap-2 md:order-3 md:ml-auto">
          <span className="whitespace-nowrap rounded-md border border-sky-300 bg-sky-100 px-3 py-2 text-xs font-bold text-sky-950 dark:border-sky-700 dark:bg-sky-950 dark:text-sky-200">
            Favorites: {favoriteCount}
          </span>
          <Button
            label={isDark ? 'Light mode' : 'Dark mode'}
            variant="secondary"
            onClick={onToggleTheme}
            aria-pressed={isDark}
            className="min-h-10 px-3 text-xs"
          >
            {isDark ? 'Light mode' : 'Dark mode'}
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar