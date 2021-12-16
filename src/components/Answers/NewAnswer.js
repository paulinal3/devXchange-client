import { Form } from 'react-bootstrap'

export default function NewAnswer(props) {
    return (
        <div>
            <p>Your answer</p>
            <Form>
                {/* <label>
                    <textarea rows='5' cols='50' autofocus />
                </label> */}
                <input 
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
                />
            </Form>
        </div>
    )
}
