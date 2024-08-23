import { GoArrowUpRight } from 'react-icons/go'

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm dark:text-dark mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0">
        <li>
          <a
            className="dark:hover:text-neutral flex items-center transition-all hover:text-neutral-400"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/marcfernandezo"
          >
            <GoArrowUpRight />
            <p className="ml-2 h-7">linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="dark:hover:text-neutral flex items-center transition-all hover:text-neutral-400"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/marrcoz"
          >
            <GoArrowUpRight />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
      </ul>
      <p className="text-bla mt-8">
        © {new Date().getFullYear()} marcfernandez.dev
      </p>
    </footer>
  )
}
