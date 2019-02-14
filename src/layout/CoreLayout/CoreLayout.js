import React from 'react'
import PropTypes from 'prop-types'
import { Notification } from 'module/notification'
import Navbar from 'container/Navbar'

export const CoreLayout = ({ routes, children }) => (
  <div>
    <Navbar routes={routes} />
    <div>{children}</div>
    <Notification />
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array
}

export default CoreLayout
