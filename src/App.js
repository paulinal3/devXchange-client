import React, { useState, useEffect, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { getProblems } from './api/problems'
// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './Home'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import IndexProblems from './components/Problems/IndexProblems'
import ShowProblem from './components/Problems/ShowProblem'
import NewProblem from './components/Problems/NewProblem'
import EditProblem from './components/Problems/EditProblem'

const App = () => {
	// ---------- USER STATES & HELPER METHOD ---------- //
	const [user, setUser] = useState(null)
	const [msgAlerts, setMsgAlerts] = useState([])

	console.log('user in app', user)
	console.log('message alerts', msgAlerts)

	const clearUser = () => {
		console.log('clear user ran')
		setUser(null)
	}

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id))
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
			)
		})
	}

	// ---------- PROBLEMS STATES & HELPER METHOD ---------- //
	const [problems, setProblems] = useState([])

	const refreshProblems = () => (
		getProblems(problems)
		.then((problems) => {
			console.log('these are all the problems in the db\n', problems.data.probems)
			setProblems(problems.data.problems)
		})
			.catch(err => console.error(err))
	)

	useEffect(() => {
		getProblems()
		.then((problems) => {
			console.log('these are all the problems in the db\n', problems.data.problems)
			setProblems(problems.data.problems)
		})
			.catch(err => console.error(err))
	}, [])

	const handleFilterChange = (e) => {
		console.log('is this function being called')
        const filteredProblemsList = problems.filter(p => {
            return p.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        console.log('this is the new list of problems\n', filteredProblemsList)
    }

	return (
		<Fragment>
            <h1>Home</h1>
			<Header user={user} />
			<Routes>
				{/* --------------- USER ROUTES --------------- */}
				<Route path='/' element={<Home msgAlert={msgAlert} problems={problems} user={user} />} />
				<Route
					path='/sign-up'
					element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path='/sign-in'
					element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path='/sign-out'
					element={
						<RequireAuth user={user}>
							<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
						</RequireAuth>
					}
				/>
				<Route
					path='/change-password'
					element={
						<RequireAuth user={user}>
							<ChangePassword msgAlert={msgAlert} user={user} />
						</RequireAuth>}
				/>
				{/* --------------- PROBLEM ROUTES --------------- */}
				<Route
					path='/problems'
					element={
						<IndexProblems problems={problems} handleFilter={handleFilterChange} />
					}
				/>
				<Route
					path='/problems/new'
					element={
						<NewProblem user={user} refreshProblems={refreshProblems} />
					}
				/>
				<Route
					path='/problems/:id'
					element={
						<ShowProblem problems={problems}/>
					}
				/>
				<Route
					path='/problems/edit'
					element={
						<EditProblem user={user} />
					}
				/>
				{/* --------------- ANSWER ROUTES --------------- */}
			</Routes>
			{msgAlerts.map((msgAlert) => (
				<AutoDismissAlert
					key={msgAlert.id}
					heading={msgAlert.heading}
					variant={msgAlert.variant}
					message={msgAlert.message}
					id={msgAlert.id}
					deleteAlert={deleteAlert}
				/>
			))}
		</Fragment>
	)
}

export default App