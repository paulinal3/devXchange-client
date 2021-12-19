import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, useLocation } from 'react-router-dom'
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

const Header = ({user , handleFilter, search, handleSearch}) => (
	<Navbar bg='dark' variant='dark' expand='md' id='navBar'>
		<Navbar.Brand className='mx-4'>
			<Link to='/' style={linkStyle}>
				<img src="/favicon-16x16.png" alt="" />
				DevXchange
			</Link>
		</Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text mr-2'>Welcome, <Link to="/profile" className='name'>{user.firstName}</Link></span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
			<Nav.Link className='mx-4'>
				<Link to="/problems">
				<FilterProblem 
					filterProblems={handleFilter}
					searchVal={search} 
					searchChange={handleSearch}
				/>
				</Link>
			</Nav.Link>
	</Navbar>
)

export default Header
