import { Form, Modal, Button, InputGroup, FormControl } from "react-bootstrap"
import { useState } from "react"
import ReactQuill from "react-quill"

import { updateProblem } from "../../api/problems"

export default function EditProblem(props) {

    const [changeProblem, setChangeProblem] = useState(props.currentProb.description)

    let modules = {
        syntax: true,
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link'],
            ['clean']
        ],
    }

    // helper method attached to button
    const editProblem = () => {
        // axios call to update the current problem in db
        updateProblem(props.currUser, props.currentProb._id, changeProblem)
            .then(() => {
                props.refreshProb()
                props.onHide()
                setChangeProblem(changeProblem)
            })
            .catch(err => console.log(err))
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit Your Problem
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>{props.currentProb.title}</h3>
                <Form>
                    <InputGroup>
                        <ReactQuill
                            theme="snow"
                            modules={modules}
                            value={changeProblem}
                            onChange={setChangeProblem}
                            name='description'
                            style={{ "height": "90%" }}
                        />
                    </InputGroup>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button id='editProbBtn' onClick={() => editProblem()}>Update Problem</Button>
                <Button id='cancelEditBtn' onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}
