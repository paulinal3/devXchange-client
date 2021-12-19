import { useState } from 'react'
import { Pagination } from 'react-bootstrap'
import Problem from './Problem'

export default function IndexProblems(props) {
    const [currentProblem, setCurrentProblem] = useState({})

    const changeCurrent = problem => {
        setCurrentProblem(problem)
    }

    console.log("this is props.problems\n", props.problems)
    // sort through all problems
    const allProblems = props.problems.sort((a, b) => {
        // return all problems from newest to oldest
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    }).reverse().map((p, i) => {
        return (
            <li onClick={() => changeCurrent(p)} key={i}>
                <Problem currentProblem={currentProblem} problem={p} key={i} />
            </li>
        )
    })

    // let active = 2;
    // let items = [];
    // for (let number = 1; number <= 5; number++) {
    //     items.push(
    //         <Pagination.Item key={number} active={number === active}>
    //             {number}
    //         </Pagination.Item>,
    //     );
    // }

    // const paginationBasic = (
    //     <div>
    //         <Pagination>{items}</Pagination>
    //     </div>
    // )
    return (
        <div>
            {/* <----- Jumbotron -----> */}
            <div class='container-fluid bg-dark text-light p-5'>
                <h1 class='mb-3'>All Problems</h1>
            </div>
            {/* <----- Jumbotron -----> */}
            {/* <FilterProblem 
                filterProblems={props.handleFilter}
                searchVal={props.search} 
                searchChange={props.handleSearch}
            /> */}
            <div className='problemCard'>
                <ol>
                    {allProblems}
                </ol>
            </div>
            {/* {paginationBasic} */}
        </div>
    )
}
