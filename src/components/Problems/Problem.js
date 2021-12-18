import { Link } from 'react-router-dom'
import moment from 'moment'
import { Card, Button } from 'react-bootstrap'
import { useState } from 'react'
import ModalProblem from './ModalProblem'

export default function Problem(props) {
    const [modalShow, setModalShow] = useState(false)

    let firstName = props.problem.owner.firstName
    let lastNameInit = props.problem.owner.lastName.charAt(0)
    return (
        <>
            <Card id='probCard'>
                {/* <Card.Header className='name'>Asked by: {firstName} {lastNameInit}. {moment(props.problem.createdAt).fromNow()}</Card.Header>
                <Card.Header>
                    <h3>{props.problem.title}</h3>
                </Card.Header> */}
                <div className='cardBody'>

                    <Card.Body className='cardProblem'>
                        <h3>{props.problem.title}</h3>
                        <Card.Text>
                            {props.problem.description.slice(0, 500)}...
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='cardFooter'>
                        <p className='name'>Asked by: {firstName} {lastNameInit}.
                            <span class='badge rounded-pill bg-dark'> {moment(props.problem.createdAt).fromNow()} </span>
                        </p>
                        <Button variant='primary' onClick={() => setModalShow(true)}>
                            Preview Problem
                        </Button>
                    </Card.Footer>

                </div>
            </Card>
            <ModalProblem
                show={modalShow}
                onHide={() => setModalShow(false)}
                currentProblem={props.problem}

            />
        </>
    )
}