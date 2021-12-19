import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { postProblem } from '../../api/problems'
import axios from 'axios'

export default function NewProblem(props) {
    // console.log('this is props\n', props)
    // console.log('here is the current user id:', props.user._id)
    const [newProblem, setNewProblem] = useState({
        title: '',
        description: '',
        solved: false,
        img: ''
    })
    const [fileData, setFileData] = useState('')
    const [image, setImage] = useState('')

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

    // const uploadImg = (files) => {
    //     console.log('this is the img file', files[0])
    //     const formData = new FormData()
    //     formData.append('file', files[0])
    //     formData.append('upload_preset', 'm3xdo5kt')

    //     axios.post('https://api.cloudinary.com/v1_1/paulinal3/image/upload', formData)
    //         .then(res => console.log(res))
    // }

    const handleFileChange = ({ target }) => {
        console.log('this is the img file', target.files[0])
        setFileData(target.files[0])
        setImage(target.value)
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
                <Form.Group className='mb-3' controlId='title'>
                    <Form.Label className='newProblemForm'>Title</Form.Label>
                    <Form.Control 
                        type='text' 
                        name='title' 
                        value={newProblem.title} 
                        onChange={handleChange} 
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as='textarea' rows={3} 
                        type='text' 
                        name='description' 
                        value={newProblem.description} 
                        onChange={handleChange} 
                    />
                </Form.Group>
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
                <Button id='formBtn' onClick={() => createNewProblem()}>Post Problem</Button>
            </Form>
        </div>
    )
}