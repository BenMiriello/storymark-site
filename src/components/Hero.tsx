export default function Hero() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-text mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Storymark
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-4">
          A declarative markup language for interactive stories
        </p>
        <p className="text-lg text-gray-600 mb-8">
          Write content in <code className="bg-gray-100 px-2 py-1 rounded">.syml</code> notation.
          Render anywhere—React, vanilla JS, or any framework.
        </p>
        <p className="text-base text-gray-500 mb-10">
          Framework-agnostic parser. Extensible templates. No lock-in.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.npmjs.com/package/@storymark/core"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-900 text-white rounded hover:bg-gray-800 transition"
          >
            Try the package
          </a>
          <a
            href="https://github.com/BenMiriello/storymark"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-300 rounded hover:border-gray-400 transition"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
