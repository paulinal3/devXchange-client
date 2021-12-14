// import React, { useState, useEffect, Fragment } from 'react'
// import { Route, Routes } from 'react-router-dom'
// import { v4 as uuid } from 'uuid'
// import { getProblems } from './api/problems'

// // import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
// import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
// import Header from './components/shared/Header'
// import RequireAuth from './components/shared/RequireAuth'
// import Home from './Home'
// import SignUp from './components/auth/SignUp'
// import SignIn from './components/auth/SignIn'
// import SignOut from './components/auth/SignOut'
// import ChangePassword from './components/auth/ChangePassword'
// import IndexProblems from './components/Problems/IndexProblems'
// import ShowProblem from './components/Problems/ShowProblem'
// import NewProblem from './components/Problems/NewProblem'

// const App = () => {
// 	// -------------- USER STATES & HELPER METHODS -------------- //
// 	const [user, setUser] = useState(null)
// 	const [msgAlerts, setMsgAlerts] = useState([])

// 	console.log('user in app', user)
// 	console.log('message alerts', msgAlerts)
// 	const clearUser = () => {
// 		console.log('clear user ran')
// 		setUser(null)
// 	}

// 	const deleteAlert = (id) => {
// 		setMsgAlerts((prevState) => {
// 			return (prevState.filter((msg) => msg.id !== id))
// 		})
// 	}

// 	const msgAlert = ({ heading, message, variant }) => {
// 		const id = uuid()
// 		setMsgAlerts(() => {
// 			return (
// 				[{ heading, message, variant, id }]
// 			)
// 		})
// 	}

// 	// -------------- PROBLEM STATES & HELPER METHODS -------------- //
// 	const [problems, setProblems] = useState([])

// 	const refreshProblems = () => (
// 		getProblems(problems)
// 		.then((problems) => {
// 			setProblems(problems.data)
// 			// console.log('IS THIS WORKING????', problems.data)
// 		})
// 			.catch(err => console.error(err))
// 	)

// 	useEffect(() => {
// 		getProblems(problems)
// 		.then((problems) => {
// 			console.log('this is all problems from db\n', problems.data.problems)
// 			setProblems(problems.data.problems)
// 		})
// 			.catch(err => console.error(err))
// 	}, [])

// 	return (
// 		<Fragment>
// 			<Header user={user} />
// 			<Routes>
// 				<Route path='/' element={<Home msgAlert={msgAlert} problems={problems.problems} user={user} />} />
// 				<Route
// 					path='/sign-up'
// 					element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
// 				/>
// 				<Route
// 					path='/sign-in'
// 					element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
// 				/>
// 				<Route
// 					path='/sign-out'
// 					element={
// 						<RequireAuth user={user}>
// 							<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
// 						</RequireAuth>
// 					}
// 				/>
// 				<Route
// 					path='/change-password'
// 					element={
// 						<RequireAuth user={user}>
// 							<ChangePassword msgAlert={msgAlert} user={user} />
// 						</RequireAuth>}
// 				/>
// 				<Route
// 					path='/problems'
// 					element={
// 						<IndexProblems problems={problems.problems} refreshProblems={getProblems} />
// 					}
// 				/>
// 				<Route
// 					path='/problems/new'
// 					element={
// 						<NewProblem user={user} refreshProblems={refreshProblems} />
// 					}
// 				/>
// 				<Route
// 					path='/problems/:id'
// 					element={
// 						<ShowProblem problems={problems.problems}/>
// 					}
// 				/>
// 			</Routes>
// 			{msgAlerts.map((msgAlert) => (
// 				<AutoDismissAlert
// 					key={msgAlert.id}
// 					heading={msgAlert.heading}
// 					variant={msgAlert.variant}
// 					message={msgAlert.message}
// 					id={msgAlert.id}
// 					deleteAlert={deleteAlert}
// 				/>
// 			))}
// 		</Fragment>
// 	)
// }

// export default App

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
const App = () => {
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
    const [problems, setProblems] = useState([])
    const refreshProblems = () => (
        getProblems(problems)
        .then((problems) => {
            setProblems(problems.data)
            console.log('IS THIS WORKING????', problems.data)
        })
            .catch(err => console.error(err))
    )
    useEffect(() => {
        getProblems(problems)
        .then((problems) => {
            setProblems(problems.data.problems)
            console.log('IS THIS WORKING????', problems.data.problems)
        })
            .catch(err => console.error(err))
    }, [])
    return (
        <Fragment>
            <Header user={user} />
            <Routes>
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
                <Route
                    path='/problems'
                    element={
                        <IndexProblems problems={problems.problems}  />
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
                        <ShowProblem problems={problems.problems}/>
                    }
                />
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