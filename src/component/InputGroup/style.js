export default {
	root: {
		marginBottom: '1rem'
	},
	label: {
		display: 'inline-block',
    marginBottom: '.5rem'
	},
	input: {
		display: 'inline-block',
    width: '100%',
    padding: '15px 10px',
    fontSize: '1rem',
    linHeight: 1.5,
    color: '#495057',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid #ced4da',
    borderRadius: '.25rem',
    cursor: 'text',
	},
	message: {
		color: '#6c757d',
		display: 'block',
    marginTop: '.25rem'
	},
	success: {
		color: '#155724',
	  borderColor: '#c3e6cb'
	},
	error: {
		color: '#721c24',
	  borderColor: '#f5c6cb'
	},
	getInput(status) {
    if (status === 'success') return {...this.input, ...this.success}
    if (status === 'error') return {...this.input, ...this.error}
    return this.input
	}
}
