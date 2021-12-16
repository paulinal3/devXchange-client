import { Form } from 'react-bootstrap'

export default function EditAnswer() {
    return (
        <div>
            <Form>
                <div>
                    <label htmlForm='solution'>Edit Your Answer</label>
                </div>
                <div>
                    <input id='solution' type='text' />
                </div>
                <input type='button' value='Update Answer' />
            </Form>
        </div>
    )
}
