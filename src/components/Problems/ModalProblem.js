import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

export default function ModalProblem(props) {

    let modules = {
        syntax: true
    }

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
                    <ReactQuill
                        value={props.currentProblem.description}
                        readOnly={true}
                        theme={"bubble"}
                        modules={modules}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Link to={`/problems/${props.currentProblem._id}`}
                        currProblem={props.currentProblem}><Button id="cardBtn" onClick={props.onHide}>View Problem</Button></Link>
                </Modal.Footer>
            </Modal>
        </>
    )
}
