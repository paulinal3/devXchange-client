import { Form } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

export default function EditAnswer() {
    const { pathname } = useLocation()
    const problemId = pathname.split('/')[2]

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
