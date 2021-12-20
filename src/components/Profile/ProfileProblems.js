import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

import moment from 'moment'

function ProfileProblems(props) {

    const [currentProblem, setCurrentProblem] = useState({})

    let modules = {
        syntax: true
    }

    const changeCurrent = problem => {
        setCurrentProblem(problem)
    }

    console.log('this is user problems', props.user.problems)

    // const allProblems = props.user.problems.map((p, i) => {

    //     const descriptionSnippet = p.description.split('</p>')[0]

    const allProblems = props.userProblems.filter((p, i) => i > props.userProblems.length - 5).reverse().map((p, i) => {

        const descriptionSnippet = p.description.split('</p>')[0]

        return (
            <Card id='profileProblem' style={{ 'margin-top': '20px' }}>
                <Card.Header style={{ 'background-color': 'rgb(5, 88, 97)', 'color': 'white' }}>Asked {moment(p.createdAt).fromNow()}</Card.Header>
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
                            id='profileProblemBtn'
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