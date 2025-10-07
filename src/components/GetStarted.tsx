export default function GetStarted() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-text mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-brown-black">Get Started</h2>
        <div className="space-y-4 mb-8 text-warm-gray">
          <p>
            Storymark is in active development. Core parser is stable.
            React package functional. More coming.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <a
            href="https://www.npmjs.com/package/@storymark/core"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-coral text-warm-white rounded hover:brightness-110 transition font-semibold"
          >
            Install Package
          </a>
          <a
            href="https://github.com/BenMiriello/storymark"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-coral rounded hover:bg-coral hover:text-warm-white transition text-warm-gray font-semibold"
          >
            View GitHub
          </a>
        </div>
        <p className="text-sm text-warm-gray">
          Feedback welcome. Contributors encouraged.
        </p>
      </div>
    </section>
  )
}
