import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import Layout from './pages/Layout'
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'
import Create from './pages/CreateProgram'
import Current from './pages/Current'
import Completed from './pages/Completed'
import CompletedPrograms from './pages/CompletedPrograms'
import CompletedWeeks from './pages/CompletedWeeks'
import CompletedWeek from './pages/CompletedWeek'
import CompletedDay from './pages/CompletedDay'
import CreateProgram from './pages/CreateProgram'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='workout-schedules/:programId' element={<CompletedWeeks />} />
            <Route path='workout-schedules/:programId/:weekNumber' element={<CompletedWeek />} />
            {/* <Route path=':programay' element={<CompletedDay />} /> */}
            <Route path='*' element={<NoMatch />} />
            <Route path='program-schedules' element={<CompletedPrograms />} />
            <Route exact path='/create' element={<CreateProgram />} />
            <Route exact path='/current' element={<Current />} />  
          </Route>
    
        </Routes>
      </Router>
    </div>
  )
}

export default App