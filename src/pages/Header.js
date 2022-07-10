import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Header() {

    // let navigate = useNavigate()


    return (
        <div>
            <div className='heading'>
                <Link to='/' style={{ textDecoration: 'none'}}>Home</Link>
                <hr style={{height: '3px'}} />
            </div>
            <nav className='nav'>
                <ul>
                    <li>
                        <Link to='/create'>Create Program</Link>
                    </li>
                    <li>
                        <Link to='/current'>Current Program</Link>
                    </li>
                    <li>
                        <Link to='/completed'>Completed Programs</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header