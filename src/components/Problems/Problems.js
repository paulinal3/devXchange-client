import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Problems (props) {

	const [currentProblem, setCurrentProblem] = useState({})

    const changeCurrent = problem => {
        setCurrentProblem(problem)
    }
    console.log("THIS IS:", props.problems)
    const allProblems = props.problems.map((p, i) => {
        return (
            <li onClick={() => changeCurrent(p)} key={i}>
                <Link to={`/problems/${p._id}`}>{p.title}</Link>
            </li>
        )
    })
    return (
        <div>
        <h1>Problems page</h1>
        <ol>
            {allProblems}
        </ol>
        </div>
    )
}

export default Problems