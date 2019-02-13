import Notification from './Notification'
import { connect } from 'react-redux'

import { notificationAdd, notificationRemove } from './../redux'

const mapStateToProps = state => {
  return {
  	list: state.notification.list
  }
}

const mapDispatchToProps = {
	notificationAdd,
	notificationRemove,
}

const NotificationRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification)


export default NotificationRedux	
