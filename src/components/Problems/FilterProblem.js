export default function FilterProblem(props) {
    return (
        <div>
            <label htmlFor='problemFilter'>Search Questions: </label>
            <input
                type='text'
                name='problemFilter'
                onChange={props.filterProblems}
            />
        </div>
    )
}
