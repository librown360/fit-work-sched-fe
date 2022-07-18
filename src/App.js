import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


// Pages
import Layout from './pages/Layout'
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'
import CompletedPrograms from './pages/CompletedPrograms'
import CompletedWeeks from './pages/CompletedWeeks'
import CompletedWeek from './pages/CompletedWeek'
import CurrentPrograms from './pages/CurrentPrograms'
import CurrentWeeks from './pages/CurrentWeeks'
import CurrentWeek from './pages/CurrentWeek'
import CreateProgram from './pages/CreateProgram'
import NewSchedule from './pages/NewSchedule'
import EditProgram from './pages/EditProgram'


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='completed-schedules' element={<CompletedPrograms />} />
            <Route path='completed-weeks/:programId' element={<CompletedWeeks />} />
            <Route path='completed-week/:programId/:weekNumber' element={<CompletedWeek />} />
            <Route path='current-schedules' element={<CurrentPrograms /> } />
            <Route path='current-weeks/:programId' element={<CurrentWeeks />} />
            <Route path='current-week/:programId/:weekNumber' element={<CurrentWeek />} />
            <Route path='create-schedule' element={<CreateProgram />} />
            <Route path='create-schedule/:programId' element={<NewSchedule />} />
            <Route path='edit-schedule/:programId' element={<EditProgram />} />
            <Route path='*' element={<NoMatch />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

// function 

export default App