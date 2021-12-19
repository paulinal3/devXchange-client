import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ModalProblem(props) {

    return (
        <>
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
                    <p>
                        {props.currentProblem.description}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button onClick={props.onHide}>Close</Button> */}
                    <Link to={`/problems/${props.currentProblem._id}`}
                        currProblem={props.currentProblem}><Button id="cardBtn" onClick={props.onHide}>View Problem</Button></Link>
                </Modal.Footer>
            </Modal>

        </>
    )
}
