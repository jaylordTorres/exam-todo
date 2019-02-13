import React from 'react'
import PropTypes from 'prop-types'
import { Notification } from 'module/notification'

export const CoreLayout = ({ children }) => (
  <div>
    <div>{children}</div>
    <Notification />
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default CoreLayout
