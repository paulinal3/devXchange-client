import React from 'react'

export default function ShowAnswer(props) {
    let contribLastNameInit = props.answer.contributor.lastName.charAt(0)
    return (
        <div>
            {props.answer.solution}
            <div>
                <small>Submitted by: {props.answer.contributor.firstName} {contribLastNameInit}.</small>
            </div>
        </div>
    )
}
