import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { useState } from 'react'

// Pages
import Layout from './pages/Layout'
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'
import Current from './pages/Current'
import Completed from './pages/possibleRemove/Completed'
import CompletedPrograms from './pages/CompletedPrograms'
import CompletedWeeksList from './pages/CompletedWeeksList'
import CompletedWeek from './pages/CompletedWeek'
import CompletedDay from './pages/possibleRemove/CompletedDay'
import CreateProgram from './pages/CreateProgram'
import ShowProgramCard from './pages/ShowProgramCard'
import { useState } from 'react'

function App() {

  // const [programId] = useState()

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='completed-schedules' element={<CompletedPrograms />} />
            <Route path='workout-schedule/:programId' element={<CompletedWeeksList />} />
            <Route path='workout-schedule/:programId/:weekNumber' element={<CompletedWeek />} />
            <Route path='create-schedule' element={<CreateProgram />} />
            <Route path='show-schedule' element={<ShowProgramCard />} />
            {/* <Route path=':programay' element={<CompletedDay />} /> */}
            <Route path='*' element={<NoMatch />} />
            {/* Still needs to be worked on */}
            
            
            <Route path='/current-program' element={<Current />} />  
          </Route>
    
        </Routes>
      </Router>
    </div>
  )
}

// function 

export default App