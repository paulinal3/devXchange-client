import { Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export default function EditProblem(props) {    
    // const navigate = useNavigate()

    // const editProblem = () => {
    //     const updateProblem = (props.user, props.problem._id)
    //         .then(() => {
    //             set
    //         })
    //         .then(() => navigate(`/problems/${props.problem._id}`))
    //         .catch(err => console.log(err))
    // }

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

                    {/* <input type='button' value='Update Problem' onClick={() => editProblem()}/> */}
            </Form>
        </div>
    )
}
