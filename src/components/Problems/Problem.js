import { Link } from 'react-router-dom'
import moment from 'moment'

export default function Problem(props) {
    let firstName = props.problem.owner.firstName
    let lastNameInit = props.problem.owner.lastName.charAt(0)
    return (
        <>
            <Link to={`/problems/${props.problem._id}`} 
                state={props.currentProblem}>{props.problem.title}</Link> <small>by {firstName} {lastNameInit}.</small>
            <p>Asked {moment(props.problem.createdAt).fromNow()}</p>
        </>
    )
}