export default function ReactTemplates() {
  return (
    <section className="py-16 px-6 bg-warm-slate">
      <div className="max-w-text mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-brown-black">Templates for React</h2>
        <div className="space-y-6 text-warm-gray">
          <p>
            <code className="bg-warm-white px-2 py-1 rounded text-brown-black">@storymark/react</code> provides
            components, hooks, and a template registration system. Build custom layouts or use
            provided templates.
          </p>
          <div className="bg-slate-blue text-warm-white p-4 rounded border-l-4 border-coral">
            <code>npm install @storymark/react</code>
          </div>
          <p>
            Template library growing. Template builder in development.
          </p>
        </div>
      </div>
    </section>
  )
}
