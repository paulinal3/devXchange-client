import EditAnswer from "./EditAnswer"
import { useState } from "react"
import { Button, Form, Accordion } from "react-bootstrap"
import moment from 'moment'

export default function ShowAnswer(props) {
    const [modalShow, setModalShow] = useState(false)
    
    let contribLastNameInit = props.answer.contributor.lastName.charAt(0)
    return (
        <>
            <div id='answerContainer'>
                <Accordion id='newAnswer' defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header >Submitted by: {props.answer.contributor.firstName} {contribLastNameInit}.
                            <span id="momentPill" class='badge rounded-pill bg-dark'> {moment(props.answer.updatedAt).fromNow()} </span>
                        </Accordion.Header>
                        <Accordion.Body>
                            {props.answer.solution}
                            <>
                                <Button id="cardBtn" style={{'display':'flex', 'margin-top':'20px'}} onClick={() => setModalShow(true)}>
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
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}
