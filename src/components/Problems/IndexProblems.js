import { useState, useEffect } from 'react'
import Problem from './Problem'

function IndexProblems(props) {

    const [currentProblem, setCurrentProblem] = useState({})
    const [deleteProblem, setDeleteProblem] = useState({})

    const changeCurrent = problem => {
        setCurrentProblem(problem)
    }

    // deleteProblem = (req.params.id) => {
    //     let newProblems = [...props.problems]
    //     newProblems.splice(index, 1)
    // }

    props.refreshProblems()
    console.log("THIS IS:", props.problems)
    const allProblems = props.problems.map((p, i) => {
        return (
            <li onClick={() => changeCurrent(p)} key={i}>
                <Problem currentProblem={currentProblem} problem={p} key={i} />
                <input type="button" value="Edit" onClick={() => props.editProblem(i)} />
                <input type="button" value="Delete" onClick={() => props.deleteProblem(i)} />
                {/* <button onClick={deleteProblem}>Delete</button> */}
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