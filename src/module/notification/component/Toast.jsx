import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

class Toast extends React.Component {
	componentDidMount() {
		setTimeout(
			() => this.props.remove(this.props._id),
			this.props.timeout
		)
	}

	render() {
		return <div className={'toast ' + this.props.status}>{this.props.message}</div>
	}
}

Toast.propTypes = {
	message: PropTypes.string,
	status: PropTypes.string,
  timeout: PropTypes.number,
}

Toast.defaultProps = {
	message: '',
  status: 'success',
  timeout: 3000
}

export default Toast
