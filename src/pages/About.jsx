function About() {
  return (
    <section className="mx-auto max-w-3xl">
      <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">About the directory</p>
      <h1 className="mt-3 font-serif text-4xl font-semibold text-slate-950 dark:text-white sm:text-5xl">Better work is shared work.</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
        Team Directory is a small, local-first space for finding the people you work with. Browse profiles, keep favorite collaborators close, and find the right teammate without leaving the page.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="particle-surface rounded-md border border-slate-200 p-6 dark:border-slate-800">
          <p className="font-serif text-xl font-semibold text-slate-950 dark:text-white">Private by design</p>
          <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">Profiles are bundled with the app. No external API or service is used.</p>
        </div>
        <div className="particle-surface rounded-md border border-slate-200 p-6 dark:border-slate-800">
          <p className="font-serif text-xl font-semibold text-slate-950 dark:text-white">Made for people</p>
          <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">A few useful details make it easier to find the right person and start a conversation.</p>
        </div>
      </div>
    </section>
  )
}

export default About