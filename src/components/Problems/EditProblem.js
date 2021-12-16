import { Form, Modal, Button, InputGroup, FormControl } from "react-bootstrap"
import { useNavigate, useLocation } from "react-router-dom"
import { getOneProblem, updateProblem } from "../../api/problems"
import { useState, useEffect } from "react"

export default function EditProblem(props) {
    const { pathname } = useLocation()
    const problemId = pathname.split('/')[3]
    console.log('this is the problem id:', problemId)
    const navigate = useNavigate()
    
    const [changeProblem, setChangeProblem] = useState (props.currentProb.description)

    useEffect(() => {
        getOneProblem(problemId)
        .then((problem) => {
            console.log('these are all the problems in the db\n', problem.data)
            setChangeProblem(problem.data.problem)
        })
            .catch(err => console.error(err))
    }, [])

    const handleChange = (e) => {
        setChangeProblem(e.target.value)
    }
    
    const editProblem = () => {
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
                        <FormControl as="textarea" aria-label="With textarea" name='description' value={changeProblem} onChange={handleChange} />
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
