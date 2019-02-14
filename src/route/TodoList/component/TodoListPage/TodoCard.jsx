import React from 'react'
import PropTypes from 'prop-types'

import Button from 'component/Button'

const TodoCard = ({ item, onDelete }) => (
  <div className="card">
	  <div className="card-body">
	    <h4 className="card-title">{item.title}</h4>
	    <h6 className="card-date">{item.date}</h6>
	    <p className="card-detail">{item.detail}</p>
	    <Button label="Delete" onClick={onDelete} />
	  </div>
  </div> 
) 

TodoCard.propTypes = {
	item: PropTypes.object.isRequired,
	onDelete: PropTypes.func.isRequired,
}
 
export default TodoCard
