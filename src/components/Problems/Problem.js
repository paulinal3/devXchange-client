import { Card, Button } from 'react-bootstrap'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

import moment from 'moment'

import ModalProblem from './ModalProblem'

export default function Problem(props) {

    const [modalShow, setModalShow] = useState(false)

    let modules = {
        syntax: true
    }

    let firstName = props.problem.owner.firstName
    let lastNameInit = props.problem.owner.lastName.charAt(0)
    let shortDescription = props.problem.description.split('</p>')[0]

    return (
        <>
            <Card id='probCard'>
                <div className='cardBody'>
                    <Card.Body className='cardProblem'>
                        <h3>{props.problem.title}</h3>
                        <ReactQuill
                            value={shortDescription}
                            readOnly={true}
                            theme={"bubble"}
                            modules={modules}
                        />
                    </Card.Body>
                    <Card.Footer className='cardFooter'>
                        <p id='probCardFooter' className='name'>Asked by: {firstName} {lastNameInit}.
                            <span id="momentPill" class='badge rounded-pill bg-dark'> {moment(props.problem.createdAt).fromNow()} </span>
                        </p>
                        <Button id='cardBtn' size='sm' onClick={() => setModalShow(true)}>
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