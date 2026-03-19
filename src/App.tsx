import {SanityApp, type SanityConfig} from '@sanity/sdk-react'
import {ExampleComponent} from './ExampleComponent'
import './App.css'

export function App() {
  const config: SanityConfig[] = [
    {
      projectId: 'your-project-id',
      dataset: 'production',
    },
  ]

  return (
    <div className="app-container">
      <SanityApp config={config} fallback={<div>Loading...</div>}>
        <ExampleComponent />
      </SanityApp>
    </div>
  )
}

export default App
