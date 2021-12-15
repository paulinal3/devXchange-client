import { Link } from 'react-router-dom'
import ShowProblem from './ShowProblem'
import moment from 'moment'

function Problem(props) {
    // <ShowProblem /> 
    return (
        <>
            <Link to={`/problems/${props.problem._id}`} state={props.currentProblem}>{props.problem.title}</Link>
            <p>Asked: {moment(props.problem.createdAt).fromNow()}</p>
            <p>by {props.problem.owner.firstName} {props.problem.owner.lastName.charAt(0)}.</p>
        </>
    )
}

export default Problem