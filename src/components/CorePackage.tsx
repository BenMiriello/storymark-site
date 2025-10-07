export default function CorePackage() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-text mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-brown-black">The Foundation</h2>
        <div className="space-y-6 text-warm-gray">
          <p>
            <code className="bg-warm-slate px-2 py-1 rounded text-brown-black">@storymark/core</code> parses{' '}
            <code className="bg-warm-slate px-2 py-1 rounded text-brown-black">.syml</code> files into structured JSON.
            Framework-agnostic. Zero UI dependencies.
          </p>
          <div className="bg-slate-blue text-warm-white p-4 rounded border-l-4 border-coral">
            <code>npm install @storymark/core</code>
          </div>
          <p>
            Works with React, Vue, Svelte, vanilla JS, or custom renderers.
          </p>
        </div>
      </div>
    </section>
  )
}
