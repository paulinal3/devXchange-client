import Problem from "./components/Problems/Problem"
import Typewriter from "typewriter-effect"

const Home = (props) => {
	console.log("props in home", props)

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
		<main className="page-container" id="home-page">
			<header className="home-header">
				<h1 className="header-text" id="welcome">Welcome to</h1>
				<h1 className="header-text" id="app-title">DevXchange</h1>
			</header>
			<Typewriter
				options={{
					strings: ["An open forum", "Post coding questions", "Offer your expertise", "Connect with other developers"],
					autoStart: true,
					loop: true,
				}}
			/>
			<a id="search-btn" href="/problems" class="btn btn-primary">Search Problems</a>
		</main>
	)
}

export default Home
