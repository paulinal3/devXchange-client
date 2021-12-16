import { useLocation, useNavigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { destroyProblem } from '../../api/problems'
import { getProbAnswers, postAnswer } from '../../api/answers'
import NewAnswer from '../Answers/NewAnswer'
import ShowAnswer from '../Answers/ShowAnswer'

function ShowProblem(props) {
    const [newSolution, setNewSolution] = useState('')
    const [probAnswers, setProbAnswers] = useState([])

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

    useEffect(() => {
        // axios call to find all answers connected to current problem's id
        getProbAnswers(currentProblem._id)
            .then(answers => {
                console.log('these are all the problems answers\n', answers.data.foundAnswers)
                // set the found answers in db to state
                setProbAnswers(answers.data.foundAnswers)
            })
            .catch(err => console.error(err))
    }, [])

    // refresh answers to include posted and updated answers
    const refreshProbAnswers = () => {
        getProbAnswers(currentProblem._id)
            .then(answers => {
                console.log('these are all the problems answers\n', answers.data.foundAnswers)
                setProbAnswers(answers.data.foundAnswers)
            })
            .catch(err => console.error(err))
    }

    const getAllProbAnswers = probAnswers.map((answer, i) => {
        return (
            <li key={i}>
                <ShowAnswer answer={answer} key={i} currentProblemId={currentProblem._id} />
            </li>
        )
    })

    const handleChange = (e) => {
        setNewSolution({ ...newSolution, [e.target.name]: e.target.value })
    }

    const createAnswer = () => {
        postAnswer(props.user, currentProblem._id, newSolution)
            .then(() => {
                refreshProbAnswers()
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
            <button onClick={() => deleteProblem(props.user, currentProblem._id)}>Delete</button>
            <Link to={`/problems/edit/${currentProblem._id}`}><button>Edit</button></Link>
            
            <ol>
                {getAllProbAnswers}
            </ol>

            <NewAnswer handleChange={handleChange} newSolution={newSolution} createAnswer={createAnswer} />
        </>
    )
}

export default ShowProblem