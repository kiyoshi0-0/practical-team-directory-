const variants = {
  primary:
    'bg-sky-600 text-white hover:bg-sky-500 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300',
  secondary:
    'border border-neutral-300 bg-white text-neutral-800 hover:border-neutral-950 hover:text-black dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-white dark:hover:text-white',
  danger:
    'border border-neutral-300 bg-neutral-200 text-neutral-950 hover:bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700',
}

function Button({
  label,
  onClick,
  variant = 'primary',
  children,
  type = 'button',
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 dark:focus-visible:outline-sky-300 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant] ?? variants.primary} ${className}`}
      {...props}
    >
      {children ?? label}
    </button>
  )
}

export default Button