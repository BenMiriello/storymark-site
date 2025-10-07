export default function ValueProps() {
  return (
    <section className="py-16 px-6 bg-warm-slate">
      <div className="max-w-code mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-brown-black">For Writers</h3>
            <ul className="space-y-2 text-warm-gray">
              <li>Focus on content, not code</li>
              <li>Simple notation</li>
              <li>Media and layout in plain text</li>
              <li>Export anywhere</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-brown-black">For Developers</h3>
            <ul className="space-y-2 text-warm-gray">
              <li>Framework-agnostic core</li>
              <li>TypeScript support</li>
              <li>Extensible template system</li>
              <li>Self-hosting built-in</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-brown-black">For Everyone</h3>
            <ul className="space-y-2 text-warm-gray">
              <li>No vendor lock-in</li>
              <li>File-based, version-controllable</li>
              <li>Free core tools</li>
              <li>Growing ecosystem</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
