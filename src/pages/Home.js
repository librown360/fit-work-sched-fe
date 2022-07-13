import { Link } from 'react-router-dom'

function Home() {

    return (
        <div>
            <nav className='nav'>
                <Link to='/create-program'>Create Program</Link>
                <Link to='/current-program'>Current Program</Link>
                <Link to='/completed-programs'>Completed Programs</Link>
            </nav>
        </div>
    )
}

export default Home