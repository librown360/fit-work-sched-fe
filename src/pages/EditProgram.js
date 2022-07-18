import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import DisablePastDates from '../components/DisablePastDates'

function EditProgram() {

    let navigate = useNavigate()
    const { programId } = useParams()
    const [validated, setValidated] = useState(false)
    const [program, setProgram] = useState({
        number_of_weeks: 0,
        start_date: '',
        end_date: '',
        notes: ''
    })
    
    useEffect(() => {
        const getProgram = async () => {
            const response = await fetch(`http://localhost:3001/program-schedule/${programId}`)
            const resProgram = await response.json()
            setProgram(resProgram)
        }
        getProgram()
    }, [programId])
    
    // edit button event
    function submitEdit(e) {
        // form validation
        const form = e.currentTarget
        if (form.checkValidity() === false) {
            e.preventDefault()
            e.stopPropagation()
        }
        setValidated(true)
        // form validation successful; update table & get new id
        const editSchedule = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(program)
        }
        const updateSchedule = async () => {
            const response = await fetch(`http://localhost:3001/program-schedule/${program.id}`, editSchedule)
            const resData = await response.json()
            // const programId = resData.program_schedules.id
            // go back to show updated schedule
            navigate(`../create-schedule/${program.id}`, {replace: true})

            return resData
        }
        updateSchedule()
    }
    // cancel button event
    function cancelEdit() {
        navigate(`../create-schedule/${programId}`, {replace: true})
    }

    return (
        <div className='add-program'>
            <h3>Update Schedule</h3>
            <Form noValidate validated={validated}>
                <Row className='mb-3'>
                    <Form.Group as={Col} controlId='formGridNumberOfWeeks'>
                        <Form.Label>Number of weeks:</Form.Label>
                        <Form.Control 
                            required
                            value={program.number_of_weeks}
                            onChange={e => setProgram({ ...program, number_of_weeks: e.target.value })}
                            type='number'
                            min='1'
                            placeholder='Enter number of weeks:'
                        />
                        <Form.Control.Feedback type='invalid'>
                            Number of weeks must be greater than zero.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                    <Form.Group as={Col} controlId='formGridStartDate'>
                        <Form.Label>Start Date:</Form.Label>
                        <Form.Control 
                            required
                            value={program.start_date}
                            onChange={e => setProgram({ ...program, start_date: e.target.value })}
                            type='date'
                            min={DisablePastDates()}
                            placeholder='Choose start date:'
                        />
                        <Form.Control.Feedback type='invalid'>
                            Please choose a start date.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId='formGridEndDate'>
                        <Form.Label>End Date:</Form.Label>
                        <Form.Control
                            required
                            value={program.end_date}
                            onChange={e => setProgram({ ...program, end_date: e.target.value })}
                            type='date'
                            min={DisablePastDates()}
                            placeholder='Choose end date:'
                        />
                        <Form.Control.Feedback type='invalid'>
                            Please choose an end date.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                    <Form.Group as={Col} controlId='formGridNotes'>
                        <Form.Label>Notes:</Form.Label>
                        <Form.Control
                            as='textarea'
                            rows={4}
                            value={program.notes}
                            onChange={e => setProgram({ ...program, notes: e.target.value })}
                            placeholder='Enter program notes as desired'
                        />
                    </Form.Group>
                </Row>
                <Row  className='mb-3'>
                    <Col>
                        <Button variant='success' onClick={submitEdit}>
                            Update
                        </Button>
                    </Col>
                    <Col className='edit-btn'>
                        <Button variant='danger' onClick={cancelEdit}>
                            Cancel
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default EditProgram