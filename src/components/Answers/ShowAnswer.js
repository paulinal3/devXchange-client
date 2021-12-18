import EditAnswer from "./EditAnswer"
import { useState } from "react"
import { Button, Form, Accordion } from "react-bootstrap"
import moment from 'moment'

export default function ShowAnswer(props) {
    const [modalShow, setModalShow] = useState(false)

    let contribLastNameInit = props.answer.contributor.lastName.charAt(0)
    return (
        <>
            {/* {!props.answer.solution ? <h1>Loading...</h1> : (
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
            )} */}
            <div id='answerContainer'>
                <Accordion id='newAnswer' defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Submitted by: {props.answer.contributor.firstName} {contribLastNameInit}.
                            <span class="badge rounded-pill bg-dark"> {moment(props.answer.contributor.createdAt).fromNow()} </span>
                        </Accordion.Header>
                        <Accordion.Body>
                            {props.answer.solution}
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
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}
