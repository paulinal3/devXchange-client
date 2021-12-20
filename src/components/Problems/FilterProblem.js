import { InputGroup, FormControl } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function FilterProblem(props) {

    const { pathname } = useLocation()
    // ref don't change on render cycles, comparing the real DOM vs virtual DOM
    const inputRef = useRef()

    useEffect(() => {
        if (pathname == '/problems') {
            // focus on the input if we're on the problem's page
            inputRef.current.focus()
        }
    }, [])

    return (
        <InputGroup className="mb-0">
            <FormControl
                placeholder="Search"
                value={props.searchVal}
                onChange={props.searchChange}
                ref={inputRef}
            />
        </InputGroup>
    )
}
