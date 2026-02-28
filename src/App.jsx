import { SpeedInsights } from '@vercel/speed-insights/react'
import './App.css'

function App() {
  return (
    <>
      <div className="app">
        <header>
          <h1>🩺 Smart IV Drip Monitor</h1>
          <p>IoT Healthcare Dashboard</p>
        </header>
        <main>
          <div className="dashboard">
            <h2>Real-time IV Drip Monitoring System</h2>
            <p>Monitor intravenous fluid levels and drip rates in real-time.</p>
          </div>
        </main>
      </div>
      <SpeedInsights />
    </>
  )
}

export default App
