import { Link } from 'react-router-dom'
import Avatar from './Avatar.jsx'
import Button from './Button.jsx'

function UserCard({
  id,
  name,
  email,
  company,
  role,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <article className="particle-surface flex h-full flex-col rounded-md border border-neutral-300 border-t-2 border-t-sky-500 p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-sky-500 hover:shadow-lg dark:border-neutral-800 dark:border-t-sky-400 dark:hover:border-sky-400">
      <div className="flex items-start gap-3">
        <Avatar name={name} id={id} className="size-11 text-sm" />
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-base font-semibold text-neutral-950 dark:text-white">{name}</h2>
          <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{role}</p>
        </div>
      </div>

      <dl className="mt-5 space-y-3 border-t border-neutral-200 pt-4 text-sm dark:border-neutral-800">
        <div>
          <dt className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Organization</dt>
          <dd className="mt-1 font-medium text-neutral-900 dark:text-neutral-100">{company}</dd>
        </div>
        <div className="min-w-0">
          <dt className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">Email</dt>
          <dd className="mt-1 truncate">
            <a className="font-medium text-neutral-800 hover:underline dark:text-neutral-200" href={`mailto:${email}`}>
              {email}
            </a>
          </dd>
        </div>
      </dl>

      <div className="mt-auto flex items-center justify-between gap-3 pt-5">
        <Link
          className="text-sm font-semibold text-neutral-950 hover:underline dark:text-white"
          to={`/users/${id}`}
        >
          View details
        </Link>
        <Button
          label={isFavorite ? 'Saved' : 'Save'}
          variant={isFavorite ? 'primary' : 'secondary'}
          onClick={() => onToggleFavorite(id)}
          aria-label={isFavorite ? `Remove ${name} from favorites` : `Add ${name} to favorites`}
          aria-pressed={isFavorite}
          className="min-h-9 px-3 text-xs"
        />
      </div>
    </article>
  )
}

export default UserCard