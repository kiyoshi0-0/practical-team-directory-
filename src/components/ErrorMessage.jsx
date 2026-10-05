function ErrorMessage({ title = 'Nothing to show', message = 'Try again in a moment.' }) {
  return (
    <div className="particle-surface rounded-md border border-dashed border-neutral-300 px-6 py-12 text-center dark:border-neutral-700" role="alert">
      <p className="font-serif text-2xl font-semibold text-neutral-950 dark:text-white">{title}</p>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-neutral-700 dark:text-neutral-300">{message}</p>
    </div>
  )
}

export default ErrorMessage