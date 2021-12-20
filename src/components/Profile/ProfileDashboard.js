import { ListGroup, Badge } from "react-bootstrap"
import { Link } from "react-router-dom"

import moment from 'moment'

export default function ProfileDashboard(props) {

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
                <small>Problems Posted: </small><span> </span>

                <Badge bg="dark" pill >
                    {problemsPosted}
                </Badge>

            </ListGroup.Item>
            <ListGroup.Item as="li" disabled>
                <small>Answers Posted:</small><span> </span>
                <Badge bg="dark" pill>
                    {answersPosted}
                </Badge>


            </ListGroup.Item>
            <ListGroup.Item as="li"><Link to='../change-password' >
                Change Password
            </Link></ListGroup.Item>
        </ListGroup>
    )
}
