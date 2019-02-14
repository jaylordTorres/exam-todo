import React from 'react'
import PropTypes from 'prop-types'
import { TODO_URL } from 'constant/api'

//
//  cannot use on other todo list , will affect styles, event and strucure
//

import Button from 'component/Button'
import TodoCard from './TodoApiCard'
import './style.css'

import jsonData from 'asset/localDb.json'

class TodoApiPage extends React.Component {
	constructor (props) {
	  super(props)
	  this.state = {
	  	list: [],
	  	loaded: false,
	  	fetching: false,
	  }
	}

  renderItem = (item, index) => {
    return <li key={index} className="todo-item" ><TodoCard item={item} /></li>
  }

  onClickLoadJson = () => {
		this.setState({list: jsonData.todos})
  }

  onClickLoadApi = () => {
  	this.setState({fetching: true})
  	
  	// sobrang bilis kelangan bagalan
  	setTimeout(() => {
	  	fetch(TODO_URL + 'todos')
	  	.then(d => d.json())
	  	.then(d => this.setState({list: d, loaded: true, fetching: false}))
	  	.catch(e => console.log(e))
  	},
  	2000)
  }

	render () { 
		return (
		  <div className="todo-list">
		    <h1 className="title">API Todo List</h1>
		    {this.state.fetching && <p>Loading ... </p>}		    
		    <ul className="todo-cards">
		    {this.state.list.map(this.renderItem)}
		    </ul>
		    <hr />
	     	<Button label="api" onClick={this.onClickLoadApi} />&nbsp;
	     	<Button label="json" onClick={this.onClickLoadJson} />  
			</div>
		)
	}
}

TodoApiPage.propTypes = {
	notificationAdd: PropTypes.func,      // connect
}

export default TodoApiPage
