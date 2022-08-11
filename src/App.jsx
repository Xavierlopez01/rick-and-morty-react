import './App.css'
import image from "../public/title.png"
import CardCharacters from './components/CardCharacters'

function App() {
  

  return (
    <div className="App">
      <div >
      <img src={image} alt="" />
      </div>
      
      <CardCharacters />
      
    </div>
  )
}

export default App
