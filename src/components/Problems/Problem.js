import moment from 'moment'
import { Card, Button } from 'react-bootstrap'
import { useState } from 'react'
import ModalProblem from './ModalProblem'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

export default function Problem(props) {
    const [modalShow, setModalShow] = useState(false)

    let modules = {
        syntax: true
    }

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
                        
                        {/* <div dangerouslySetInnerHTML={{__html: props.problem.description.slice(0, 500)}} /> */}
                        <ReactQuill
                        value={props.problem.description.slice(0, 500)}
                        readOnly={true}
                        theme={"bubble"}
                        modules={modules}
                        />

                        
                    </Card.Body>
                    <Card.Footer className='cardFooter'>
                        <p className='name'>Asked by: {firstName} {lastNameInit}.
                            <span class='badge rounded-pill bg-dark'> {moment(props.problem.createdAt).fromNow()} </span>
                        </p>
                        <Button id='cardBtn' onClick={() => setModalShow(true)}>
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