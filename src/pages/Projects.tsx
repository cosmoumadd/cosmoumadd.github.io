import PageIntro from '../components/PageIntro'
import PageSection from '../components/PageSection'
import Pill from '../components/Pill'

const projects = [
  {
    title: 'VISTA',
    tag: 'Higher diploma Final Year Project',
    tagColor: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/5',
    desc: 'Assistive mobile app for visually impaired individuals. Provides real-time voice navigation, object recognition, and environmental awareness to enhance independence and quality of life.',
    stack: ['React Native', 'Python', 'Computer Vision', 'TTS/ASR'],
    link: 'https://github.com/HarryManHK/Vista',
  },
  {
    title: 'Smart City IoT Web App',
    tag: 'Internship Project',
    tagColor: 'text-indigo-400 border-indigo-400/30 bg-indigo-400/5',
    desc: 'Full-stack web application developed at Smart City Innovation Centre. Integrated IoT sensor data pipelines, database management, and a responsive frontend to deliver real-time city analytics.',
    stack: ['JavaScript', 'PHP', 'MySQL', 'IoT APIs', 'Bootstrap'],
    link: 'https://github.com/cosmoumadd/Iot_Website',
  },
  {
    title: 'Personal Portfolio',
    tag: 'Ongoing',
    tagColor: 'text-slate-400 border-slate-600/30 bg-slate-700/20',
    desc: 'This website — built from scratch with React, TypeScript, and Tailwind CSS. Continuously evolved as a live showcase of my work and skills.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    link: 'https://cosmoumadd.github.io/',
  },
  {
    title: 'Music toolkit (Building in progress 10%)',
    tag: 'Personal Project',
    tagColor: 'text-purple-400 border-purple-400/30 bg-purple-400/5',
    desc: 'A simple music creation tool built with Svelte + TypeScript + Tailwind CSS. Allows users to explore music theory and practice tool such as metronome.',
    stack: ['Svelte', 'TypeScript', 'Tailwind CSS'],
    link: 'https://cosmoumadd.github.io/MusicToolkit/',
  }
]

export default function Projects() {
  return (
    <PageSection id="projects">
      <PageIntro eyebrow="PROJECTS" title="Some Projects I've Built">
        A curated list of projects ranging from assistive tech to full-stack IoT platforms.
      </PageIntro>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.title}
              className="flex flex-col border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition-colors duration-200 group"
            >
              <div className="flex items-center justify-between mb-3">
                <Pill className={`font-mono px-2 py-0.5 ${p.tagColor}`}>
                  {p.tag}
                </Pill>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-600 hover:text-slate-300 transition-colors text-sm"
                    aria-label="View project"
                  >
                    ↗
                  </a>
                )}
              </div>

              <h3 className="font-semibold text-slate-100 text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-4">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {p.stack.map((s) => (
                  <Pill
                    key={s}
                    shape="rounded"
                    className="text-slate-500 border-slate-800 px-2 py-0.5 bg-slate-900"
                  >
                    {s}
                  </Pill>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/cosmoumadd"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg transition-colors text-sm"
          >
            View all on GitHub ↗
          </a>
        </div>
    </PageSection>
  )
}
