import { useState, useEffect } from 'react'
import Problem from './Problem'

function IndexProblems(props) {

    const [currentProblem, setCurrentProblem] = useState({})

    const changeCurrent = problem => {
        setCurrentProblem(problem)
    }
    // props.refreshProblems()
    console.log('this is the prop of problems\n', props.problems)
    const allProblems = props.problems.map((p, i) => {
        return (
            <li onClick={() => changeCurrent(p)} key={i}>
                <Problem currentProblem={currentProblem} problem={p} key={i} />
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

export default IndexProblems