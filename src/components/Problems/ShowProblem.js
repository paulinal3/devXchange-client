import { useLocation, useNavigate, Link } from 'react-router-dom'
import { destroyProblem } from '../../api/problems'
import apiUrl from '../../apiConfig'

function ShowProblem(props) {
    // const [newSolution, setNewSolution] = useState('')

    const { pathname } = useLocation()
    const problemId = pathname.split('/')[2]
    console.log('this is the problem id:', problemId)
    let currentProblem = props.problems && props.problems.find(x => x._id == problemId)
    console.log('this is the current problem\n', currentProblem)
    let lastNameInit = currentProblem && currentProblem.owner.lastName.charAt(0)
    const navigate = useNavigate()

    const deleteProblem = () => {
        destroyProblem(props.user, currentProblem._id)
            // console.log('THIS IS:', `${apiUrl}/problems/${itemId}`)
            .then(() => {
                props.refreshProblems()
                navigate('/problems')
            })
            .catch(err => {
                console.error(err)
            })
    }

    // const createAnswer = () => {
    //     postAnswer(props.user, currentProblem._id)
    //         .then(() => {
    //             setNewSolution('')
    //         })
    //         .catch(err => {
    //             console.error(err)
    //         })
    // }

    // const postAnswer = (user, currentProblem._id) => {
    //     return axios({
    //         method: 'POST',
    //         url: `${apiUrl}/answers`,
    //         headers: {
    //             Authorization: `Token token=${user.token}`
    //         },
    //         data: {
    //             answer: {
    //                 solution: newSolution.title,
    //             }
    //         }
    //     })
    // }
    console.log('current user:', props.user)
    console.log('current problem:', currentProblem)
    return (
        <>
            {!currentProblem ? <h1>Loading...</h1> : (
                <>
                    <h3>{currentProblem.title}</h3>
                    <small>Asked by: {currentProblem.owner.firstName} {lastNameInit}.</small>
                    <hr />
                    <p>{currentProblem.description}</p>
                    <p>{currentProblem.answers}</p>
                    {props.user && props.user._id == currentProblem.owner._id &&
                        <>
                            <button onClick={() => deleteProblem(props.user, currentProblem._id)}>Delete</button>
                            <Link to={`/problems/edit/${currentProblem._id}`}><button>Edit</button></Link>
                        </>
                    }
                    <p>Your Answer</p>
                    <form >
                        <label>
                            <textarea rows="5" cols="50" autofocus />
                        </label>
                        <br />
                        {/* <input type="button" value="Post Your Answer" onclick={() => createAnswer()} /> */}
                    </form>
                </>
            )}
        </>
    )
}

export default ShowProblem