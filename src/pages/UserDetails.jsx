import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Avatar from '../components/Avatar.jsx'
import Button from '../components/Button.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'
import users from '../data/users.js'

function UserDetails({ favorites, onToggleFavorite }) {
  const { id } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const matchingUser = users.find((entry) => entry.id === Number(id))
    setUser(matchingUser ?? null)
  }, [id])

  useEffect(() => {
    document.title = user ? user.name : 'User Not Found'
  }, [user])

  if (!user) {
    return (
      <div className="mx-auto max-w-2xl space-y-5">
        <ErrorMessage
          title="User not found"
          message="That team member is not in this directory."
        />
        <Link className="inline-flex font-semibold text-neutral-900 hover:underline dark:text-neutral-200" to="/users">
          &lt;- Back to Users
        </Link>
      </div>
    )
  }

  const isFavorite = favorites.includes(user.id)
  return (
    <section className="mx-auto max-w-3xl">
      <Link className="text-sm font-semibold text-neutral-900 hover:underline dark:text-neutral-200" to="/users">
        &lt;- Back to Users
      </Link>
      <article className="particle-surface mt-6 overflow-hidden rounded-md border border-slate-200 dark:border-slate-800">
        <div className="h-3 bg-sky-600 dark:bg-sky-400" />
        <div className="p-6 sm:p-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
            <div className="flex items-center gap-5">
              <Avatar name={user.name} id={user.id} className="size-20 font-serif text-2xl" />
              <div>
                <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">Team member</p>
                <h1 className="mt-2 font-serif text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">{user.name}</h1>
                <p className="mt-2 text-slate-700 dark:text-slate-300">{user.role}</p>
              </div>
            </div>
            <Button
              label={isFavorite ? 'Remove favorite' : 'Add favorite'}
              variant="primary"
              onClick={() => onToggleFavorite(user.id)}
              aria-pressed={isFavorite}
            />
          </div>

          <dl className="mt-10 grid gap-6 border-t border-slate-200 pt-7 sm:grid-cols-2 dark:border-slate-800">
            <div>
              <dt className="text-xs font-semibold text-slate-700 dark:text-slate-300">Email</dt>
              <dd className="mt-2 break-all font-medium text-slate-900 dark:text-white">
                <a className="hover:text-neutral-500 dark:hover:text-neutral-300" href={`mailto:${user.email}`}>{user.email}</a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-slate-700 dark:text-slate-300">Company</dt>
              <dd className="mt-2 font-medium text-slate-900 dark:text-white">{user.company}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-slate-700 dark:text-slate-300">Role</dt>
              <dd className="mt-2 font-medium text-slate-900 dark:text-white">{user.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-slate-700 dark:text-slate-300">Directory ID</dt>
              <dd className="mt-2 font-medium text-slate-900 dark:text-white">{user.id}</dd>
            </div>
          </dl>
        </div>
      </article>
    </section>
  )
}

export default UserDetails