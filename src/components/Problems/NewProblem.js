import { useState } from 'react'
import Form from 'react-bootstrap/Form'

export default function NewProblem() {
    const [newProblem, setNewProblem] = useState({
        title: '',
        description: '',
        solved: false,
        img: ''
    })

    return (
        <div>
            <h1>Post Your Problem!</h1>

            <Form>
                <div>
                    <label htmlFor='title'>Title: </label>
                    <input id='' type='text' name='' />
                </div>
                <div>
                    <label htmlFor='description'>Description: </label>
                    <input id='description' type='text' name='description' />
                </div>
                <div>
                    <label htmlFor='solved'>solved: </label>
                    <input id='solved' type='checkbox' name='solved' />
                </div>

                <input type='submit' value='Post Problem' />
            </Form>
        </div>
    )
}
