import { getOneProblem } from "../../api/problems"
import { useLocation } from 'react-router-dom'

function Details(props) {
    const { pathname } = useLocation()
    const problemId = pathname.split('/')[2]
    console.log(problemId)
    let currentProblem = props.problems && props.problems.find(x => x._id == problemId)
    console.log(currentProblem)
    return (
        <>
            <h3>{currentProblem.title}</h3>
            <p>{currentProblem.description}</p>
            <p>{currentProblem.answers}</p>
            <p>Your Answer</p>
            <form >
                <label>
                <textarea rows="5" cols="50" autofocus />
                </label>
                <br />
                <input type="submit" value="Post Your Answer" />
            </form>
        </>
    )
}

export default Details