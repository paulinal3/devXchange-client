import { Form, Accordion, Button } from 'react-bootstrap'

export default function NewAnswer(props) {
    return (
        <div style={{'margin-left':'32px'}}>
            <Accordion id='newAnswer' defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    {props.user && props.user._id != props.currentProblem.owner._id &&
                        <>
                            <Accordion.Header style={{'background-color':'black'}}>Post Your Answer</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control 
                                            as="textarea" rows={7} 
                                            type="text" 
                                            name="solution" 
                                            value={props.newSolution.solution} 
                                            onChange={props.handleAnswer} 
                                        />
                                    </Form.Group>
                                    <Button id="cardBtn" onClick={() => props.createAnswer()}>Post Answer</Button>
                                </Form>
                            </Accordion.Body>
                        </>
                    }
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
