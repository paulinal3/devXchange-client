import { useState } from 'react'
import { Form, Button, FloatingLabel } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import { postProblem } from '../../api/problems'

export default function NewProblem(props) {
    // console.log('this is props\n', props)
    // console.log('here is the current user id:', props.user._id)
    const [value, setValue] = useState('')

    const [newProblem, setNewProblem] = useState({
        title: '',
        solved: false,
        img: ''
    })

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

    const navigate = useNavigate()

    const handleChange = (e) => {
        setNewProblem({ ...newProblem, [e.target.name]: e.target.value })
    }

    // helper method attached to button
    const createNewProblem = () => {
        // axios call to create the new problem in the db
        postProblem(props.user, newProblem, value)
            // console.log('this is the current user id:', user._id)
            // console.log('this is the new problem\n', newProblem)
            .then(() => {
                props.refreshProblems()
                setNewProblem({
                    title: '',
                    description: value,
                    solved: false,
                    img: ''
                })
            })
            .then(() => navigate('/problems'))
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <div>
            {/* <----- Jumbotron -----> */}
            <div class='container-fluid bg-dark text-light p-5'>
                <h1 class='mb-3'>Tips on posting a problem</h1>
                <h4 class='mb-3'>
                    <div id='problemTips'>
                        <p>Summarize the problem</p>
                        <p>•</p>
                        <p>Describe what you've tried</p>
                        <p>•</p>
                        <p>When appropriate, show some code</p>
                    </div>
                </h4>
            </div>

            {/* <----- Form to Create a New Problem -----> */}
            <Form id='newProbForm'>
                <Form.Group className='mb-3' controlId='title' style={{ 'margin-top': '20px' }}>
                    <FloatingLabel
                        controlId='floatingInput'
                        label='Title'
                        className='mb-3'
                    >
                        <Form.Control
                            type='text'
                            name='title'
                            value={newProblem.title}
                            onChange={handleChange}
                            placeholder='Title'
                        />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <ReactQuill
                        style={{ 'height': '100%' }}
                        id="textEditor"
                        theme="snow"
                        name='description'
                        modules={modules}
                        value={value}
                        onChange={setValue}
                        placeholder='describe your problem...'
                    />
                </Form.Group>
                <Button id='formBtn' onClick={() => createNewProblem()}>Post Problem</Button>
            </Form>
        </div>
    )
}