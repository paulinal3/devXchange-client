import { useState } from 'react'
import { Form , Button, FloatingLabel} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
<<<<<<< HEAD
import { postProblem } from '../../api/problems'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

=======
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import { postProblem } from '../../api/problems'

>>>>>>> 1a8d85e5d439181c17c8c3d61b9ca9352c579125
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
                    <ol>
                        <li>Summarize the problem</li>
                        <li>Describe what you've tried</li>
                        <li>When appropriate, show some code</li>
                    </ol>
                </h4>
            </div>
            {/* <----- Jumbotron -----> */}

            {/* <----- Form to Create a New Problem -----> */}
            <Form id='newProbForm'>

                <Form.Group className='mb-3' controlId='title' style={{'margin-top':'20px'}}>
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
                    style={{'height':'100%'}}
                    id = "textEditor"
                    theme="snow" 
                    name='description' 
                    modules = {modules}
                    value={value} 
                    onChange={setValue}
                    placeholder='describe your problem...'
                    />
                </Form.Group>
<<<<<<< HEAD
                <Form.Group className='mb-3' controlId='img'>
                    <Form.Label>Upload a screenshot: </Form.Label>
                    <Form.Control
                        type='file' 
                        name='img'
                        accept='image/*'
                        value={newProblem.img} 
                        // onChange={(e) => uploadImg(e.target.files)} 
                        onChange={handleFileChange}
                    />

                </Form.Group>
=======
>>>>>>> 1a8d85e5d439181c17c8c3d61b9ca9352c579125
                <Button id='formBtn' onClick={() => createNewProblem()}>Post Problem</Button>
            </Form>
            {/* <----- Form to Create a New Problem -----> */}
        </div>
    )
}