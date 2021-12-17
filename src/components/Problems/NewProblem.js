import { useCallback, useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { postProblem } from '../../api/problems'
import TextEditor from '../shared/TextEditor'
import Quill from "quill"
import "quill/dist/quill.snow.css"

export default function NewProblem(props) {
    // console.log('this is props\n', props)
    // console.log('here is the current user id:', props.user._id)
    const [quill, setQuill] = useState()

    const [newProblem, setNewProblem] = useState({
        title: '',
        description: {},
        solved: false,
        img: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setNewProblem({ ...newProblem, [e.target.name]: e.target.value })
    }

    const createNewProblem = () => {
        postProblem(props.user, newProblem)
            // console.log('this is the current user id:', user._id)
            // console.log('this is the new problem\n', newProblem)
            .then(() => {
                props.refreshProblems()
                setNewProblem({
                    title: '',
                    description: {},
                    solved: false,
                    img: ''
                })
            })
            .then(() => navigate('/problems'))
            .catch(err => {
                console.error(err)
            })
    }

   

    let toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],

        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ]

    useEffect(() => {
        if (quill == null) return

        const handler = (delta, oldDelta, source) => {
            if (source !== 'user') return
            setNewProblem({description: delta})
        }
        quill.on('text-change', handler)

        return () => {
            quill.off('text-change', handler)
        }
    }, [quill])


    const wrapperRef = useCallback((wrapper) => {
        if (wrapper === null) return

        wrapper.innerHTML = ""
        const editor = document.createElement('div')
        wrapper.append(editor)

        const q = new Quill(editor, {
            modules: {
                toolbar: toolbarOptions
            },
            theme: 'snow',

        })
        setQuill(q)
    }, [])


    return (
        <div>
<<<<<<< HEAD
            <h1 className='mx-4'>Post Your Problem!</h1>
=======
            {/* Jumbotron */}
            <div class="container-fluid bg-dark text-light p-5">
                <h1 class="mb-3">Tips on posting a problem</h1>
                <h4 class="mb-3">
                    <ol>
                        <li>Summarize the problem</li>
                        <li>Describe what you've tried</li>
                        <li>When appropriate, show some code</li>
                    </ol>
                </h4>
            </div>
            {/* Jumbotron */}
>>>>>>> 57905b7ea44765afd7c959a352c2b62e71c99c04
            <Form id='newProbForm'>
                <Form.Group className="mb-3 mx-3" controlId="exampleForm.ControlInput1">
                    
                    <Form.Control type="text" name='title' value={newProblem.title} onChange={handleChange} placeholder="Title"/>
                </Form.Group>
                <Form.Group className="mb-3 mx-4" controlId="exampleForm.ControlTextarea1">
                    {/* <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} type='text' name='description' value={newProblem.description} onChange={handleChange} /> */}
                    <div id="container" ref={wrapperRef}></div>
                </Form.Group>
                <Button onClick={() => createNewProblem()} className='mx-4 mt-3 float-end'>Post Problem</Button>
            </Form>
            {/* <Form>
                <div>
                    <label htmlFor='title'>Title: </label>
                    <input id='title' type='text' name='title' value={newProblem.title} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='description'>Description: </label>
                    <input id='description' type='text' name='description' value={newProblem.description} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='img'>Post a screenshot: </label>
                    <input id='img' type='file' name='img' value={newProblem.img} onChange={handleChange} />
                </div>

                <input type='button' value='Post Problem' onClick={() => createNewProblem()} />
            </Form> */}
        </div>
    )
}