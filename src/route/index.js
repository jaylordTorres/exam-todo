import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CoreLayout from '../layout/CoreLayout'
import NotFoundRoute from './NotFound'
 
export default function createRoutes(store) {
  return (
    <CoreLayout>
      <Switch>
        <Route exact path={'/'} component={NotFoundRoute.component} />
        <Route component={NotFoundRoute.component} />
      </Switch>
    </CoreLayout>
  )
}
