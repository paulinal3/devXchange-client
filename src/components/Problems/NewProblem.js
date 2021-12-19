import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import { postProblem } from '../../api/problems'

export default function NewProblem(props) {
    // console.log('this is props\n', props)
    // console.log('here is the current user id:', props.user._id)
    const [newProblem, setNewProblem] = useState({
        title: '',
        description: '',
        solved: false,
        img: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setNewProblem({ ...newProblem, [e.target.name]: e.target.value })
    }

    // helper method attached to button
    const createNewProblem = () => {
        // axios call to create the new problem in the db
        postProblem(props.user, newProblem)
            // console.log('this is the current user id:', user._id)
            // console.log('this is the new problem\n', newProblem)
            .then(() => {
                props.refreshProblems()
                setNewProblem({
                    title: '',
                    description: '',
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
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                    <Form.Label htmlFor='title'>Title</Form.Label>
                    <Form.Control 
                        id='title'
                        type='text' 
                        name='title' 
                        value={newProblem.title} 
                        onChange={handleChange} 
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label htmlFor='description'>Description</Form.Label>
                    <Form.Control
                        id='description' 
                        as='textarea' rows={3} 
                        type='text' 
                        name='description' 
                        value={newProblem.description} 
                        onChange={handleChange} 
                    />
                </Form.Group>
                <Button id='formBtn' onClick={() => createNewProblem()}>Post Problem</Button>
            </Form>
            {/* <----- Form to Create a New Problem -----> */}
        </div>
    )
}