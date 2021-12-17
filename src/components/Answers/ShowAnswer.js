import EditAnswer from "./EditAnswer"
import { useState } from "react"
import { Button } from "react-bootstrap"
import moment from 'moment'

export default function ShowAnswer(props) {
    const [modalShow, setModalShow] = useState(false)

    let contribLastNameInit = props.answer.contributor.lastName.charAt(0)

    return (
        <div>
            {props.answer.solution}
            <div>
                <small>answered {moment(props.answer.updatedAt).fromNow()}</small>
            </div>
            <div>
                <small className='name'>Submitted by: {props.answer.contributor.firstName} {contribLastNameInit}.</small>
            </div>

            <>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Edit Answer
                </Button>

                <EditAnswer
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    currentAnswer={props.answer}
                    currUser={props.currentUser}
                    refreshAnswers={props.refreshProbAnswers}
                />
            </>
        </div>
    )
}
