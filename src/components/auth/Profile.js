import { useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'





function Profile(props) {
    
    const [currentProblem, setCurrentProblem] = useState({})
    
    

    const changeCurrent = problem => {
        setCurrentProblem(problem)
    }
    // props.refreshProblems()
    

    console.log('this is user problems', props.user.problems)

    const allProblems = props.user.problems.map((p, i) => {
        let descSnippet = p.description.slice(0, 80) + "..."
        return (
            <li onClick={() => changeCurrent(p)} key={i}>
                <Link to={`/problems/${p._id}`} 
                currProblem={props.currentProblem}>{p.title}</Link>
                <p>{descSnippet}</p>
                <p>Asked {moment(p.createdAt).fromNow()}</p>
            </li>
        )
    })
    return (
        <div>
            <h1>Profile page</h1>
            <ol>
               {allProblems}
            </ol>
        </div>
    )
}

export default Profile