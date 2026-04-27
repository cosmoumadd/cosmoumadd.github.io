const skills = {
  'Proficient': ['Java', 'Python', 'C#', 'SQL (Oracle / MySQL)'],
  'Comfortable': ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'PHP', 'JSP'],
  'Learning': ['React', 'Node.js', 'TypeScript', 'Spring Boot'],
}

const skillColors: Record<string, string> = {
  'Proficient': 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20',
  'Comfortable': 'bg-indigo-400/10 text-indigo-300 border-indigo-400/20',
  'Learning': 'bg-slate-700/50 text-slate-300 border-slate-600/30',
}

const experience = [
  {
    role: 'Full Stack Developer (Intern)',
    org: 'Smart City Innovation Centre',
    period: 'Jul – Aug 2024',
    desc: 'Developed web applications, managed databases, and implemented IoT features to enhance user experience.',
  },
]

const education = [
  {
    degree: 'BSc in Computer Science',
    school: 'City University of Hong Kong',
    period: '2025 – Present',
    detail: 'Year 3 · Expected graduation 2027 · CGPA 2.8',
  },
  {
    degree: 'Higher Diploma in Software Engineering',
    school: 'HKIVE (Tsing Yi)',
    period: '2023 – 2025',
    detail: 'Cumulative GPA 3.78 / 4.00 · All technical modules A- or above',
  },
]

const activities = [
  'WorldSkill Hong Kong Competition 2025 — Outstanding Performance',
  'Hong Kong Olympiad in Informatics — Participant',
  'Hong Kong Student Science Project Competition 2021 — Participant',
]

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-950 text-slate-100 py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-mono tracking-widest text-cyan-400">ABOUT</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Who I am</h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            CS Year 3 student at CityU HK with a strong foundation in OOP, software engineering, and web
            technology. I've shipped IoT-integrated web apps in production and I'm always pushing toward
            cleaner architecture and better UX.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-slate-200">Technical Skills</h3>
          <div className="space-y-5">
            {Object.entries(skills).map(([level, techs]) => (
              <div key={level} className="flex flex-wrap items-start gap-3">
                <span className="w-28 text-xs font-mono text-slate-500 pt-1 shrink-0">{level}</span>
                <div className="flex flex-wrap gap-2">
                  {techs.map((t) => (
                    <span
                      key={t}
                      className={`px-3 py-1 text-xs border rounded-full ${skillColors[level]}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-slate-200">Experience</h3>
          <div className="space-y-6">
            {experience.map((e) => (
              <div
                key={e.role}
                className="border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition-colors"
              >
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <div>
                    <h4 className="font-semibold text-slate-100">{e.role}</h4>
                    <p className="text-sm text-cyan-400">{e.org}</p>
                  </div>
                  <span className="text-xs font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded">
                    {e.period}
                  </span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-slate-200">Education</h3>
          <div className="relative border-l border-slate-800 pl-6 space-y-8">
            {education.map((ed) => (
              <div key={ed.degree} className="relative">
                <div className="absolute -left-[29px] w-3 h-3 rounded-full bg-cyan-500 border-2 border-slate-950 top-1" />
                <h4 className="font-semibold text-slate-100">{ed.degree}</h4>
                <p className="text-sm text-cyan-400">{ed.school}</p>
                <p className="text-xs font-mono text-slate-500 mt-1">{ed.period}</p>
                <p className="text-sm text-slate-400 mt-1">{ed.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-slate-200">Activities & Awards</h3>
          <ul className="space-y-3">
            {activities.map((a) => (
              <li key={a} className="flex items-start gap-3 text-sm text-slate-400">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-slate-200">Languages</h3>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <span><span className="text-slate-200 font-medium">English</span> — Intermediate</span>
            <span><span className="text-slate-200 font-medium">Cantonese</span> — Native</span>
            <span><span className="text-slate-200 font-medium">Mandarin</span> — Intermediate</span>
          </div>
        </div>
      </div>
    </section>
  )
}