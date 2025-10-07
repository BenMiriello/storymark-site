export default function GetStarted() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-text mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get Started</h2>
        <div className="space-y-4 text-gray-700 mb-8">
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
            className="px-6 py-3 bg-gray-900 text-white rounded hover:bg-gray-800 transition"
          >
            Install Package
          </a>
          <a
            href="https://github.com/BenMiriello/storymark"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-300 rounded hover:border-gray-400 transition"
          >
            View GitHub
          </a>
        </div>
        <p className="text-gray-600 text-sm">
          Feedback welcome. Contributors encouraged.
        </p>
      </div>
    </section>
  )
}
