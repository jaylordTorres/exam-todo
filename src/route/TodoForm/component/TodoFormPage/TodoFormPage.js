import React from 'react'
import PropTypes from 'prop-types'
import { isString } from 'util/validation'

import InputGroup from 'component/InputGroup'
import Button from 'component/Button'
import * as method from './method'
import style from './style'

class TodoFormPage extends React.Component {
	constructor (props) {
	  super(props)
	  // for performance optimation, shifting status here will greatly reduce proccess
	  // than processing status per render
	  this.state = {
	  	title: '',
	  	titleStatus: '',
	  	detail: '',
	  	detailStatus: '',
	  	date: '',
	  	dateStatus: '',
	  }
	  this.fields = {
	  	title: {validations: [isString]},
	  	detail: {validations: [isString]},
	  	date: {validations: [isString]},
		}
    // binding methods
    // work around for bloated Class
		this.onChangeDate = method.onChangeDate(this)
		this.onChangeDetail = method.onChangeDetail(this)
		this.onChangeTitle = method.onChangeTitle(this)
		this.onSubmit = method.onSubmit(this)
		this._onChange = method._onChange(this)
		this._clearFields = method._clearFields(this)
		this._validateFields = method._validateFields(this)
	}

	render () {
		return (
		  <div style={style.root}>
		    <h1>Todo Form</h1>
		    <div style={style.container}>
			    <div style={style.form}>								
			    	<InputGroup
				    	label="Title"
				    	value={this.state.title}
				    	status={this.state.titleStatus}
				    	onChange={this.onChangeTitle}
				    	/>
			    	<InputGroup
				    	label="Details"
				    	value={this.state.detail}
				    	status={this.state.detailStatus}
				    	onChange={this.onChangeDetail}
			    	/>
			    	<InputGroup
				    	label="Date"
				    	value={this.state.date}
				    	status={this.state.dateStatus}
				    	onChange={this.onChangeDate}
				    	type="date"
				    	/>
				    <Button label="Submit" onClick={this.onSubmit} />
			    </div>
		    </div>
		  </div>
		)
	}
}

TodoFormPage.propTypes = {
	list: PropTypes.array,           // connect
	todoAdd: PropTypes.func,         // connect
	notificationAdd: PropTypes.func  // connect
}

export default TodoFormPage
