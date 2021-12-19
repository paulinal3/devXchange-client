import { useState } from "react"
import { ListGroup, Badge } from "react-bootstrap"
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
            <ListGroup.Item as="li" className='name' style={{ 'background-color': '#055861', 'color': 'white', 'margin-top': '20px' }}>
                {props.user.firstName}'s Dashboard
            </ListGroup.Item>
            <ListGroup.Item as="li">
                <small>Member since: {moment(memberDate).format("MMMM YYYY ")}</small>
            </ListGroup.Item>
            <ListGroup.Item as="li" disabled>
                    <small>Problems Posted: </small>
                    <Badge variant="primary" pill>
                        {problemsPosted}
                    </Badge>

            </ListGroup.Item>
            <ListGroup.Item as="li" disabled>
                <small>Answers Posted: </small>
                <Badge variant="primary" pill>
                    {answersPosted}
                </Badge>

            </ListGroup.Item>
            <ListGroup.Item as="li"><Link to='../change-password' >
                Change Password
            </Link></ListGroup.Item>
        </ListGroup>

    )
}
export default ProfileDashboard