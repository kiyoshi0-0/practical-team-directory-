function Loader({ label = 'Loading...' }) {
  return (
    <div className="flex min-h-56 flex-col items-center justify-center gap-4" role="status">
      <span className="size-9 animate-spin rounded-full border-4 border-neutral-200 border-t-neutral-950 dark:border-neutral-800 dark:border-t-white" />
      <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">{label}</span>
    </div>
  )
}

export default Loader