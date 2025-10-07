export default function HowItWorks() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-code mx-auto">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-600">Simple .syml syntax</h3>
            <pre className="bg-gray-900 text-gray-100 p-6 rounded overflow-x-auto text-sm">
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
            <h3 className="text-lg font-semibold mb-4 text-gray-600">Renders as...</h3>
            <div className="border border-gray-200 p-6 rounded bg-white space-y-4">
              <div className="space-y-2">
                <p className="text-gray-700">We drove the ring road in late autumn.</p>
              </div>
              <div className="border-t pt-4 space-y-2">
                <p className="text-gray-700">The highlands stretched endlessly.</p>
                <div className="bg-gray-200 h-32 rounded flex items-center justify-center text-gray-500">
                  [highlands.jpg]
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-600 mt-8">
          Clean syntax. Flexible output. Build your own templates or use ours.
        </p>
      </div>
    </section>
  )
}
