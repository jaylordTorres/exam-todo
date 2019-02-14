import React from 'react'
import PropTypes from 'prop-types'

//
//  cannot use on other todo list , will affect styles, event and strucure
//

const TodoCard = ({ item }) => (
  <div className="card">
	  <div className="card-body">
	    <h4 className="card-title">{item.title}</h4>
	    <h6 className="card-date">{item.date}</h6>
	    <p className="card-detail">{item.detail}</p>
	  </div>
  </div> 
) 

TodoCard.propTypes = {
	item: PropTypes.object.isRequired,
}
 
export default TodoCard
