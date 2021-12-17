import { useState } from "react"
import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"


function ProfileDashboard(props) {

    // const [currentProblem, setCurrentProblem] = useState({})

    // const changeCurrent = problem => {
    //     setCurrentProblem(problem)
    // }
        return (
            <ListGroup as="ul">
                <ListGroup.Item as="li" active className='name'>
                    {props.user.firstName}'s Dashboard
                </ListGroup.Item>
                <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item as="li" disabled>
                    Morbi leo risus
                </ListGroup.Item>
                <ListGroup.Item as="li"><Link to='../change-password' >
				Change Password
			</Link></ListGroup.Item>
            </ListGroup>

        )
    }
export default ProfileDashboard