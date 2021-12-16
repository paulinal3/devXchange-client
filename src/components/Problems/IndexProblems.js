import { useState} from 'react'
import FilterProblem from './FilterProblem'
import Problem from './Problem'

export default function IndexProblems(props) {
    const [currentProblem, setCurrentProblem] = useState({})
    const [deleteProblem, setDeleteProblem] = useState({})

    const changeCurrent = problem => {
        setCurrentProblem(problem)
    }

    console.log("this is props.problems\n", props.problems)
    const allProblems = props.problems.sort((a, b) => {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    }).reverse().map((p, i) => {
        return (
            <li onClick={() => changeCurrent(p)} key={i}>
                <Problem currentProblem={currentProblem} problem={p} key={i} />
                <br />
            </li>
        )
        })

    return (
        <div>
            <h1>Posted Problems</h1>
            <FilterProblem 
                filterProblems={props.handleFilter}
                searchVal={props.search} 
                searchChange={props.handleSearch}
            />
            <br />
            <ol>
                {allProblems}
            </ol>
        </div>
    )
}