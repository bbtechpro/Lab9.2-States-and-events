import './App.css'
import CharacterCounter from './components/CharacterCounter/CharacterCounter'

function App() {
  return (
    <main id="center">
      <CharacterCounter minWords={50} maxWords={250} targetReadingTime={2} />
    </main>
  )
}

export default App
