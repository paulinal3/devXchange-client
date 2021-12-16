import { Form } from "react-bootstrap"
import { useNavigate, useLocation } from "react-router-dom"
import { getOneProblem, updateProblem } from "../../api/problems"
import { useState, useEffect } from "react"

export default function EditProblem(props) {
    const { pathname } = useLocation()
    const problemId = pathname.split('/')[3]
    console.log('this is the problem id:', problemId)
    const navigate = useNavigate()
    
    const [changeProblem, setChangeProblem] = useState ({})

    useEffect(() => {
        getOneProblem(problemId)
        .then((problem) => {
            console.log('these are all the problems in the db\n', problem.data)
            setChangeProblem(problem.data.problem)
        })
            .catch(err => console.error(err))
    }, [])

    const handleChange = (e) => {
        setChangeProblem({
            ...changeProblem, [e.target.name]: e.target.value
        })
    }
    const editProblem = () => {
        updateProblem(props.user, problemId, changeProblem)
            .then(() => {
                props.refreshProblems()
                setChangeProblem({})
            })
            .then(() => navigate(`/problems/${problemId}`))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Edit Your Problem</h1>
            <Form>
                <div>
                    <h3>{changeProblem.title}</h3>
                </div>
                <div>
                    <label htmlFor='description'>Description: </label>
                    <input id='description' type='text' name='description' value={changeProblem.description} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor='img'>Post a screenshot: </label>
                    <input id='img' type='file' name='img' onChange={handleChange} />
                </div>
                <input type='button' value='Update Problem' onClick={() => editProblem()} />
            </Form>
        </div>
    )
}
