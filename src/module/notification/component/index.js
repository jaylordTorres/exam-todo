import Notification from './Notification'
import { connect } from 'react-redux'

import { notificationRemove } from './../redux'

const mapStateToProps = state => {
  return {
  	list: state.notification.list
  }
}

const mapDispatchToProps = {
	notificationRemove,
}

const NotificationRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification)


export default NotificationRedux	
