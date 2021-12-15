import { Link } from 'react-router-dom'
import ShowProblem from './ShowProblem'
import moment from 'moment'

function Problem(props) {
    // <ShowProblem /> 
    return (
        <>
            <Link to={`/problems/${props.problem._id}`} state={props.currentProblem}>{props.problem.title}</Link>  <small>by {props.problem.owner.firstName} {props.problem.owner.lastName.charAt(0)}.</small>
            <p>Asked {moment(props.problem.createdAt).fromNow()}</p>
        </>
    )
}

export default Problem