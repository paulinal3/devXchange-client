import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import { postProblem } from '../../api/problems'

export default function NewProblem(props) {
    console.log('this is props\n', props)
    console.log('here is the current user id:', props.user._id)
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

    const createANewProblem = () => {
        postProblem(props.user, newProblem)
            // console.log('this is the current user id:', user._id)
            // console.log('this is the new problem\n', newProblem)
            .then(() => {
                setNewProblem({
                    title: '',
                    description: '',
                    solved: false,
                    img: ''
                })
            })
            props.refreshProblems()
            .then(() => navigate('/problems'))
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <div>
            <h1>Post Your Problem!</h1>
            <Form>
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

                <input type='button' value='Post Problem' onClick={() => createANewProblem()}/>
            </Form>
        </div>
    )
}