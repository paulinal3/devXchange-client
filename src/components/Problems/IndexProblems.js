import { useState} from 'react'

import Problem from './Problem'

export default function IndexProblems(props) {
    const [currentProblem, setCurrentProblem] = useState({})

    const changeCurrent = problem => {
        setCurrentProblem(problem)
    }

    console.log("this is props.problems\n", props.problems)
    // sort through all problems
    const allProblems = props.problems.sort((a, b) => {
        // return all problems from newest to oldest
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    }).reverse().map((p, i) => {
        return (
            <li onClick={() => changeCurrent(p)} key={i}>
                <Problem currentProblem={currentProblem} problem={p} key={i} />
            </li>
        )
    })

    return (
        <div>
            <h1>Problems Page</h1>
            {/* <FilterProblem 
                filterProblems={props.handleFilter}
                searchVal={props.search} 
                searchChange={props.handleSearch}
            /> */}
            <br />
            <ol>
                {allProblems}
            </ol>
        </div>
    )
}
