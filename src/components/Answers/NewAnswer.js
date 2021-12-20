import { useState } from 'react'
import { Form, Accordion, Button } from 'react-bootstrap'
import { postAnswer } from '../../api/answers'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


export default function NewAnswer(props) {
    const [value, setValue] = useState('')

    const createAnswer = () => {
        // axios call to create a new answer in db
        postAnswer(props.user, props.currentProblem._id, value)
            .then(() => {
                props.refreshProbAnswers()
                setValue('')
            })
            .catch(err => {
                console.error(err)
            })
    }
    

    let modules = {
        syntax: true,
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link'],
            ['clean']
        ],
    }

    return (
        <div style={{'margin-left':'32px'}}>
        {props.user && props.user._id != props.currentProblem.owner._id &&
            <Accordion id='newAnswer' defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                        <>
                            <Accordion.Header style={{'background-color':'black'}}>Post Your Answer</Accordion.Header>
                            <Accordion.Body>
                                        <ReactQuill
                                            style={{ 'height': '100%' }}
                                            id="textEditor"
                                            theme="snow"
                                            name='solution'
                                            modules={modules}
                                            value={value || ''}
                                            onChange={setValue}
                                            placeholder='describe your solution...'

                                        />
                                    <Button id="cardBtn" onClick={() => createAnswer()}>Post Answer</Button>
                            </Accordion.Body>
                        </>
                </Accordion.Item>
            </Accordion>
                    }
        </div>
    )
}
