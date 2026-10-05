import { useEffect, useState } from 'react'
import ErrorMessage from '../components/ErrorMessage.jsx'
import Loader from '../components/Loader.jsx'
import UserCard from '../components/UserCard.jsx'
import userData from '../data/users.js'

const organizations = [...new Set(userData.map((user) => user.company))]
const organizationTones = [
  'bg-neutral-950 dark:bg-white',
  'bg-sky-600 dark:bg-sky-400',
  'bg-neutral-500 dark:bg-neutral-400',
  'bg-neutral-800 dark:bg-neutral-200',
]

function Users({ favorites, onToggleFavorite }) {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setUsers(userData)
      setIsLoading(false)
    }, 1000)

    return () => window.clearTimeout(timeoutId)
  }, [])

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  )

  useEffect(() => {
    document.title = `Users (${filteredUsers.length})`
  }, [filteredUsers.length])

  const stats = [
    { label: 'People', value: userData.length },
    { label: 'Organizations', value: organizations.length },
    { label: 'Favorites', value: favorites.length, accent: true },
  ]

  return (
    <section className="space-y-5">
      <div
        className="particle-hero overflow-hidden rounded-md"
      >
        <div className="particle-hero-content grid gap-6 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[minmax(0,1fr)_minmax(24rem,0.9fr)] lg:items-center">
          <div>
            <span className="inline-flex rounded-md border border-sky-300 bg-sky-300 px-3 py-1 text-xs font-bold text-slate-950">Team directory</span>
            <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">Meet the team</h1>
            <p className="mt-2 max-w-lg text-sm leading-6 text-slate-200 sm:text-base">
              Browse profiles, find contact details, and save the people you work with.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {stats.map(({ label, value, accent }) => (
              <div key={label} className="hero-stat min-w-0 rounded-md px-3 py-4 text-center sm:px-4 sm:py-5">
                <p className={`hero-stat-value font-serif text-2xl font-semibold sm:text-3xl ${accent ? 'is-accent' : ''}`}>{value}</p>
                <p className="hero-stat-label mt-1 truncate text-xs font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.6fr)_minmax(17rem,0.9fr)]">
        <section className="min-w-0">
          <div className="flex flex-col justify-between gap-4 border-b border-slate-200 px-4 py-4 dark:border-slate-800 sm:flex-row sm:items-center sm:px-5">
            <div>
              <h2 className="text-lg font-bold text-slate-950 dark:text-white">Team members</h2>
              <p className="mt-1 text-xs font-medium text-slate-700 dark:text-slate-300">
                {isLoading ? 'Gathering the team...' : `${filteredUsers.length} ${filteredUsers.length === 1 ? 'person' : 'people'} in view`}
              </p>
            </div>
            <label className="block w-full sm:max-w-xs">
              <span className="sr-only">Search by name</span>
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Find people..."
                className="min-h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-950 outline-none placeholder:text-neutral-600 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 dark:border-neutral-700 dark:bg-neutral-950 dark:text-white dark:placeholder:text-neutral-400 dark:focus:border-sky-400"
              />
            </label>
          </div>

          {isLoading ? (
            <Loader label="Loading..." />
          ) : filteredUsers.length === 0 ? (
            <div className="p-4 sm:p-5">
              <ErrorMessage title="No users found" message="Try a different name or clear the search field." />
            </div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {filteredUsers.map((user) => (
                <UserCard
                  key={user.id}
                  {...user}
                  isFavorite={favorites.includes(user.id)}
                  onToggleFavorite={onToggleFavorite}
                />
              ))}
            </div>
          )}
        </section>

        <aside className="particle-surface rounded-md border border-neutral-300 p-4 dark:border-neutral-800 sm:p-5">
          <h2 className="text-lg font-bold text-neutral-950 dark:text-white">Organizations</h2>
          <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">Teams represented in the directory</p>
          <ul className="mt-6 space-y-5">
            {organizations.map((organization, index) => {
              const count = userData.filter((user) => user.company === organization).length

              return (
                <li key={organization}>
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span className="truncate font-semibold text-neutral-800 dark:text-neutral-200">{organization}</span>
                    <span className="shrink-0 font-semibold text-neutral-700 dark:text-neutral-300">{count}</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
                    <div
                      className={`h-full rounded-full ${organizationTones[index % organizationTones.length]}`}
                      style={{ width: `${(count / userData.length) * 100}%` }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-neutral-700 dark:text-neutral-300">{count} {count === 1 ? 'member' : 'members'}</p>
                </li>
              )
            })}
          </ul>
        </aside>
      </div>
    </section>
  )
}

export default Users