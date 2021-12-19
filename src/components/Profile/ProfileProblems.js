import { useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { Card, Button } from 'react-bootstrap'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

function ProfileProblems(props) {

    const [currentProblem, setCurrentProblem] = useState({})

    let modules = {
        syntax: true
    }
    

    const changeCurrent = problem => {
        setCurrentProblem(problem)
    }
    // props.refreshProblems()

    

    console.log('this is user problems', props.user.problems)

    const allProblems = props.user.problems.map((p, i) => {

        const descriptionSnippet = p.description.split('</p>')[0]

        return (
            <Card style={{'margin-top':'20px'}}>
                <Card.Header style={{'background-color':'rgb(5, 88, 97)', 'color':'white'}}>Asked {moment(p.createdAt).fromNow()}</Card.Header>
                <Card.Body>
                    <Card.Title>{p.title}</Card.Title>
                    <Card.Text>
                    <ReactQuill
                        value={descriptionSnippet}
                        readOnly={true}
                        theme={"bubble"}
                        modules={modules}
                        />
                    </Card.Text>
                    <Link to={`/problems/${p._id}`}
                        currProblem={props.currentProblem}>
                        <Button 
                            className="float-end" 
                            size="small" 
                            variant="primary" 
                            onClick={() => changeCurrent(p)} key={i}>
                                Go to problem
                        </Button>
                    </Link>
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