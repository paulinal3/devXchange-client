import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import apiUrl from '../../apiConfig'

export default function NewProblem() {
    const [newProblem, setNewProblem] = useState({
        title: '',
        description: '',
        solved: false,
        img: ''
    })

    const handleChange = (e) => {
        setNewProblem({ ...newProblem, [e.target.name]: e.target.value })
    }

    const postProblem = (e, userToken) => {
        console.log('this is the new problem\n', newProblem)
        e.preventDefault()
        return axios({
            method: 'POST',
            url: `${apiUrl}/problems`,
            headers: {
                Authorization: `Bearer ${userToken}`,
            },
            data: {
                problems: {
                    title: newProblem.title,
                    description: newProblem.description,
                    solved: newProblem.solved,
                    img: newProblem.img
                },
            },
        })
        .then(postedProblem => {
            setNewProblem({
                    title: '',
                    description: '',
                    solved: false,
                    img: ''
            })
        })
        .catch(err => {
            console.error(err)
        })
    }

    return (
        <div>
            <h1>Post Your Problem!</h1>
            <Form onSubmit={postProblem}>
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

                <input type='submit' value='Post Problem' />
            </Form>
        </div>
    )
}
