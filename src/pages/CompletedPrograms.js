import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'

function CompletedPrograms() {

    const [programs, setPrograms] = useState([])

    useEffect(() => {
        const getPrograms = async () => {
            const response = await fetch(`http://localhost:3001/program-schedule`)
            const resPrograms = await response.json()
            setPrograms(resPrograms)      
        }
        getPrograms()
    }, [])

    // console.log(Object.values(programs))
    // filter for completed programs list
    let completedPrograms = programs.filter(program => program.complete === true)
    
    // console.log(completedPrograms)
    // format the data
    let formatData = completedPrograms.map((program) => {
        return (
            <tr key={program.id}>
                <td><Link to={`../completed-weeks/${program.id}`}>
                    {program.id}</Link></td>
                <td>{program.start_date}</td>
                <td>{program.end_date}</td>
                <td>{program.number_of_weeks}</td>
            </tr>
        )
    })

    return (
        <div>
            <h3>Completed Schedules</h3>
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
        </div>
    )
}

export default CompletedPrograms