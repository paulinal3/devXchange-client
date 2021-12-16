import { Modal, Button, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ModalProblem(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.currentProblem.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <h4>Centered Modal</h4> */}
                <p>
                    {props.currentProblem.description}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Link to={`/problems/${props.currentProblem._id}`}
                    currProblem={props.currentProblem}><Button onClick={props.onHide}>Answer Problem</Button></Link>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
