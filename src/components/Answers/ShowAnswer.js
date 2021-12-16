import EditAnswer from "./EditAnswer"
import { useState } from "react"
import { Button } from "react-bootstrap"

export default function ShowAnswer(props) {
    const [modalShow, setModalShow] = useState(false)

    let contribLastNameInit = props.answer.contributor.lastName.charAt(0)

    return (
        <div>
            {props.answer.solution}
            <div>
                <small>Submitted by: {props.answer.contributor.firstName} {contribLastNameInit}.</small>
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
