export default function ValueProps() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-code mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">For Writers</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Focus on content, not code</li>
              <li>Simple notation</li>
              <li>Media and layout in plain text</li>
              <li>Export anywhere</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">For Developers</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Framework-agnostic core</li>
              <li>TypeScript support</li>
              <li>Extensible template system</li>
              <li>Self-hosting built-in</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">For Everyone</h3>
            <ul className="space-y-2 text-gray-700">
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
