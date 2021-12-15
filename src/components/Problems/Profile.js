import { useState, useEffect } from 'react'
import Problem from './Problem'
import apiUrl from '../../apiConfig'
import axios from 'axios'



function Profile(props) {
    
    const [userProblems, setUserProblems] = useState([])
    const [currentProblem, setCurrentProblem] = useState({})
    
    
    const getUserProblems = () => {
        return axios({
            method: 'GET',
            url: apiUrl + '/profile',
        })
    }
    
    useEffect(() => {
		getUserProblems()
		.then((res) => {
			setUserProblems(res.data)
			console.log('This is userProblems', userProblems)
		})
			.catch(err => console.error(err))
	}, [])


    const changeCurrent = problem => {
        setCurrentProblem(problem)
    }
    // props.refreshProblems()
    console.log("THIS IS:", userProblems)
    const allProblems = userProblems.map((p, i) => {
        return (
            <li onClick={() => changeCurrent(p)} key={i}>
                <Problem currentProblem={currentProblem} problem={p} key={i} />
            </li>
        )
    })
    return (
        <div>
            <h1>Profile page</h1>
            <ol>
                {allProblems}
            </ol>
        </div>
    )
}

export default Profile