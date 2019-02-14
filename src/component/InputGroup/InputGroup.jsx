import React from 'react'
import PropTypes from 'prop-types'
import style from './style'


const InputGroup = ({ label, type, message, onChange, status, value }) => {
  return (
    <div style={style.root}>
      <label style={style.label}>{label}</label>
      <input style={style.getInput(status)} type={type} onChange={onChange} onBlur={onChange} value={value} />
      <small style={style.message}>{message}</small>
    </div>
  )
}

InputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  message: PropTypes.string,
  onChange: PropTypes.func,
  status:  PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
}

InputGroup.defaultProps = {
  onChange: ()=>{},
  status: '',
  type: 'text',
}

export default InputGroup
