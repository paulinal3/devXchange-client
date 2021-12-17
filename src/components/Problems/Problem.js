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
            {/* <Link to={`/problems/${props.problem._id}`}
                currProblem={props.currentProblem}>{props.problem.title}</Link> <small>by {firstName} {lastNameInit}.</small>
            <p>Asked {moment(props.problem.createdAt).fromNow()}</p> */}
            <Card id='probCard'>
                <Card.Header>Asked by {firstName} {lastNameInit}. {moment(props.problem.createdAt).fromNow()}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.problem.title}</Card.Title>
                    <Card.Text>
                        {props.problem.description.slice(0, 500)}...
                    </Card.Text>
                    {/* <Button variant="primary">Click for More!</Button> */}
                    <>
                        <Button variant="primary" onClick={() => setModalShow(true)}>
                            View Problem
                        </Button>
                    </>
                </Card.Body>
            </Card>
                <ModalProblem
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    currentProblem={props.problem}
                    
                />
        </>
    )
}