import React from 'react'
import PropTypes from 'prop-types'
import Toast from './Toast'

import './style.css'

class Notification extends React.Component {
	constructor(props) {
	  super(props)
	  this.state = {
	  }
	}

  renderSnackBar = (item, index) => {
    return <Toast key={index} {...item} remove={this.props.notificationRemove} /> 
  }

	render() {
		if (!this.props.list.length > 0) {
			return null
		}
		return(
			<div className="toast-container">
			{
				this.props.list.map(this.renderSnackBar)
			}
			</div>
		)
	}
}

export default Notification
