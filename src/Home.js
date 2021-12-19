import Problem from './components/Problems/Problem'
import { Link } from 'react-router-dom'
import FilterProblem from './components/Problems/FilterProblem'


const Home = (props) => {
	console.log('props in home', props)

	// filter through five most recent problems
	const recentProblems = props.problems && props.problems
		.filter((p, i) => i > props.problems.length - 5).map((p, i) => {
			return (
				<li key={i}>
					<Problem problem={p} key={i} />
				</li>
			)
		})
	// display them from newest to oldest
	recentProblems.reverse()

	return (
		<>
			<div>
				<div class="container-fluid bg-dark text-light p-5">
					<div class="container bg-dark p-5">
						<h1 class="display-4">Welcome to DevXChange</h1>
						<a id="cardBtn" href="/problems" class="btn btn-primary">see all problems</a>
					</div>
				</div>
			</div>
			<h2>Latest Problems</h2>
			<ol>
				{recentProblems}
			</ol>
		</>
	)
}

export default Home
