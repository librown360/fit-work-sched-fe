import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table'


function CurrentWeek() {

    const [week, setWeek] = useState([])
    const { programId, weekNumber } = useParams()

    useEffect(() => {
        const getWeek = async () => {
            const response = await fetch(`https://stark-beyond-33681.herokuapp.com/workout-schedule/${programId}/${weekNumber}`)
            const resWeek = await response.json()
            setWeek(resWeek)
        }
        getWeek()
    }, [programId, weekNumber])
    
    // console.log(Object.values(week))
    
    // get the days and workout names
    let days = []
    let workouts = []

    week.forEach(day => {
        days.push(day.day_of_week)
        day.workouts.forEach((workout) => {
            workouts.push(workout.workout_name)
        })
    })   
    // console.log(days)
    // console.log(workouts)
    // format the days
    function formatData() {
        let formatDays = days.map((day) => {
            return (
                <tr>
                    <td key={day.id}>
                    <Link to={`current-day/${day.day_of_week}`}>{day.day_of_week}</Link>
                    </td>
                </tr>
            )
        })
        console.log(formatDays)
        let formatWorkouts = workouts.map((workout) => {
            return (
                <tr>
                    <td key={workout.id}>{workout.workout_name}</td>
                </tr>
            )
        })
        return (
            <tbody>
                {formatDays}
                {formatWorkouts}
            </tbody>
        )
    }
    console.log(formatData())
    return (
        <div>
            <h3>Week #{weekNumber}</h3>
            <Table striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Workout</th>
                    </tr>
                </thead>
                {formatData()}
            </Table>
        </div>
    )
}

export default CurrentWeek