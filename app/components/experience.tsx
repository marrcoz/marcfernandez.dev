import { GoArrowUpRight } from 'react-icons/go'

export default function Experience() {
  return (
    <section className="mb-16 flex flex-col space-y-4">
      <h1 className="text-xl font-medium">Experience</h1>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="ms-4">
          <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2024 &mdash; Present
          </time>
          <h3 className="text-lg font-semibold text-gray-900">IT Technician</h3>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://bdrinformatica.com/"
          >
            <h3 className="dark:hover:text-neutral flex items-center transition-all hover:text-neutral-400">
              BDR Informática
              <GoArrowUpRight className="ml-1" />
            </h3>
          </a>
          <p className="text-base font-normal text-gray-500 dark:text-gray-600">
            Provides IT consulting, custom software development, technical
            support, network solutions, and cybersecurity services. My role
            involves maintaining and securing the equipment and IT
            infrastructure.
          </p>
        </li>
      </ol>
    </section>
  )
}
