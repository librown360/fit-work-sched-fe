import { Link } from 'react-router-dom'

function Home() {

    return (
        <div>
            <nav className='nav'>
                <Link to='/create-schedule'>Create Schedule</Link>
                <Link to='/current-schedules'>Current Schedule</Link>
                <Link to='/completed-schedules'>Completed Schedules</Link>
            </nav>
        </div>
    )
}

export default Home