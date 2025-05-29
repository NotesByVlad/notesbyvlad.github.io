import { useState } from 'react'

import Passions from './components/Passions'
import Goals from './components/Goals'
import Career from './components/Career'

const tabs = ["Career", "Goals", "Passions"]

export default function Path() {
  const [activeTab, setActiveTab] = useState(null)

  return (
    
    <div className="p-4 bg-surface rounded-xl shadow-md max-w-3xl mx-auto space-y-4">
      {activeTab && (
        <>
          <div className="flex justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded ${
                activeTab === tab ? "bg-button-bg text-text" : "bg-background hover:bg-button-hover"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
            <button
              onClick={() => setActiveTab(null)}
              className="text-sm text-red-500 hover:underline">
                Back
            </button>

        <div className="pt-4">
          {activeTab === "Passions" && <Passions />}
          {activeTab === "Career" && <Career />}
          {activeTab === "Goals" && <Goals />}
        </div>
        </>
      )}
      {!activeTab && (
        <>
          <div className="flex justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-4 py-2 rounded bg-background hover:bg-button-hover">
                  {tab}
              </button>
            ))}
          </div>

          <h1 className="text-2xl font-bold text-center">My Path</h1>
          <p className="text-center">
            Welcome to my personal journey. Click a section above to learn more about my passions, career path, or goals.
          </p>

        </>
      )}
      
    </div>
  );
}