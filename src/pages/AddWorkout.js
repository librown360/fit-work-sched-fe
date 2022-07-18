import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Dropdown from 'react-bootstrap/Dropdown'

function AddWorkout({ schedule }) {

    const navigate = useNavigate()
    const [workoutList, setWorkoutList] = useState('')
    const [programList, setProgramList] = useState('')
    const [programId, setProgamId] = useState('')
    const [workoutName, setWorkoutName] = useState('')

    // function workoutsList() {

    //     const programs = async () => {
    //         const response = await fetch(`http://localhost:3001/workout-list/programs`)
    //         const resData = await response.json()
    //         setProgramList(resData.program_name)
    //         setProgamId(resData.id)
    //     }
    //     programs()
    //     const workouts = async () => {
    //         const response = await fetch(`http://localhost:3001/workout-list`)
    //         const resData = await response.json()
    //         setWorkoutList(resData)
    //         setWorkoutName(resData.workout_name)
    //     }
    //     workouts()
    // }


    return (
        <div>
            <h3>Add Workouts</h3>
            <Table striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>Week #</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Choose Workout</th>
                    </tr>
                </thead>
                <tbody>
                   <tr>
                    <td>{schedule.number_of_weeks}</td>
                    <td>{schedule.start_date}</td>
                    <td>{schedule.end_date}</td>
                    <td>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </td>
                   </tr>
                </tbody>
            </Table>
            {/* <Button onClick={() => navigate(-1)}>Go Back</Button> */}
        </div>
    )
}

export default AddWorkout