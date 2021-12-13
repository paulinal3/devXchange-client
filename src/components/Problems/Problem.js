import { Link } from 'react-router-dom'
import Details from './Details'

function Problem(props) {
    <Details />
    return (
        <Link to={`/problems/${props.problem._id}`}state={props.currentProblem}>{props.problem.title}</Link>
    )
}

export default Problem