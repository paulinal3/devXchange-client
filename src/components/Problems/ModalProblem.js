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
                    {/* <h4>Centered Modal</h4> */}
                    {/* <div dangerouslySetInnerHTML={{__html:props.currentProblem.description}} /> */}
                    <ReactQuill
                        value={props.currentProblem.description}
                        readOnly={true}
                        theme={"bubble"}
                        modules={modules}
                        />
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                    <Link to={`/problems/${props.currentProblem._id}`}
                        currProblem={props.currentProblem}><Button onClick={props.onHide}>View Problem</Button></Link>
                </Modal.Footer>
            </Modal>

        </>
    )
}
