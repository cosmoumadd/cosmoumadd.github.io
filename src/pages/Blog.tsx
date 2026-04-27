export default function Blog() {
  return (
    <section id="blog" className="min-h-screen bg-slate-950 text-slate-100 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-mono tracking-widest text-cyan-400">BLOG</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Posts</h2>
          <p className="text-slate-400 text-lg">Writing about software, CS concepts, and projects. Coming soon.</p>
        </div>

        <div className="border border-dashed border-slate-800 rounded-xl p-12 text-center">
          <p className="text-slate-600 font-mono text-sm">// TODO: write first post</p>
        </div>
      </div>
    </section>
  )
}