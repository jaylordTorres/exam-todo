import TodoListPage from './TodoListPage'
import { connect } from 'react-redux'

import { notificationAdd } from 'module/notification'
import { todoRemove } from 'store/todo'

const mapStateToProps = state => {
  return {
  	list: state.todo.get('list')
  }
}

const mapDispatchToProps = {
	todoRemove,
	notificationAdd
}

const TodoListPageRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListPage)


export default TodoListPageRedux	
