import { Form } from 'react-bootstrap'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { destroyProblem } from '../../api/problems'
import { useState } from 'react'
import { postAnswer } from '../../api/answers'


function ShowProblem(props) {
    const [newSolution, setNewSolution] = useState('')

    const { pathname } = useLocation()
    const problemId = pathname.split('/')[2]
    console.log('this is the problem id:', problemId)
    let currentProblem = props.problems && props.problems.find(x => x._id == problemId)
    console.log('this is the current problem\n', currentProblem)
    let lastNameInit = currentProblem.owner.lastName.charAt(0)
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

    const handleChange = (e) => {
        setNewSolution({ ...newSolution, [e.target.name]: e.target.value })
    }

    const createAnswer = () => {
        postAnswer(props.user, currentProblem._id, newSolution)
            .then(() => {
                setNewSolution('')
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <>
            <h3>{currentProblem.title}</h3>
            <small>Asked by: {currentProblem.owner.firstName} {lastNameInit}.</small>
            <hr />
            <p>{currentProblem.description}</p>
            <p>{currentProblem.answers}</p>
            <button onClick={() => deleteProblem(props.user, currentProblem._id)}>Delete</button>
            <Link to={`/problems/edit/${currentProblem._id}`}><button>Edit</button></Link>

            <p>Your Answer</p>
            <Form>
                {/* <label>
                    <textarea rows='5' cols='50' autofocus />
                </label> */}
                <input id='solution' type='text' name='solution' value={newSolution.solution} onChange={handleChange} />
                <input type='button' value='Post Your Answer' onClick={() => createAnswer()} />
            </Form>
        </>
    )
}

export default ShowProblem