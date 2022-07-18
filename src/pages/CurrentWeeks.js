import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table'

function CurrentWeeks() {

    const [weeks, setWeeks] = useState([])
    const { programId } = useParams()

    useEffect(() => {
        const getWeeks = async () => {
            const response = await fetch(`http://localhost:3001/workout-schedule/${programId}`)
            const resWeeks = await response.json()
            setWeeks(resWeeks)
        }
        getWeeks()
    }, [programId])

    // console.log(Object.keys(workouts))
    // console.log(Object.values(workouts))
    // format the data
    let formatData = weeks.map((week) => {
        return (
            <tr key={week.week_number}>
                <td><Link to={`../current-week/${programId}/${week.week_number}`}>
                    {week.week_number}</Link></td>
                <td>{week.start_date}</td>
                <td>{week.end_date}</td>
            </tr>
        )
    })

    return(
        <div>
            <h3>Current Program #{programId}</h3>
            <h3>Weeks List</h3>
            <Table striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>Week #</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                </thead>
                <tbody>
                    {formatData}
                </tbody>
            </Table>
        </div>
    )
}

export default CurrentWeeks