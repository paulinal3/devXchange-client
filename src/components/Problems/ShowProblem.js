import { getOneProblem } from "../../api/problems"
import { useLocation } from 'react-router-dom'

function ShowProblem(props) {
    const { pathname } = useLocation()
    const problemId = pathname.split('/')[2]
    console.log('this is the problem id:', problemId)
    let currentProblem = props.problems && props.problems.find(x => x._id == problemId)
    console.log('this is the current problem\n', currentProblem)
    
     function deleteProblem(problemId)
    {
        fetch('/problems/' + problemId ,{
            method: 'DELETE'
        })
        .then((result) => {
            result.json().then((resp) => {
                console.log(resp)
            })
        })
    }
  
    return (
        <>
            <h3>{currentProblem.title}</h3>
            <small>Asked by: {currentProblem.owner.firstName}</small>
            <hr />
            <p>{currentProblem.description}</p>
            <p>{currentProblem.answers}</p>
            {/* ternary conditional to show/hide edit and delete buttons if I'm the owner of the problem  */}
            {/* {currentProblem.owner===currentProblem ? */}
                {/* <div> */}
                    {/* <input type="button" value="Edit" onClick={() => props.editProblem()} />
                    <input type="button" value="Delete" onClick={() => props.deleteProblem()} /> */}
                    <button onClick={() => deleteProblem(problemId)}>Delete</button>
                {/* </div> : null } */}
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

export default ShowProblem