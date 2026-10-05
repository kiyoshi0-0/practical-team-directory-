import { Link } from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage.jsx'

function NotFound() {
  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <ErrorMessage title="404 - Page not found" message="This page is not part of the directory." />
      <Link className="inline-flex font-semibold text-neutral-900 hover:underline dark:text-neutral-200" to="/">
        Return home
      </Link>
    </div>
  )
}

export default NotFound