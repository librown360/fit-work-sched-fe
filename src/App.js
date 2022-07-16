import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import Layout from './pages/Layout'
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'
import CompletedPrograms from './pages/CompletedPrograms'
import CurrentProgramList from './pages/CurrentProgramList'
import CreateProgram from './pages/CreateProgram'


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='completed-schedules' element={<CompletedPrograms />} />
            <Route path='current-schedule' element={<CurrentProgramList /> } />
            <Route path='create-schedule' element={<CreateProgram />} />
            <Route path='*' element={<NoMatch />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

// function 

export default App