import Problem from './components/Problems/Problem'
import Typewriter from 'typewriter-effect'
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
		<main id='homePage'>
			<header id='homeHeader'>
				<h1 id='welcome'>Welcome to</h1>
				<h1 id='appTitle'>DevXchange</h1>
			</header>
			<Typewriter
						options={{
							strings: ['An open forum', 'Post coding questions', 'Offer your expertise', 'Connect with other devs'],
							autoStart: true,
							loop: true,
						}}
						id='homeTypewriter'
					/>
			<a id="cardBtn" href="/problems" class="btn btn-primary">Search Problems</a>
			{/* <div class="container-fluid bg-dark text-light p-5">
				<div class="container bg-dark p-5">
					<h1 class="display-4">Welcome to DevXchange</h1>
					<Typewriter
						options={{
							strings: ['An open forum', 'Post coding questions', 'Offer your expertise', 'Connect with other devs'],
							autoStart: true,
							loop: true,
						}}
						id='homeTypewriter'
					/>
					<a id="cardBtn" href="/problems" class="btn btn-primary">Search Problems</a>
				</div>
			</div> */}
		</main>
	)
}

export default Home
