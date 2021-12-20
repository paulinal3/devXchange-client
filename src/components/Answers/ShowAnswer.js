import EditAnswer from "./EditAnswer"
import { useState } from "react"
import { Button, Form, Accordion } from "react-bootstrap"
import moment from 'moment'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

export default function ShowAnswer(props) {
    const [modalShow, setModalShow] = useState(false)

    let modules = {
        syntax: true,
    }

    let contribLastNameInit = props.answer.contributor.lastName.charAt(0)

    return (
        <Accordion id='newAnswer' defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header id='showAnswerHeader'>Submitted by: {props.answer.contributor.firstName} {contribLastNameInit}.
                    <span id="momentPill" class='badge rounded-pill bg-dark'> {moment(props.answer.updatedAt).fromNow()} </span>
                </Accordion.Header>
                <Accordion.Body>

                    <ReactQuill
                        value={props.answer.solution}
                        readOnly={true}
                        theme={"bubble"}
                        modules={modules}
                    />
                    {props.currentUser._id === props.answer.contributor._id ?
                        <div id='editBtnContainer'>
                            <Button id="cardBtn" size='sm' style={{ 'display': 'flex', 'margin-top': '20px' }} onClick={() => setModalShow(true)}>
                                Edit Answer
                            </Button>

                            <EditAnswer
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                currentAnswer={props.answer}
                                currUser={props.currentUser}
                                refreshAnswers={props.refreshProbAnswers}
                            />
                        </div> : <span></span>
                    }
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}
