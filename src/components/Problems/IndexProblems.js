import { useState, useEffect } from 'react'
import FilterProblem from './FilterProblem'
import Problem from './Problem'

export default function IndexProblems(props) {
    const [currentProblem, setCurrentProblem] = useState({})

    const changeCurrent = problem => {
        setCurrentProblem(problem)
    }

    console.log("this is props.problems\n", props.problems)
    const allProblems = props.problems.map((p, i) => {
        return (
            <li onClick={() => changeCurrent(p)} key={i}>
                <Problem currentProblem={currentProblem} problem={p} key={i} />
            </li>
        )
    })
    
    return (
        <div>
            <h1>Problems Page</h1>
            <FilterProblem filterProblems={props.handleFilter} />
            <br />
            <ol>
                {allProblems}
            </ol>
        </div>
    )
}
