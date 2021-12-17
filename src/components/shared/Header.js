import React, { Fragment } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
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

const Header = ({ user }) => (
	<Navbar bg='primary' variant='dark' expand='md'>
		<Navbar.Brand>
			<Link to='/' style={linkStyle}>
				DevXchange
			</Link>
		</Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Nav>
			<Link to='/problems' style={linkStyle}>
				<InputGroup className="mb-3">
					<FormControl
						placeholder="Search for a problem"
						aria-label="Recipient's username"
						aria-describedby="basic-addon2"
					/>
				</InputGroup>
			</Link>
		</Nav>
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text mr-2'>Welcome, <Link to="/profile" className='name'>{user.firstName}</Link></span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
