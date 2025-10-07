import Hero from './components/Hero'
import WhatItIs from './components/WhatItIs'
import HowItWorks from './components/HowItWorks'
import ValueProps from './components/ValueProps'
import CorePackage from './components/CorePackage'
import ReactTemplates from './components/ReactTemplates'
import Roadmap from './components/Roadmap'
import UseCases from './components/UseCases'
import GetStarted from './components/GetStarted'

function App() {
  return (
    <div className="min-h-screen bg-warm-white text-warm-gray">
      <Hero />
      <WhatItIs />
      <HowItWorks />
      <ValueProps />
      <CorePackage />
      <ReactTemplates />
      <Roadmap />
      <UseCases />
      <GetStarted />
    </div>
  )
}

export default App
