import Problem from './components/Problems/Problem'

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
				{/* Jumbotron */}
				<div class="p-5 text-center bg-light">
					<h1 class="mb-3">Hello</h1>
					<h4 class="mb-3">Subheading</h4>
					<a class="btn btn-primary " href="" role="button">Call to action</a>
				</div>
				{/* Jumbotron */}
			</div>
				<h2>Latest Problems</h2>
			<ol>
				{recentProblems}
			</ol>
		</>
	)
}

export default Home
