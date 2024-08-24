import Projects from 'app/components/projects'
import Experience from 'app/components/experience'

export default function Home() {
  return (
    <main>
      <div className="mb-16">
        <h1>
          I'm <span className="font-semibold">Marc Fernandez</span>, a IT
          Technician and fullstack web developer. I have experience in Node.js,
          JavaScript, and React.
        </h1>
      </div>

      <Projects />

      <Experience />

    </main>
  )
}
