import { InputGroup, FormControl } from "react-bootstrap";

export default function FilterProblem(props) {
        return (
                <InputGroup className="mb-0">
                    <FormControl
                        placeholder="Search for a problem"
                        aria-label="Search for a problem"
                        value={props.searchVal}
                        onChange={props.searchChange}
                    />
                    
                </InputGroup>
        )
    }
    