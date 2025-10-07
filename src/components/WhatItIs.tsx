export default function WhatItIs() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-text mx-auto">
        <h2 className="text-3xl font-bold mb-8">What It Is</h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Storymark is a notation system for rich, interactive storytelling. Writers create{' '}
            <code className="bg-gray-100 px-2 py-1 rounded text-sm">.syml</code> files with
            simple markup—section breaks, image directives, template declarations. The parser
            transforms this into structured data that works with any rendering system.
          </p>
          <p>
            Unlike traditional markdown, <code className="bg-gray-100 px-2 py-1 rounded text-sm">.syml</code> is
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
