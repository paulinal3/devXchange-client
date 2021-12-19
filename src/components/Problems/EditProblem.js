import { Form, Modal, Button, InputGroup, FormControl } from "react-bootstrap"
import { updateProblem } from "../../api/problems"
import { useState } from "react"
import ReactQuill from "react-quill"

export default function EditProblem(props) {

    const [changeProblem, setChangeProblem] = useState(props.currentProb.description)

    let modules = {
        syntax: true,
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote', 'code-block'],
          [{'list': 'ordered'}, {'list': 'bullet'}],
          ['link'],
          ['clean']
        ],
      }

    // const handleProblemChange = (e) => {
    //     setChangeProblem(e.target.value)
    // }

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
        <div>
            {/* <div>
                    <label htmlFor='img'>Post a screenshot: </label>
                    <input id='img' type='file' name='img' onChange={handleChange} />
                </div> */}

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
                            {/* <FormControl 
                                as="textarea" aria-label="With textarea" 
                                name='description' 
                                value={changeProblem} 
                                onChange={handleProblemChange} 
                            /> */}
                            <ReactQuill
                                theme="snow"
                                name='description'
                                modules={modules}
                                value={changeProblem}
                                onChange={setChangeProblem}
                                name='description'
                                style={{"height": "90%"}} 
                            />
                        </InputGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => editProblem()}>Update Problem</Button>
                    <Button onClick={props.onHide}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
