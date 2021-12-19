import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Button } from "react-bootstrap"

import { destroyProblem } from '../../api/problems'
import { getProbAnswers, postAnswer } from '../../api/answers'

import NewAnswer from '../Answers/NewAnswer'
import ShowAnswer from '../Answers/ShowAnswer'
import EditProblem from './EditProblem'
<<<<<<< HEAD
import { Button } from "react-bootstrap"
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

=======
>>>>>>> ae17d0f5d0e0daeb4013225cc5ad37cf7803ea5e

function ShowProblem(props) {

    const [newSolution, setNewSolution] = useState('')
    const [probAnswers, setProbAnswers] = useState([])
    const [modalShow, setModalShow] = useState(false)

    const { pathname } = useLocation()
    const problemId = pathname.split('/')[2]
    // console.log('this is the problem id:', problemId)
    const navigate = useNavigate()

    let currentProblem = props.problems && props.problems.find(x => x._id == problemId)
    console.log('this is the current problem\n', currentProblem)

    let lastNameInit = currentProblem && currentProblem.owner.lastName.charAt(0)

<<<<<<< HEAD
    let modules = {
        syntax: true,
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link'],
            ['clean']
        ],
    }

    const navigate = useNavigate()

=======
>>>>>>> ae17d0f5d0e0daeb4013225cc5ad37cf7803ea5e
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

    // display all answers of a problem from newest to oldest
    const getAllProbAnswers = probAnswers.reverse().map((answer, i) => {
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
        <body id='showProblemBody'>
            {!currentProblem ? <h1>Loading...</h1> : (
<<<<<<< HEAD
                <div style={{width: '800px'}}>
                    <h3>{currentProblem.title}</h3>
                    <small className='name'>Asked by: {currentProblem.owner.firstName} {lastNameInit}.</small>
                    <hr />
                    <ReactQuill
                        value={currentProblem.description}
                        readOnly={true}
                        theme={"bubble"}
                        modules= {modules}
                    />
=======
                <>
                    {/* <----- CURRENT PROBLEM -----> */}
                    {/* <----- Jumbotron -----> */}
                    <div class='container-fluid bg-dark text-light p-5'>
                        <h3 class='mb-3'>{currentProblem.title}</h3>
                    </div>
                    {/* <div>
                        <h3>{currentProblem.title}</h3>
                        <small className='name'>Asked by: {currentProblem.owner.firstName} {lastNameInit}.</small>
                    </div> */}
>>>>>>> ae17d0f5d0e0daeb4013225cc5ad37cf7803ea5e
                    {props.user && props.user._id == currentProblem.owner._id &&
                        // <----- EDIT/DELETE BUTTONS -----> //
                        <div id='showProblemBtn'>
                            <Button id='cardBtn' size='sm' onClick={() => setModalShow(true)}>Edit Problem</Button>

                            <EditProblem
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                currentProb={currentProblem}
                                currUser={props.user}
                                refreshProb={props.refreshProblems}
                            />
                            <Button className="mr-1" variant="danger" size='sm' onClick={() => deleteProblem(props.user, currentProblem._id)}>Delete</Button>
                        </div>
                    }
                    <div>

                    </div>
                    {/* <p style={{'white-space':'pre-wrap', width:'400px'}}>{currentProblem.description}</p> */}
                    <p>{currentProblem.description}</p>
                    {/* <----- NEW ANSWER -----> */}
                    <NewAnswer
                        handleAnswer={handleAnswerChange}
                        newSolution={newSolution}
                        createAnswer={createAnswer}
                        user={props.user}
                        currentProblem={currentProblem}
                    />
                    {/* <----- ALL ANSWERS -----> */}
                    <ol>
                        {getAllProbAnswers}
                    </ol>
                </div>
            )}
        </body>
    )
}

export default ShowProblem