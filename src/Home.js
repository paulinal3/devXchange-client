import React, { useState, useEffect, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { getProblems } from './api/problems'
import Problems from './components/Problems/Problems'
import Problem from './components/Problems/Problem'

const Home = (props) => {
	console.log('props in home', props)

	// filter through five most recent problems
	const recentProblems = props.problems && props.problems
	.filter((p,i) => i > props.problems.length - 5).map((p, i) => {
        return (
            <li key={i}>
                <Problem problem={p} key={i}/>
            </li>
        )
    })

	return (
		<>
			<div>
				<h2>Latest Problems</h2>
			</div>
			{recentProblems}
		</>
	)
}

export default Home
