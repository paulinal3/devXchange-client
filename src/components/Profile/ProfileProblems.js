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
            <Card >
                <Card.Header>Asked {moment(p.createdAt).fromNow()}</Card.Header>
                <Card.Body>
                    <Card.Title>{p.title}</Card.Title>
                    <Card.Text>
                        <p>{descSnippet}</p>
                    </Card.Text>
                    <Link to={`/problems/${p._id}`}
                        currProblem={props.currentProblem}><Button className="float-end" size="sm" variant="primary" onClick={() => changeCurrent(p)} key={i}>Go to problem</Button></Link>
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