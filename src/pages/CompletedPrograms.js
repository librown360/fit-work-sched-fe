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

    // console.log(Object.keys(programs))
    // console.log(Object.values(programs))

    // filter data for completed programs
    let completePrograms = programs.filter(program => program.complete === true)

    // format the data
    let formatPrograms = completePrograms.map((program) => {
        return (
            <Table striped bordered hover size='sm' key={program.id}>
                <thead>
                    <tr>
                        <th>Program #</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Number of Weeks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Link to={`../workout-schedule/${program.id}`}>
                            {program.id}</Link></td>
                        <td>{program.start_date}</td>
                        <td>{program.end_date}</td>
                        <td>{program.number_of_weeks}</td>
                    </tr>
                    
                </tbody>
            </Table>
        )
    })

    return(
        <div>
            <h3>Completed Programs</h3>
            {formatPrograms}
        </div>
        
    )
}

export default CompletedPrograms