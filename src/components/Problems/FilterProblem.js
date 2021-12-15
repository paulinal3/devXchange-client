export default function FilterProblem(props) {
        return (
            <div>
                <label htmlFor='problemFilter'>Search Questions: </label>
                <input
                    id='problemFilter'
                    type='text'
                    value={props.searchVal}
                    onChange={props.searchChange}
                />
            </div>
        )
    }
    