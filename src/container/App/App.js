import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'


const App = ({ routes, store }) => (
    <ReduxProvider store={store}>
      <Router>{routes}</Router>
    </ReduxProvider>
)

App.propTypes = {
  routes: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

export default App
