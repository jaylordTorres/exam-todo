import React from 'react'
import PropTypes from 'prop-types'
import style from './style'

const Button = ({ label, onClick }) => (
  <button style={style.root} onClick={onClick} >
  	{label}
  </button>
)

Button.propTypes = {
	onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
}

Button.defaultProps = {
  onClick: ()=>{},
  label: '',
}


export default Button
