import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CoreLayout from '../layout/CoreLayout'
import TodoForm from './TodoForm'
import NotFoundRoute from './NotFound'
 
export default function createRoutes(store) {
  return (
    <CoreLayout>
      <Switch>
        <Route exact path={'/'} component={TodoForm.component} />
        {
        	[
        	TodoForm,
        	].map((setting, index) => <Route key={`route-${index}`} {...setting} />)
        }
        <Route component={NotFoundRoute.component} />
      </Switch>
    </CoreLayout>
  )
}
