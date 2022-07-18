import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Table from 'react-bootstrap/Table'

function CurrentPrograms() {

    const [programs, setPrograms] = useState([])

    useEffect(() => {
        const getPrograms = async () => {
            const response = await fetch(`https://stark-beyond-33681.herokuapp.com/program-schedule`)
            const resPrograms = await response.json()
            setPrograms(resPrograms)      
        }
        getPrograms()
    }, [])

    // console.log(Object.values(programs))
    // filter for current programs list
    let currentPrograms = programs.filter(program => program.complete === false)

    // console.log(currentPrograms)
    // format the data
    let formatData = currentPrograms.map((program) => {
        return (
            <tr key={program.id}>
                <td><Link to={`../current-weeks/${program.id}`}>
                    {program.id}</Link></td>
                <td>{program.start_date}</td>
                <td>{program.end_date}</td>
                <td>{program.number_of_weeks}</td>
            </tr>
        )
    })

    return(
        <div>
            <h3>Current Schedules</h3>
            <Table striped bordered hover size='sm'>
            <thead>
                <tr>
                    <th>Program #</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Number of Weeks</th>
                </tr>
            </thead>
            <tbody>
                {formatData}
            </tbody>
            </Table>
            {/* change below syntax to display child data */}
            {/* <CompletedProgramList data={completedPrograms} /> */}
            <Outlet />
        </div>
    )
}

export default CurrentPrograms