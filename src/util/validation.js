const isValid = (validation, value) => {
	return validation(value)
}

export const validate = (validations = [], value) => {
	for (let i = 0; i < validations.length; i++) {
	  if (!isValid(validations[i], value)) {
	  	return false
	  }
	}
	return true
}

export const isString = (v) => {
  return !!(v)
}