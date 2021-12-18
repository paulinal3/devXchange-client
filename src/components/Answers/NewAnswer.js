import { Form, Accordion, Button } from 'react-bootstrap'

export default function NewAnswer(props) {
    return (
        <div>
            <Accordion id='newAnswer' defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    {props.user && props.user._id != props.currentProblem.owner._id &&
                        <>
                            <Accordion.Header>Post Your Answer</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control as="textarea" rows={7} type="text" name="solution" value={props.newSolution.solution} onChange={props.handleAnswer} />
                                    </Form.Group>
                                    <Button onClick={() => props.createAnswer()}>Post Answer</Button>
                                    {/* <input
                                id='solution'
                                type='text'
                                name='solution'
                                value={props.newSolution.solution}
                                onChange={props.handleChange}
                            />
                            <input
                                type='button'
                                value='Post Your Answer'
                                onClick={() => props.createAnswer()}
                            /> */}
                                </Form>
                            </Accordion.Body>
                        </>
                    }
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
