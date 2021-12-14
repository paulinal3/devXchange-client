import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { useNavigate } from 'react-router-dom'

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

    const postProblem = (user) => {
        console.log('this is the current user id:', user._id)
        console.log('this is the new problem\n', newProblem)
    
        return axios({
            method: 'POST',
            url: apiUrl + '/problems',
            headers: {
                Authorization: `Token token=${user.token}`,
            },
            data: {
                problem: {
                    title: newProblem.title,
                    description: newProblem.description,
                    img: newProblem.img
                },
            },
        })
        .then(() => {
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

                <input type='button' value='Post Problem' onClick={() => postProblem(props.user)}/>
            </Form>
        </div>
    )
}