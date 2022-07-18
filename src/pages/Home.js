import { Link } from 'react-router-dom'
import CurrentPrograms from './CurrentPrograms'

function Home() {

    return (
        <div>
            <nav className='nav'>
                <Link to='/create-schedule'>Create Schedule</Link>
                <Link to='/completed-schedules'>Completed Schedules</Link>
            </nav>
            <main className='main-home'>
                <CurrentPrograms />
            </main>
        </div>
    )
}

export default Home