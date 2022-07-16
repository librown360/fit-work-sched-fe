import { Link } from 'react-router-dom'

function Home() {

    return (
        <div>
            <nav className='nav'>
                <Link to='/create-schedule'>Create Program</Link>
                <Link to='/current-schedule'>Current Program</Link>
                <Link to='/completed-schedules'>Completed Programs</Link>
            </nav>
        </div>
    )
}

export default Home