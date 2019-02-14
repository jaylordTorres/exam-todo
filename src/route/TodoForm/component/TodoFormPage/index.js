import TodoFormPage from './TodoFormPage'
import { connect } from 'react-redux'

import { notificationAdd } from 'module/notification'
import { todoAdd } from 'store/todo'

const mapStateToProps = state => {
  return {
  	list: state.todo.get('list')
  }
}

const mapDispatchToProps = {
	todoAdd,
	notificationAdd
}

const TodoFormPageRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoFormPage)


export default TodoFormPageRedux	
