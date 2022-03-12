import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, FloatingLabel } from 'react-bootstrap'

import { signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

const SignIn = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const onSignIn = (event) => {
        event.preventDefault()
        console.log('the props', props)
        const { msgAlert, setUser } = props

        const credentials = { email, password }

        signIn(credentials)
            .then((res) => setUser(res.data.user))
            .then(() =>
                msgAlert({
                    heading: 'Sign In Success',
                    message: messages.signInSuccess,
                    variant: 'success',
                })
            )
            .then(() => navigate('/'))
            .catch((error) => {
                setEmail('')
                setPassword('')
                msgAlert({
                    heading: 'Sign In Failed with error: ' + error.message,
                    message: messages.signInFailure,
                    variant: 'danger',
                })
            })
    }

    return (
        <div>
            <div>
                {/* <----- JUMBOTRON -----> */}
                <div class='container-fluid bg-dark text-light p-5'>
                    <h1 class='mb-3'>Welcome back</h1>
                    <h4 class='mb-3'>Collaborate and share knowledge for free</h4>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-10 col-md-8 mx-auto mt-5' id='signInForm'>
                    <Form onSubmit={onSignIn}>
                        <>
                            {/* <----- EMAIL -----> */}
                            <FloatingLabel
                                controlId='floatingInput'
                                label='Email address'
                                className='mb-3'
                            >
                                <Form.Control 
                                    required
                                    type='email'
                                    name='email'
                                    value={email}
                                    placeholder='Email'
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </FloatingLabel>
                            {/* <----- PASSWORD -----> */}
                            <FloatingLabel 
                                controlId='floatingPassword' 
                                label='Password'  
                                className='mb-3'
                            >
                                <Form.Control
                                    required
                                    name='password'
                                    value={password}
                                    type='password'
                                    placeholder='Password'
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </FloatingLabel>
                        </>
                        <Button id='signin-btn' type='submit'>
                            Sign In
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default SignIn
