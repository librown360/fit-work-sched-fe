import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table'


function CompletedWeek() {

    const [week, setWeek] = useState([])
    const { programId, weekNumber } = useParams()

    useEffect(() => {
        const getWeek = async () => {
            const response = await fetch(`http://localhost:3001/workout-schedules/${programId}/${weekNumber}`)
            const resWeek = await response.json()
            setWeek(resWeek)
        }
        getWeek()
    }, [programId, weekNumber])
    
    // console.log(Object.values(week))
    
    // loop through the fetched data to get workout details
    const workoutDetails = []
    week.forEach((day) => {
        day.workouts.forEach((workout) => {
            workoutDetails.push(workout)
        })
    })
    console.log(workoutDetails)
///////////////////////////////////////////////////////////////////
    // loop through workout details to get workout names
    workoutDetails.forEach((name) => {
        return (
            <li key={name.id}>{name.workout_name}</li>
        )
    })
///////////////////////////////////////////////////////////////////

    
    // format the data
    let formatWeek = week.map(day => {

            return (
                <Table striped bordered hover size='sm' key={day.id}>
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Workout</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Link to={`${day.day_of_week}`}>{day.day_of_week}</Link>
                            </td>
                            {/* <td>{`${workouts}`}</td> */}
                        </tr>
                    </tbody>
                </Table>
            )
    })

    return(
        <>
              <h3>Completed Week</h3>
              {formatWeek}
        </>
    )
}

export default CompletedWeek