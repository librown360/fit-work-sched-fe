import { NavLink, Outlet } from "react-router-dom"

function Layout() {

    const style = ({ isActive }) => ({
        font: isActive ? 'bold' : 'normal'
    })

    return (
        <>
            <nav style={{ 
                    borderBottom: 'solid 2px',
                    padding: '1em',
                    fontSize: 'x-large'
                }}>
        
                <NavLink to='/home' style={{style, textDecoration: 'none'}}>
                    Home
                </NavLink>
                
            </nav>
            
            <main style={{ padding: '1rem 0' }}>
                <Outlet />
            </main>
        </>  
    )
}

export default Layout