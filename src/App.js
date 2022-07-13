import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import Layout from './pages/Layout'
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'
import Current from './pages/Current'
import Completed from './pages/Completed'
import CompletedPrograms from './pages/CompletedPrograms'
import CompletedWeeks from './pages/CompletedWeeks'
import CompletedWeek from './pages/CompletedWeek'
import CompletedDay from './pages/CompletedDay'
import CreateProgram from './pages/CreateProgram'
import CreateWorkoutSchedule from './pages/CreateWorkoutSchedule'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='/completed-programs' element={<CompletedPrograms />} />
            <Route path='workout-schedules/:programId' element={<CompletedWeeks />} />
            <Route path='/create-program' element={<CreateProgram />} />

            {/* <Route path=':programay' element={<CompletedDay />} /> */}
            <Route path='*' element={<NoMatch />} />
            {/* Still needs to be worked on */}
            <Route path='/create-workout-schedule' element={<CreateWorkoutSchedule />} />
            <Route path='workout-schedules/:programId/:weekNumber' element={<CompletedWeek />} />
            <Route path='/current-program' element={<Current />} />  
          </Route>
    
        </Routes>
      </Router>
    </div>
  )
}

export default App