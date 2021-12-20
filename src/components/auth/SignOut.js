import { useNavigate } from 'react-router-dom'

import { Button, ButtonGroup, Container } from 'react-bootstrap'

import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

const SignOut = (props) => {
    const { msgAlert, clearUser, user } = props
    console.log(props)

    const navigate = useNavigate()

    const onSignOut = () => {
        signOut(user)
            .finally(() =>
                msgAlert({
                    heading: 'Signed Out Successfully',
                    message: messages.signOutSuccess,
                    variant: 'success',
                })
            )
            .finally(() => navigate('/'))
            .finally(() => clearUser())
    }

    const onCancel = () => {
        navigate('/')
    }

    return (
        <>
            <div class="container-fluid bg-dark text-light p-5">
                <div class="container bg-dark p-5">
                    <h1 class="display-4">Are you sure you want to sign out?</h1>
                    <h4>We hate to see you go...</h4>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                    <ButtonGroup id='signOutBtns'>
                        <Button variant='danger' onClick={onSignOut}>
                            Sign Out
                        </Button>
                        <Button style={{'margin-left':'5px'}} id='signOutBtn' onClick={onCancel}>
                            Cancel
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </>
    )
}

export default SignOut
