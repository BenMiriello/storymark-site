export default function WhatItIs() {
  return (
    <section className="py-16 px-6 bg-warm-slate">
      <div className="max-w-text mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-brown-black">What It Is</h2>
        <div className="space-y-6 leading-relaxed text-warm-gray">
          <p>
            Storymark is a notation system for rich, interactive storytelling. Writers create{' '}
            <code className="bg-warm-white px-2 py-1 rounded text-sm text-brown-black">.syml</code> files with
            simple markup—section breaks, image directives, template declarations. The parser
            transforms this into structured data that works with any rendering system.
          </p>
          <p>
            Unlike traditional markdown, <code className="bg-warm-white px-2 py-1 rounded text-sm text-brown-black">.syml</code> is
            built for multi-section narratives with media, layouts, and interactivity. Unlike CMSs,
            it's just files and code—no database, no vendor dependency.
          </p>
          <p>
            The core parser is framework-agnostic. React components exist. More frameworks coming.
          </p>
        </div>
      </div>
    </section>
  )
}
