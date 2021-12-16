import { Link } from "react-router-dom"

export default function ShowAnswer(props) {
    let contribLastNameInit = props.answer.contributor.lastName.charAt(0)

    return (
        <div>
            {props.answer.solution}
            <div>
                <small>Submitted by: {props.answer.contributor.firstName} {contribLastNameInit}.</small>
            </div>
            <Link to={`/problems/${props.currentProblemId}/edit/answers`}><button>Edit Answer</button></Link>
        </div>
    )
}
