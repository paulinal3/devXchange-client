import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { destroyProblem } from '../../api/problems'
import { getProbAnswers, postAnswer } from '../../api/answers'
import NewAnswer from '../Answers/NewAnswer'
import ShowAnswer from '../Answers/ShowAnswer'
import EditProblem from './EditProblem'
import { Button } from "react-bootstrap"

function ShowProblem(props) {
    const [newSolution, setNewSolution] = useState('')
    const [probAnswers, setProbAnswers] = useState([])
    const [modalShow, setModalShow] = useState(false)

    const { pathname } = useLocation()
    const problemId = pathname.split('/')[2]
    // console.log('this is the problem id:', problemId)

    let currentProblem = props.problems && props.problems.find(x => x._id == problemId)
    console.log('this is the current problem\n', currentProblem)

    let lastNameInit = currentProblem && currentProblem.owner.lastName.charAt(0)

    const navigate = useNavigate()

    // helper method attached to delete button
    const deleteProblem = () => {
        // axios call to delete problem from db
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
                <ShowAnswer
                    answer={answer}
                    key={i}
                    currentProblemId={currentProblem._id}
                    refreshProbAnswers={refreshProbAnswers}
                    currentUser={props.user}
                />
            </li>

        )
    })
    // display them from newest to oldest
    getAllProbAnswers.reverse()

    // passed down as a prop to NewAnswer
    const handleAnswerChange = (e) => {
        setNewSolution({ ...newSolution, [e.target.name]: e.target.value })
    }

    // helper method passed down as a prop to NewAnswer
    const createAnswer = () => {
        // axios call to create a new answer in db
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
            {!currentProblem ? <h1>Loading...</h1> : (
                <>
                    <h3>{currentProblem.title}</h3>
                    <small className='name'>Asked by: {currentProblem.owner.firstName} {lastNameInit}.</small>
                    <hr />
                    <p style={{'white-space':'pre-wrap', width:'400px'}}>{currentProblem.description}</p>
                    {props.user && props.user._id == currentProblem.owner._id &&
                        <>
                            <Button onClick={() => deleteProblem(props.user, currentProblem._id)}>Delete</Button>
                            {/* <Link to={`/problems/edit/${currentProblem._id}`}><button>Edit</button></Link> */}
                            <>
                                <Button variant="primary" onClick={() => setModalShow(true)}>Edit Problem</Button>

                                <EditProblem
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                    currentProb={currentProblem}
                                    currUser={props.user}
                                    refreshProb={props.refreshProblems}
                                />
                            </>
                        </>
                    }

                    <NewAnswer
                        handleAnswer={handleAnswerChange}
                        newSolution={newSolution}
                        createAnswer={createAnswer}
                    />

                    <hr />

                    <ol>
                        {getAllProbAnswers}
                    </ol>
                </>
            )}
        </>
    )
}

export default ShowProblem