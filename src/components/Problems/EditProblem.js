import { Form } from "react-bootstrap"

export default function EditProblem() {
    return (
        <div>
            <h1>Edit Your Problem</h1>
            <Form>
                <div>
                        <label htmlFor='title'>Title: </label>
                        <input id='title' type='text' name='title' />
                    </div>
                    <div>
                        <label htmlFor='description'>Description: </label>
                        <input id='description' type='text' name='description' />
                    </div>
                    <div>
                        <label htmlFor='img'>Post a screenshot: </label>
                        <input id='img' type='file' name='img' />
                    </div>

                    <input type='button' value='Update Problem' />
            </Form>
        </div>
    )
}
