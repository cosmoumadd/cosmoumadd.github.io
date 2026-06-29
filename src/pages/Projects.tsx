import PageIntro from '../components/PageIntro'
import PageSection from '../components/PageSection'
import Pill from '../components/Pill'

const projects = [
  {
    title: 'VISTA',
    tag: 'Higher Diploma Final Year Project',
    tagColor: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/5',
    solution: 'An assistive mobile app that combines voice navigation, object recognition, and environmental awareness to help visually impaired users navigate daily surroundings more independently.',
    contribution: 'Contributed to the accessible mobile experience and integration of computer-vision and text-to-speech features.',
    outcome: 'Strengthened my ability to translate accessibility needs into a practical, multimodal product.',
    stack: ['React Native', 'Python', 'Computer Vision', 'TTS/ASR'],
    link: 'https://github.com/HarryManHK/Vista',
  },
  {
    title: 'Smart City IoT Web App',
    tag: 'Internship Project',
    tagColor: 'text-indigo-400 border-indigo-400/30 bg-indigo-400/5',
    solution: 'A responsive full-stack platform that turns live IoT sensor data into clear, accessible city insights for users.',
    contribution: 'Co-developed the interface, connected sensor APIs, and supported database-backed data synchronisation.',
    outcome: 'Delivered a smoother way to monitor connected devices while gaining hands-on experience with production-oriented IoT integration.',
    stack: ['JavaScript', 'PHP', 'MySQL', 'IoT APIs', 'Bootstrap'],
    link: 'https://github.com/cosmoumadd/Iot_Website',
  },
  {
    title: 'Personal Portfolio',
    tag: 'Ongoing',
    tagColor: 'text-slate-400 border-slate-600/30 bg-slate-700/20',
    solution: 'A responsive portfolio that gives recruiters and collaborators a concise view of my skills, experience, and selected work.',
    contribution: 'Designed and built the site from scratch, including its component system, responsive layout, routing, and interactions.',
    outcome: 'Created a maintainable professional presence that can evolve alongside my experience and projects.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    link: 'https://cosmoumadd.github.io/',
  },
  {
    title: 'Music Toolkit',
    tag: 'In Development',
    tagColor: 'text-purple-400 border-purple-400/30 bg-purple-400/5',
    solution: 'A browser-based toolkit that brings music theory references and practice aids, including a metronome, into one approachable workspace.',
    contribution: 'Defined the product direction and am building the interface and interactive tools with Svelte and TypeScript.',
    outcome: 'An ongoing project for developing stronger component design and browser-audio interaction skills.',
    stack: ['Svelte', 'TypeScript', 'Tailwind CSS'],
    link: 'https://cosmoumadd.github.io/MusicToolkit/',
  },
]

export default function Projects() {
  return (
    <PageSection id="projects">
      <PageIntro eyebrow="PROJECTS" title="Selected Work & Outcomes">
        Practical projects spanning accessible technology, full-stack IoT, and interactive web experiences.
      </PageIntro>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-card scroll-reveal group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-950 p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
            style={{ '--reveal-delay': `${index * 100}ms` } as React.CSSProperties}
            aria-label={`View ${project.title} project`}
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <Pill className={`px-2 py-0.5 font-mono ${project.tagColor}`}>{project.tag}</Pill>
              <span className="project-arrow flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-800 text-slate-500" aria-hidden="true">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>

            <h3 className="mb-3 text-xl font-semibold text-slate-100 transition-colors group-hover:text-cyan-300">{project.title}</h3>
            <p className="mb-4 text-sm leading-relaxed text-slate-400">{project.solution}</p>

            <div className="mb-5 space-y-3 border-l border-slate-800 pl-4 text-sm leading-relaxed">
              <p className="text-slate-400"><span className="font-medium text-slate-200">Contribution:</span> {project.contribution}</p>
              <p className="text-slate-400"><span className="font-medium text-slate-200">Outcome:</span> {project.outcome}</p>
            </div>

            <div className="mt-auto flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <Pill key={technology} shape="rounded" className="border-slate-800 bg-slate-900 px-2 py-0.5 text-slate-500">
                  {technology}
                </Pill>
              ))}
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com/cosmoumadd"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-sm text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          View all on GitHub
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </PageSection>
  )
}
