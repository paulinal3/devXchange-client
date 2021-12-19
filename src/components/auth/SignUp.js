import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignUp = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const navigate = useNavigate()

    const onSignUp = (event) => {
        event.preventDefault()

        const { msgAlert, setUser } = props

        const credentials = { firstName, lastName, email, password, passwordConfirmation }

        signUp(credentials)
            .then(() => signIn(credentials))
            .then((res) => setUser(res.data.user))
            .then(() =>
                msgAlert({
                    heading: 'Sign Up Success',
                    message: messages.signUpSuccess,
                    variant: 'success',
                })
            )
            .then(() => navigate('/'))
            .catch((error) => {
                setFirstName('')
                setLastName('')
                setEmail('')
                setPassword('')
                setPasswordConfirmation('')
                msgAlert({
                    heading: 'Sign Up Failed with error: ' + error.message,
                    message: messages.signUpFailure,
                    variant: 'danger',
                })
            })
    }

    return (
        <div>
            <div>
                {/* Jumbotron */}
                <div class="container-fluid bg-dark text-light p-5">
                    <h1 class="mb-3">Join the DevXChange community </h1>
                    <h4 class="mb-3">Collaborate and share knowledge for free</h4>
                </div>
                {/* Jumbotron */}
            </div>

            <div className='row'>
                <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                    {/* <h3>Sign Up</h3> */}
                    <Form onSubmit={onSignUp}>
                        <Form.Group controlId='firstName'>
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type='firstName'
                                name='firstName'
                                value={firstName}
                                placeholder='Enter first name'
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId='lastName'>
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type='lastName'
                                name='lastName'
                                value={lastName}
                                placeholder='Enter last name'
                                onChange={e => setLastName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId='email'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                required
                                type='email'
                                name='email'
                                value={email}
                                placeholder='Enter email'
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                name='password'
                                value={password}
                                type='password'
                                placeholder='Password'
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId='passwordConfirmation'>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control
                                required
                                name='passwordConfirmation'
                                value={passwordConfirmation}
                                type='password'
                                placeholder='Confirm Password'
                                onChange={e => setPasswordConfirmation(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant='primary' type='submit'>
                            Sign Up
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default SignUp