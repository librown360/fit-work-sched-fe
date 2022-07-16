import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table'


function CompletedWeek() {

    const [week, setWeek] = useState([])
    const { programId, weekNumber } = useParams()

    useEffect(() => {
        const getWeek = async () => {
            const response = await fetch(`http://localhost:3001/workout-schedule/${programId}/${weekNumber}`)
            const resWeek = await response.json()
            setWeek(resWeek)
        }
        getWeek()
    }, [programId, weekNumber])
    
    // console.log(Object.values(week))
    
    // get the days and workout names
    const days = []
    const workouts = []
    week.forEach(day => {
        days.push(day.day_of_week)
        day.workouts.forEach((workout) => {
            workouts.push(workout.workout_name)
        })
    })
    console.log(days)
    console.log(workouts)
    // // format the days
    // let formatDays = days.map((day) => {
    //     return (
    //         <>
    //         <tbody>
    //             <tr>
    //                 <td key={day.id}>
    //                     <Link to={`${day.day_of_week}`}>{day.day_of_week}</Link>
    //                 </td>
    //             </tr>
    //         </tbody>
    //         </>
            
    //     )
    // })

    // //format the workout names
    // let formatWorkouts = workouts.map((workout) => {
    //     return (
    //         <>
    //         <tbody>
    //             <tr>
    //                 <td key={workout.id}>{workout.workout_name}</td>
    //             </tr>
    //         </tbody>
                
                
    //         </>
    //     )
    // })

    // render the data
    return(
        <>
            <h3>Completed Week</h3>
            <Table bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Workout</th>
                    </tr>
                </thead>
                {/* {formatDays}
                {formatWorkouts} */}
            </Table>
        </>
    )
}

export default CompletedWeek