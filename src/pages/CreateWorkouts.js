import Table from 'react-bootstrap/Table'

function CreateWorkouts() {



    return (
        <div className='card-tbl'>
                <Table striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>Week #</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{schedule.number_of_weeks}</td>
                        <td>{schedule.start_date}</td>
                        <td>{schedule.end_date}</td>
                        <td>
                            <Button variant='success'>Add</Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
    )

}

export default CreateWorkouts