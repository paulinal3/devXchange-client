import { useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { Card, Button } from 'react-bootstrap'

function ProfileProblems(props) {

    const [currentProblem, setCurrentProblem] = useState({})



    const changeCurrent = problem => {
        setCurrentProblem(problem)
    }
    // props.refreshProblems()


    console.log('this is user problems', props.user.problems)

    const allProblems = props.user.problems.map((p, i) => {
        let descSnippet = p.description.slice(0, 80) + "..."
        return (
            <Card style={{'margin-top':'20px'}}>
                <Card.Header style={{'background-color':'rgb(5, 88, 97)', 'color':'white'}}>Asked {moment(p.createdAt).fromNow()}</Card.Header>
                <Card.Body>
                    <Card.Title>{p.title}</Card.Title>
                    <Card.Text>
                        <p>{descSnippet}</p>
                    </Card.Text>
                    <Link to={`/problems/${p._id}`}
<<<<<<< HEAD
                        currProblem={props.currentProblem}><Button className="float-end" size="small" variant="primary" onClick={() => changeCurrent(p)} key={i}>Go to problem</Button></Link>
=======
                        currProblem={props.currentProblem}><Button className="float-end" size="sm" id="cardBtn" onClick={() => changeCurrent(p)} key={i}>Go to problem</Button></Link>
>>>>>>> ae17d0f5d0e0daeb4013225cc5ad37cf7803ea5e
                </Card.Body>
            </Card>

        )
    })
    return (
        <div>
            {allProblems}
        </div>
    )
}

export default ProfileProblems