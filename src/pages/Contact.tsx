import PageIntro from '../components/PageIntro'
import PageSection from '../components/PageSection'

const links = [
  { label: 'Email', value: 'wongman2244@gmail.com', href: 'mailto:wongman2244@gmail.com' },
  { label: 'GitHub', value: 'github.com/cosmoumadd', href: 'https://github.com/cosmoumadd' },
  { label: 'LinkedIn', value: 'linkedin.com/in/cosmo-wong-084161342', href: 'https://www.linkedin.com/in/cosmo-wong-084161342/' },
  { label: 'Website', value: 'cosmoumadd.github.io', href: 'https://cosmoumadd.github.io/' },
]

export default function Contact() {
  return (
    <PageSection id="contact" maxWidth="narrow">
      <PageIntro eyebrow="CONTACT" title="Get in touch" descriptionClassName="">
        Currently looking for internship / junior developer opportunities. Open to full-stack,
        backend, or IoT-adjacent roles. Drop a message anytime.
      </PageIntro>

        <div className="space-y-4">
          {links.map((l, index) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="scroll-reveal group flex items-center justify-between rounded-xl border border-slate-800 p-5 transition-all hover:border-slate-600 hover:bg-slate-900/50"
              style={{ '--reveal-delay': `${index * 80}ms` } as React.CSSProperties}
            >
              <div>
                <p className="text-xs font-mono text-slate-500 mb-0.5">{l.label}</p>
                <p className="text-slate-200 text-sm">{l.value}</p>
              </div>
              <span className="text-slate-600 group-hover:text-slate-300 transition-colors text-lg">↗</span>
            </a>
          ))}
        </div>

        <p className="text-xs text-slate-600 mt-10 text-center font-mono">
          Hong Kong · UTC+8 · Response within 24h
        </p>
    </PageSection>
  )
}
