import TodoApiPage from './TodoApiPage'
import { connect } from 'react-redux'

import { notificationAdd } from 'module/notification'
// import { todoRemove } from 'store/todo'

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = {
	// todoRemove,
	notificationAdd
}

const TodoApiPageRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApiPage)


export default TTodoApiPageRedux	
