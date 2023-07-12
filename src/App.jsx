
import './App.css'
import CountTimer from "./components/CountTimer"
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './components/Home'
import QuoteGenerator from './components/QuoteGenerator'
import BMI from './components/BMI'
import GitUS from './components/GitUS'

function App() {
  

  return (
    <div className="home">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/timer' element={<CountTimer/>}/>
        <Route path='/quote' element={<QuoteGenerator />}/>
        <Route  path='/bmicalc' element={<BMI/>}/>
        <Route path='/gituser' element={<GitUS />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
