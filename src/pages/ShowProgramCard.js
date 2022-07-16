import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

function ShowProgramCard() {

    const [allPrograms, setAllPrograms] = useState([])
    // const [lastProgram, setLastProgram] = useState([])
    const navigate = useNavigate()
    

    useEffect(() => {
        const getAllPrograms = async () => {
            const response = await fetch(`http://localhost:3001/program-schedule`)
            const resAllPrograms = await response.json()
            setAllPrograms(resAllPrograms)
        }
        getAllPrograms()
        

    },[])


    // create data for rows based on weeks
    // function createTableData(){
    //     const weekNum = allPrograms.number_of_weeks
    //     if (weekNum > 1) {
    //         last.forEach(week => {
    //             return (
    //                 <tr>
    //                     <td>{week.number_of_weeks}</td>
    //                     <td>{week.start_date}</td>
    //                     <td>{week.end_date}</td>
    //                 </tr>
    //             )
    //         })
    //     } else {
    //         return (
    //             <tr>
    //                 <td>{last.number_of_weeks}</td>
    //                 <td>{last.start_date}</td>
    //                 <td>{last.end_date}</td>
    //             </tr>
    //         )
    //     }
    // }

    return (
        <div>
            <h3>Program Added</h3>
            <Card border='info' bg='light'>
                <Card.Header as='h5'>Program:</Card.Header>
                <Card.Body>
                    <Row>
                        <Card.Title as={Col}>Number of Weeks:</Card.Title>
                        {/* <Card.Text as={Col}>{last.number_of_weeks}</Card.Text> */}
                    </Row>
                    <Row>
                        <Card.Title as={Col}>Start Date:</Card.Title>
                        {/* <Card.Text as={Col}>{last.start_date}</Card.Text> */}
                    </Row>
                    <Row>
                        <Card.Title as={Col}>End Date:</Card.Title>
                        {/* <Card.Text as={Col}>{last.end_date}</Card.Text> */}
                    </Row>
                    <Row>
                        <Card.Title as={Col}>Notes:</Card.Title>
                        {/* <Card.Text as={Col}>{last.notes}</Card.Text> */}
                    </Row>
                    <Row className='mb-2'>
                        <Button className='card-btn' as={Col} variant='primary' size='lg' type='submit'>Edit</Button>
                        <Button className='card-btn' as={Col} variant='danger' size='lg' type='submit'>Delete</Button>
                    </Row>
                </Card.Body>
            </Card>
            <div className='card-tbl'>
                <Table striped bordered size='sm'>
                    <thead>
                        <tr>
                            <th>Week #</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {createTableData()} */}
                    </tbody>
                </Table>
            </div>
        </div>
        
    )
}

export default ShowProgramCard