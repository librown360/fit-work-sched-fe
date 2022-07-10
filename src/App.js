import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Header from './components/Header'
import Home from './components/Home'
import Create from './components/Create'
import Current from './components/Current'
import Completed from './components/Completed'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/create' element={<Create />} />
            <Route exact path='/current' element={<Current />} />  
            <Route exact path='/completed' element={<Completed />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App