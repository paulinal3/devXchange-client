import React, { Fragment } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import FilterProblem from '../Problems/FilterProblem'
const linkStyle = {
	color: 'white',
	textDecoration: 'none'
}
const authenticatedOptions = (
	<>
		<Nav.Link>
			<Link to='/problems/new' style={linkStyle}>
				Post a Problem
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Link>
	</>
)

const unauthenticatedOptions = (
	<>
		<Nav.Link>
			<Link to='sign-up' style={linkStyle}>Sign Up</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='sign-in' style={linkStyle}>Sign In</Link>
		</Nav.Link>

	</>
)

const alwaysOptions = (
	<>
		<Nav.Link>
			<Link to='/' style={linkStyle}>
				Home
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='/problems' style={linkStyle}>
				Problems
			</Link>
		</Nav.Link>
		
	</>
)

const Header = ({ user }, props) => (
	<Navbar bg='primary' variant='dark' expand='md'>
		<Navbar.Brand>
			<Link to='/' style={linkStyle}>
				DevXchange
			</Link>
		</Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text mr-2'>Welcome, <Link to="/profile">{user.firstName}</Link></span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
			<Link to="/problems">
			<FilterProblem 
                filterProblems={props.handleFilter}
                searchVal={props.search} 
                searchChange={props.handleSearch}
            />
			</Link>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
