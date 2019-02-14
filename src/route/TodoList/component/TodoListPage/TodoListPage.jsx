import React from 'react'
import PropTypes from 'prop-types'

import TodoCard from './TodoCard'
import './style.css'

class TodoListPage extends React.Component {
	constructor (props) {
	  super(props)
	  this.state = {
	  }
	}

	onDelete = (item) => {
  	if(window.confirm("Deleting: " + item.title)) {
  		this.props.todoRemove(item._id)
  		this.props.notificationAdd({status: 'success', message: item.title +' has been deleted.'})
  	}
	}

  renderItem = (item, index) => {
    return <li key={index} className="todo-item" ><TodoCard item={item} onDelete={() => this.onDelete(item)} /></li>
  }

	render () { 
		return (
		  <div className="todo-list">
		    <h1 className="title">Todo List</h1>
		    <ul className="todo-cards">
		    {
		    	!(this.props.list.length > 0) && <p>empty</p>
		    }
		    {
		    	this.props.list.map(this.renderItem)
		    }
		    </ul>
			</div>
		)
	}
}

TodoListPage.propTypes = {
	list: PropTypes.array,           			// connect
	todoRemove: PropTypes.func,    			  // connect
	notificationAdd: PropTypes.func,      // connect
}

export default TodoListPage
