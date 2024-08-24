import { FaPython } from 'react-icons/fa'
import { FaReact } from "react-icons/fa";

import Card from 'app/components/projects/card'

export default function Projects() {
  const featuredProjects = [
    {
      title: 'marrcoz/remotedesktop',
      description: 'A custom Remote desktop GUI for Ubuntu ',
      link: 'https://github.com/marrcoz/remotedesktop',
      repository: 'https://github.com/marrcoz/remotedesktop',
      badge: <FaPython className="size-5" color='4584b6' />,
      topics: ['Python', 'Shell', 'Linux', 'Ubuntu'],
    },
    {
      title: 'marrcoz/next-icons',
      description: 'An Icon components library for React',
      link: 'https://github.com/marrcoz/next-icons',
      repository: 'https://github.com/marrcoz/next-icons',
      badge: <FaReact className="size-5" color='61dbfb' />,
      topics: ['Library', 'Components', 'React', 'Typescript'],
    },
  ]

  return (
    <div className="mb-16 flex flex-col space-y-4">
      <h1 className="text-xl font-medium">Projects</h1>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            repository={project.repository}
            badge={project.badge}
            topics={project.topics}
          />
        ))}
      </div>
    </div>
  )
}
