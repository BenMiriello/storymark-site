export default function Roadmap() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-text mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-brown-black">What's Next</h2>
        <div className="space-y-6 text-warm-gray">
          <div>
            <h3 className="font-semibold mb-3 text-brown-black">In Development:</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Visual template builder</li>
              <li>Rich template library</li>
              <li>Additional framework support (Vue, Svelte)</li>
              <li>CLI tools for content validation</li>
              <li>Static site generator integration</li>
            </ul>
          </div>
          <p className="text-sm pt-4 border-t border-warm-slate">
            <span className="font-semibold text-brown-black">Available now:</span> Core parser, React package, basic templates.
            <br />
            <span className="font-semibold text-brown-black">Available soon:</span> Hosted template gallery, editor integrations.
          </p>
        </div>
      </div>
    </section>
  )
}
