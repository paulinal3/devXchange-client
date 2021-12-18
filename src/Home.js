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
				<div class="container-fluid bg-dark text-light p-5">
					<div class="container bg-dark p-5">
						<h1 class="display-4">Welcome to DevXChange</h1>
						<p>Learn more</p>
						<div class="input-container">
							<input class="input-field" type="text"></input>
						</div>
						<a href="#" class="btn btn-primary">search</a>
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
