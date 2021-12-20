import { Form, Modal, Button } from 'react-bootstrap'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import { updateAnswer } from '../../api/answers'

export default function EditAnswer(props) {

    const [changeAnswer, setChangeAnswer] = useState(props.currentAnswer.solution)

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

    const handleChange = (e) => {
        setChangeAnswer(e.target.value)
    }

    const editAnswer = () => {
        updateAnswer(props.currUser, props.currentAnswer._id, changeAnswer)
            .then(() => {
                props.refreshAnswers()
                props.onHide()
                setChangeAnswer(changeAnswer)
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
                    <ReactQuill
                        theme="snow"
                        modules={modules}
                        value={changeAnswer}
                        onChange={setChangeAnswer}
                        name='solution'
                        style={{ "height": "90%" }}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button id='editAnswerBtn' size='sm' style={{ 'background-color': '#055861' }} onClick={() => editAnswer()}>Update Answer</Button>
            </Modal.Footer>
        </Modal>
    )
}