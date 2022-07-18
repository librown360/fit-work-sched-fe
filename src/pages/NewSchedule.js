import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

function NewSchedule() {
    
    const [schedule, setSchedule] = useState([])
    const { programId } = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        const getSchedule = async () => {
            const response = await fetch(`http://localhost:3001/program-schedule/${programId}`)
            const resSchedule = await response.json()
            setSchedule(resSchedule)
        }
        getSchedule()
    },[programId])

    // console.log(schedule)
    // edit button event
    function editSchedule() {
        navigate(`../edit-schedule/${programId}`)
    }
    // delete button event
    async function deleteSchedule(){
        await fetch(`http://localhost:3001/program-schedule/${programId}`, {
            method: 'DELETE'
        })
        navigate('/')
    }
    
    return (
        <div>
            <h3>New Schedule</h3>
            <Card border='info' bg='light'>
                <Card.Header as='h5'>Schedule Details:</Card.Header>
                <Card.Body>
                    <Row>
                        <Card.Title as={Col}>Number of Weeks:</Card.Title>
                        <Card.Text as={Col}>{schedule.number_of_weeks}</Card.Text>
                    </Row>
                    <Row>
                        <Card.Title as={Col}>Start Date:</Card.Title>
                        <Card.Text as={Col}>{schedule.start_date}</Card.Text>
                    </Row>
                    <Row>
                        <Card.Title as={Col}>End Date:</Card.Title>
                        <Card.Text as={Col}>{schedule.end_date}</Card.Text>
                    </Row>
                    <Row>
                        <Card.Title as={Col}>Notes:</Card.Title>
                        <Card.Text as={Col}>{schedule.notes}</Card.Text>
                    </Row>
                    <Row className='mb-2'>
                        <Button className='card-btn' 
                            as={Col} 
                            variant='primary' 
                            size='lg' 
                            type='submit'
                            onClick={editSchedule}
                        >
                            Edit
                        </Button>
                        <Button 
                            className='card-btn' 
                            as={Col} 
                            variant='danger' 
                            size='lg' 
                            type='submit'
                            onClick={deleteSchedule}
                        >
                            Delete
                        </Button>
                    </Row>
                </Card.Body>
            </Card>
            <div>
                <Table striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>
                                <Button className='tbl-btn' variant='success'>
                                    Create Workout Schedule
                                </Button>
                            </th>
                        </tr>
                    </thead>
                </Table>
            </div>
        </div>
    )
}

export default NewSchedule