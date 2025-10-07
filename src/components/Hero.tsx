export default function Hero() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-text mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-brown-black">
          Storymark
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-warm-gray">
          A declarative markup language for interactive stories
        </p>
        <p className="text-lg mb-8 text-warm-gray">
          Write content in <code className="bg-warm-slate px-2 py-1 rounded text-brown-black">.syml</code> notation.
          Render anywhere—React, vanilla JS, or any framework.
        </p>
        <p className="text-base mb-10" style={{ color: '#6a6862' }}>
          Framework-agnostic parser. Extensible templates. No lock-in.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.npmjs.com/package/@storymark/core"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-coral text-warm-white rounded hover:brightness-110 transition font-semibold"
          >
            Try the package
          </a>
          <a
            href="https://github.com/BenMiriello/storymark"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-coral rounded hover:bg-coral hover:text-warm-white transition text-warm-gray font-semibold"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
