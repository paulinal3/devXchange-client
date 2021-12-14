import { Link } from 'react-router-dom'
import Details from './Details'
import moment from 'moment'

function Problem(props) {
    <Details />
    return (
        <>
            <Link to={`/problems/${props.problem._id}`} state={props.currentProblem}>{props.problem.title}</Link>
            <p>Asked: {moment(props.problem.createdAt).fromNow()}</p>
            <p>by {props.problem._id}</p>
        </>
    )
}

export default Problem