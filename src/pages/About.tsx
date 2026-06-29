import PageSection from '../components/PageSection'
import Pill from '../components/Pill'

const skillGroups = [
  {
    label: 'Programming',
    skills: ['Java', 'Python', 'C#', 'C/C++', 'SQL', 'HTML', 'CSS', 'JavaScript', 'PHP', 'JSP', 'TypeScript', 'Visual Basic'],
    colors: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20',
  },
  {
    label: 'Frameworks',
    skills: ['React', 'Node.js', 'Vue', 'Vite', 'Tailwind CSS', 'Svelte', 'Bootstrap 5', 'Spring Boot', 'RESTful APIs'],
    colors: 'bg-indigo-400/10 text-indigo-300 border-indigo-400/20',
  },
  {
    label: 'Data & ML',
    skills: ['TensorFlow', 'PyTorch', 'FastAPI'],
    colors: 'bg-violet-400/10 text-violet-300 border-violet-400/20',
  },
  {
    label: 'Tools',
    skills: ['Git', 'Docker', 'AWS Management Console', 'Canva', 'PowerPoint', 'Excel', 'Word'],
    colors: 'bg-slate-700/50 text-slate-300 border-slate-600/30',
  },
  {
    label: 'General',
    skills: ['Cangjie typing'],
    colors: 'bg-slate-700/50 text-slate-300 border-slate-600/30',
  },
]

const experience = [
  {
    role: 'Project Officer',
    org: 'Smart City Innovation Centre',
    period: 'Aug 2024',
    desc: 'Co-developed a responsive web application and integrated IoT sensor data through APIs, improving data synchronisation and the overall user experience.',
  },
]

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'City University of Hong Kong',
    period: '2025 - Current',
    detail: 'GPA 2.79',
    desc: 'Developing advanced project integration skills and a deeper understanding of computer logic and programming.',
  },
  {
    degree: 'Higher Diploma in Software Engineering',
    school: 'Hong Kong Institute of Vocational Education',
    period: '2023 - 2025',
    detail: 'GPA 3.78',
    desc: 'Studied software architecture, CI/CD, project management, and team collaboration.',
  },
  {
    degree: 'Hong Kong Diploma of Secondary Education (DSE)',
    school: '',
    period: '2022',
    detail: 'Level 4 in Mathematics, M1, and ICT; Level 3 in Chinese and Economics',
    desc: '',
  },
]

const activities = [
  {
    name: 'WorldSkills Hong Kong Competition',
    year: '2025',
    result: 'Participant with outstanding performance',
    desc: 'Applied advanced CSS animation and worked with React, Laravel, Vue, Next.js, Express, and other web frameworks.',
  },
  {
    name: 'Huawei ICT Competition Hong Kong SAR 2023-24',
    year: '2023',
    result: 'Participant',
    desc: 'Built knowledge of cloud computing and cloud platform management, including Huawei Cloud and AWS.',
  },
  {
    name: 'Hong Kong Olympiad in Informatics',
    year: '2021',
    result: 'Participant',
    desc: '',
  },
  {
    name: 'Hong Kong Student Science Project Competition',
    year: '2021',
    result: 'Participant',
    desc: '',
  },
  {
    name: 'AI Challenge X Slope Safety - AI Workshop and Competition',
    year: '2021',
    result: '1st Runner-Up; participated with AWS DeepLens',
    desc: 'Developed a machine-learning approach to improve traffic signal object detection using AWS for a competition organised by the Geotechnical Engineering Office of CEDD.',
  },
]

const scholarships = [
  {
    name: 'HKSAR Government Scholarship Fund - Reaching Out Award',
    period: 'July 2025',
    desc: "Completed an overseas academic exchange at Temasek Polytechnic, immersing in Singapore's diverse culture.",
  },
  {
    name: 'HKSAR Government Scholarship Fund - Endeavour Merit Award',
    period: 'April 2025',
    desc: '',
  },
]

export default function About() {
  return (
    <PageSection id="about" compactOnMobile>
        {/* Profile */}
        <div className="mb-16 grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <img
            src="/cosmo-profile.png"
            alt="Portrait of Cosmo Wong"
            className="h-36 w-36 rounded-full border-4 border-slate-800 bg-slate-900 object-cover"
          />
          <div>
            <span className="text-xs font-mono tracking-widest text-cyan-400">ABOUT</span>
            <h2 className="text-4xl font-bold mt-2 mb-2">Wong Yuk Man (Cosmo)</h2>
            <p className="text-sm font-mono tracking-widest text-indigo-300 mb-4">SOFTWARE ENGINEER</p>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              Proficient in object-oriented programming, web architecture, and software design patterns,
              with experience developing accessible mobile applications and IoT-integrated web solutions.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <a href="mailto:wongman2244@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                wongman2244@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/cosmo-wong-084161342/"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://cosmoumadd.github.io/"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                cosmoumadd.github.io
              </a>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-slate-200">Technical & General Skills</h3>
          <div className="space-y-5">
            {skillGroups.map(({ label, skills, colors }) => (
              <div key={label} className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-3">
                <span className="sm:w-32 text-xs font-mono text-slate-500 pt-1 shrink-0">{label}</span>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Pill key={skill} className={`px-3 py-1 ${colors}`}>
                      {skill}
                    </Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-slate-200">Work Experience</h3>
          {experience.map((item) => (
            <div key={item.role} className="border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition-colors">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                <div>
                  <h4 className="font-semibold text-slate-100">{item.role}</h4>
                  <p className="text-sm text-cyan-400">{item.org}</p>
                </div>
                <span className="text-xs font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded">{item.period}</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-slate-200">Education</h3>
          <div className="relative border-l border-slate-800 pl-6 space-y-8">
            {education.map((item) => (
              <div key={item.degree} className="relative">
                <div className="absolute -left-[29px] w-3 h-3 rounded-full bg-cyan-500 border-2 border-slate-950 top-1" />
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4 className="font-semibold text-slate-100">{item.degree}</h4>
                    {item.school && <p className="text-sm text-cyan-400">{item.school}</p>}
                  </div>
                  <span className="text-xs font-mono text-slate-500">{item.period}</span>
                </div>
                <p className="text-sm text-slate-300 mt-2">{item.detail}</p>
                {item.desc && <p className="text-sm text-slate-400 mt-1 leading-relaxed">{item.desc}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Competitions */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-slate-200">Competitions & Activities</h3>
          <div className="space-y-5">
            {activities.map((item) => (
              <div key={item.name} className="border-l-2 border-slate-800 pl-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h4 className="font-semibold text-slate-100">{item.name}</h4>
                  <span className="text-xs font-mono text-slate-500">{item.year}</span>
                </div>
                <p className="text-sm text-cyan-400 mt-1">{item.result}</p>
                {item.desc && <p className="text-sm text-slate-400 mt-1 leading-relaxed">{item.desc}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Scholarships */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-slate-200">Scholarships</h3>
          <div className="space-y-5">
            {scholarships.map((item) => (
              <div key={item.name} className="border border-slate-800 rounded-xl p-5">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h4 className="font-semibold text-slate-100">{item.name}</h4>
                  <span className="text-xs font-mono text-slate-500">{item.period}</span>
                </div>
                {item.desc && <p className="text-sm text-slate-400 mt-2 leading-relaxed">{item.desc}</p>}
              </div>
            ))}
          </div>
        </div>

    </PageSection>
  )
}
