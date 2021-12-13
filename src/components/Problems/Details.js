import { getOneProblem } from "../../api/problems"
import { useLocation } from 'react-router-dom'

function Details() {
    const location = useLocation()
    const problem = location.state
    return (
        <h1>{problem.title}</h1>
    )
}

export default Details