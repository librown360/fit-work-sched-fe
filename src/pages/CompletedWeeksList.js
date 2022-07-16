import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table'


function CompletedWeeksList() {

    const [workouts, setWorkouts] = useState([])
    const { programId } = useParams()

    useEffect(() => {
        const getWorkouts = async () => {
            const response = await fetch(`http://localhost:3001/workout-schedule/${programId}`)
            const resWorkouts = await response.json()
            setWorkouts(resWorkouts)
        }
        getWorkouts()
    }, [programId])

    // console.log(Object.keys(workouts))
    // console.log(Object.values(workouts))

    // filter data for selected program
    // let completePrograms = programs.filter(program => program.complete === true)

    
    // format the data
    let formatWeeks = workouts.map((workout) => {
        return (
            <>
                <tbody>
                    <tr>
                        <td><Link to={`${workout.week_number}`}>
                            {workout.week_number}</Link></td>
                        <td>{workout.start_date}</td>
                        <td>{workout.end_date}</td>
                    </tr>
                </tbody>
            </>
            
        )
    })

    return(
        <>
            <h3>Completed Program</h3>
            <h3>Weeks List</h3>
            <Table bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>Week #</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                </thead>
                {formatWeeks}
            </Table>
        </>
    )
}

export default CompletedWeeksList