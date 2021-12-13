function Problems (props) {
    console.log("THIS IS:", props.problems)
    const allProblems = props.problems.map((p, i) => {
        return (
            <li key={i}>
                {p.title}
            </li>
        )
    })
    return (
        <div>
        <h1>Problems page</h1>
        <ol>
            {allProblems}
        </ol>
        </div>
    )
}

export default Problems