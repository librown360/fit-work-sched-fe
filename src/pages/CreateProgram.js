import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import DisablePastDates from '../components/DisablePastDates'

function CreateProgram() {

    const [validated, setValidated] = useState(false)
    const [weeks, setWeeks] = useState(0)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    
    // create button events
    const handleSubmit = (event) => {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
            console.log('not validated')
        }
        setValidated(true)
        console.log('validated')
    }



    return(
        <div>
            <h3>Create Program Schedule</h3>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className='mb-3'>
                    <Form.Group as={Col} controlId='formGridNumberOfWeeks'>
                        <Form.Label>Number of weeks:</Form.Label>
                        <Form.Control 
                            required
                            type='number'
                            min='1'
                            placeholder='Enter number of weeks:'
                        />
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                    <Form.Group as={Col} controlId='formGridStartDate'>
                        <Form.Label>Start Date:</Form.Label>
                        <Form.Control 
                            required
                            type='date'
                            min={DisablePastDates()}
                            placeholder='Choose start date:'
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId='formGridEndDate'>
                        <Form.Label>End Date:</Form.Label>
                        <Form.Control
                            required
                            type='date'
                            min={DisablePastDates()}
                            placeholder='Choose end date:'
                        />
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                    <Form.Group as={Col} controlId='formGridNotes'>
                        <Form.Label>Notes:</Form.Label>
                        <Form.Control type='text' placeholder='Enter program notes as desired' />
                    </Form.Group>
                </Row>
                <Button variant='primary' type='submit'>
                    Create
                </Button>
            </Form>
            {/* <Outlet /> */}
        </div>
    )
}

export default CreateProgram