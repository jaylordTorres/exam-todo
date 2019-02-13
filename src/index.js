import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'

import App from './container/App'
import createStore from './store/createStore'
import Route from './route/'

const store = createStore()
const routes = Route(store)

ReactDOM.render(
	<App store={store} routes={routes} />,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
