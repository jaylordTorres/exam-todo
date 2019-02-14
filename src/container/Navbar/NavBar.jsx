import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'

import './style.css'

const NavBar = ({ routes }) => (
	<ul className="nav">
	{
		routes.map(
			(item, index) =>
			<li key={index}>
				<Link className="nav-link" to={item.path} title={item.title}>{item.name.toUpperCase()}</Link>
			</li>
		)
	}
	</ul> 
)

NavBar.propTypes = {
  routes: PropTypes.array.isRequired,
  // store: PropTypes.object.isRequired
}

export default NavBar
