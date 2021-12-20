import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function ProfileProblemsList(props) {

    const allUsersProblems = props.userProblems.reverse().map((p, i) => {
        return (
            <li>
                <Link to={`/problems/${p._id}`}>{p.title}</Link>
            </li>
        )
    })

    return (
        <Card id='profileListContainer'>
            <Card.Header id='profileListHeader'>Posted Problems History</Card.Header>
            <Card.Body id='profileListBody'>
                <Card.Text class='overflow-auto'>
                    {allUsersProblems} 
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
