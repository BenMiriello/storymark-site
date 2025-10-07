export default function HowItWorks() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-code mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-brown-black">How It Works</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-warm-gray">Simple .syml syntax</h3>
            <pre className="bg-slate-blue text-warm-white p-6 rounded overflow-x-auto text-sm border-l-4 border-coral">
{`---
title: Iceland Journey
template: minimal
---

We drove the ring road in late autumn.

---

The highlands stretched endlessly.
@image: highlands.jpg`}
            </pre>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-warm-gray">Renders as...</h3>
            <div className="border-2 border-warm-slate p-6 rounded bg-warm-white space-y-4">
              <div className="space-y-2">
                <p className="text-warm-gray">We drove the ring road in late autumn.</p>
              </div>
              <div className="border-t border-warm-slate pt-4 space-y-2">
                <p className="text-warm-gray">The highlands stretched endlessly.</p>
                <div className="bg-warm-slate h-32 rounded flex items-center justify-center text-warm-gray">
                  [highlands.jpg]
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-8 text-warm-gray">
          Clean syntax. Flexible output. Build your own templates or use ours.
        </p>
      </div>
    </section>
  )
}
