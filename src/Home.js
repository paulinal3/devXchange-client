import React, { useState, useEffect, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { getProblems } from './api/problems'
import Problems from './components/Problems/Problems'


const Home = (props) => {
	const [problems, setProblems] = useState([])
	// const { msgAlert, user } = props
	console.log('props in home', props)

	useEffect(() => {
		getProblems(problems)
		console.log(problems)
		// .then((res) => setProblems (res.data))
		// console.log("This is: ", res.data)
	}, [])

	return (
		<Fragment>
			<div>
				<h2>Latest Problems</h2>
			</div>
			{/* <Routes>
				<Route
					path='/problems'
					element={
						<Problems />
					}
				/>
			</Routes> */}
		</Fragment>
	)
}

export default Home
