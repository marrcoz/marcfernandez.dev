import Link from 'next/link'

const Items = {
  '/': {
    name: 'marcfernandez.dev',
  },
}

export default function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav className="fade relative flex scroll-pr-6 flex-row items-start px-0 pb-0 md:relative md:overflow-auto">
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(Items).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="opacity-80 transition-opacity duration-150 hover:opacity-40"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
