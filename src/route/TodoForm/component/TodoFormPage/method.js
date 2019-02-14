import { validate } from 'util/validation'
//
// must be separated file per action
//

export const _validateFields = context => (values) => {
	const keys = Object.keys(context.fields)
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i]
	  if ((context.fields[key].validations) && !validate(context.fields[key].validations, values[key])) {
	  	// invalid values
			context.props.notificationAdd({message: 'Invalid ' + key, status: 'error', timeout: 1000})
	  	return false
	  }
	}
	return true
}

/**
* 
* params: key: key in state
*         e:   event in input
*         validations: arrays of validation functions
*	
**/
export const _onChange = context => (key, e, validations) => {
	const value = e.target.value
  context.setState({
  	[key]: value,
  	[`${key}Status`]: validations ? (validate(validations, value) ? 'success' : 'error') : ''
  })
}

export const onSubmit = context => () => {
	const { title, detail, date } = context.state
	    
	//  validating fiedls
	if(!context._validateFields({ title, detail, date })) {
		return false
	}
  
	// success in validation
	context.props.todoAdd({title, detail, date})
	context.props.notificationAdd({message: 'Success saving: ' + title, status: 'success'})
	context._clearFields()
}

export const _clearFields = context => (e) => context.setState({
	title: '',
	titleStatus: '',
	detail: '',
	detailStatus: '',
	date: '',
	dateStatus: '',
})

export const onChangeTitle = context => (e) => context._onChange('title', e, context.fields.title.validations)
export const onChangeDetail = context => (e) => context._onChange('detail', e, context.fields.detail.validations)
export const onChangeDate = context => (e) => context._onChange('date', e, context.fields.date.validations)