import Problem from './components/Problems/Problem'

const Home = (props) => {
	console.log('props in home', props)

	// filter through all problems
	const recentProblems = props.problems && props.problems.filter((p, i) => {
		// of those problems, return the five most recent
		// then sort through those five
		return i > props.problems.length - 5}).sort((a, b) => {
			// return them from newest to oldest
			return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()}).reverse().map((p, i) => {
        return (
            <li key={i}>
                <Problem problem={p} key={i}/>
            </li>
        )
    })

	return (
		<>	
			<header>
				<h2>Latest Problems</h2>
			</header>
			<ol>
				{recentProblems}
			</ol>
		</>
	)
}

export default Home
