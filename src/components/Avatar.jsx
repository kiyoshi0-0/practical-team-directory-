const avatarTones = [
  'bg-sky-200 text-sky-950 dark:bg-sky-900 dark:text-sky-100',
  'bg-cyan-200 text-cyan-950 dark:bg-cyan-900 dark:text-cyan-100',
  'bg-teal-200 text-teal-950 dark:bg-teal-900 dark:text-teal-100',
  'bg-orange-200 text-orange-950 dark:bg-orange-900 dark:text-orange-100',
]

function Avatar({ name, id, className = '' }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
  const tone = avatarTones[(id - 1) % avatarTones.length]

  return (
    <span aria-hidden="true" className={`particle-avatar grid shrink-0 place-items-center rounded-md font-bold ${tone} ${className}`}>
      {initials}
    </span>
  )
}

export default Avatar