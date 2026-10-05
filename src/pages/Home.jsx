import { Link } from 'react-router-dom'
import Avatar from '../components/Avatar.jsx'
import users from '../data/users.js'

function Home() {
  return (
    <div className="space-y-9">
      <section className="particle-hero rounded-md px-5 py-8 sm:px-9 sm:py-12">
        <div className="particle-hero-content flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-sky-800 dark:text-sky-300">Team Directory</p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-neutral-950 dark:text-white sm:text-5xl">
              Good work starts with knowing your people.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-700 dark:text-slate-200">
              A shared home for the names, roles, and details that help your team connect.
            </p>
          </div>
          <Link
            to="/users"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-sky-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300 dark:focus-visible:outline-sky-300"
          >
            Browse the team <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">A good place to start</p>
            <h2 className="mt-1 font-serif text-2xl font-semibold text-neutral-950 dark:text-white">Meet a few teammates</h2>
          </div>
          <Link className="shrink-0 text-sm font-semibold text-neutral-900 hover:underline dark:text-neutral-200" to="/users">
            View everyone
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {users.slice(0, 3).map((user) => (
            <Link
              key={user.id}
              to={`/users/${user.id}`}
              className="particle-surface member-card group rounded-md border border-slate-200 border-t-2 border-t-sky-500 p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-sky-500 hover:shadow-lg dark:border-slate-800 dark:border-t-sky-400 dark:hover:border-sky-400"
            >
              <Avatar name={user.name} id={user.id} className="size-11 text-sm" />
              <h3 className="mt-4 text-base font-semibold text-neutral-950 group-hover:underline dark:text-white">{user.name}</h3>
              <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{user.role}</p>
              <p className="mt-3 border-t border-neutral-200 pt-3 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">{user.company}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home