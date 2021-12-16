import { Form, Modal, Button, InputGroup, FormControl } from 'react-bootstrap'
import { useState } from 'react'
import { updateAnswer } from '../../api/answers'

export default function EditAnswer(props) {
    const [changeAnswer, setChangeAnswer] = useState(props.currentAnswer.solution)

    const handleChange = (e) => {
        setChangeAnswer(e.target.value) 
    }

    const editAnswer = () => {
        updateAnswer(props.currUser, props.currentAnswer._id, changeAnswer)
        .then(() => {
            props.refreshAnswers()
            setChangeAnswer(props.currentAnswer.solution)
        })
        .catch(err => console.error(err))
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
                    Edit Your Answer
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <InputGroup>
                        <FormControl as="textarea" aria-label="With textarea" name='solution' value={changeAnswer} onChange={handleChange} />
                    </InputGroup>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => editAnswer()}>Update Answer</Button>
                <Button onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}