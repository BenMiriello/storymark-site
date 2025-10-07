export default function CorePackage() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-text mx-auto">
        <h2 className="text-3xl font-bold mb-6">The Foundation</h2>
        <div className="space-y-6 text-gray-700">
          <p>
            <code className="bg-gray-100 px-2 py-1 rounded">@storymark/core</code> parses{' '}
            <code className="bg-gray-100 px-2 py-1 rounded">.syml</code> files into structured JSON.
            Framework-agnostic. Zero UI dependencies.
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded">
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
