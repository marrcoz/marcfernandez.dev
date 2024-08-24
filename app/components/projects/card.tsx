import { ReactNode } from 'react'
import { FaGithub } from 'react-icons/fa'
import { GoArrowUpRight } from 'react-icons/go'

type CardProps = {
  title: string
  description: string
  link: string | undefined
  repository: string | undefined
  badge: ReactNode
  topics: string[] | undefined
}

export default function Card({
  title,
  description,
  link,
  repository,
  badge,
  topics,
}: CardProps) {
  return (
    <section className="rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <a
          className="flex items-center font-semibold text-gray-900"
          rel="noopener noreferrer"
          target="_blank"
          href={link}
        >
          {title}
          <GoArrowUpRight className="ml-1 text-gray-500" />
        </a>

        <a
          className="text-gray-500 hover:text-gray-700"
          rel="noopener noreferrer"
          target="_blank"
          href={repository}
        >
          <FaGithub size={20} />
        </a>
      </div>

      <p className="mb-4 text-gray-600">{description}</p>

      <div className="flex flex-wrap gap-2">
        {badge}
        {Array.isArray(topics) && topics.length > 0 ? (
          topics.map((topic, index) => (
            <span
              key={index}
              className="space-x-1 rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-gray-800"
            >
              {topic}
            </span>
          ))
        ) : (
          <span className="text-gray-500">No topics available</span>
        )}
      </div>
    </section>
  )
}
