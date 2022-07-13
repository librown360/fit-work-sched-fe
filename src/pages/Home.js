import { Link } from 'react-router-dom'

function Home() {

    // let navigate = useNavigate()


    return (
        <div>
            <nav className='nav'>
                <Link to='/create'>Create Program</Link>
                <Link to='/current'>Current Program</Link>
                <Link to='/program-schedules'>Completed Programs</Link>
            </nav>
        </div>
    )
}

export default Home