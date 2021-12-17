import { useState } from "react"
import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import moment from 'moment'


function ProfileDashboard(props) {

    // const [currentProblem, setCurrentProblem] = useState({})

    // const changeCurrent = problem => {
    //     setCurrentProblem(problem)
    // }
    let memberDate = props.user.createdAt
    let problemsPosted = props.user.problems.length
    let answersPosted = props.user.answers.length

        return (
            <ListGroup as="ul">
                <ListGroup.Item as="li" active className='name'>
                    {props.user.firstName}'s Dashboard
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    <small>Member since: {moment(memberDate).format("MMMM YYYY ")}</small>
                    </ListGroup.Item>
                <ListGroup.Item as="li" disabled>
                <small>Problems Posted: {problemsPosted}</small>
                </ListGroup.Item>
                <ListGroup.Item as="li" disabled>
                    <small>Answers Posted: {answersPosted}</small>
                </ListGroup.Item>
                <ListGroup.Item as="li" disabled>
                
                </ListGroup.Item>
                <ListGroup.Item as="li"><Link to='../change-password' >
				Change Password
			</Link></ListGroup.Item>
            </ListGroup>

        )
    }
export default ProfileDashboard