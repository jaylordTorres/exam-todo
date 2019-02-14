import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CoreLayout from '../layout/CoreLayout'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import NotFoundRoute from './NotFound'

const routesNavigation = [{
    title: TodoForm.title,
    name: TodoForm.name,
    path: TodoForm.path,
  },
  {
    title: TodoList.title,
    name: TodoList.name,
    path: TodoList.path,
  },
  {
    title: 'task 3: todo api',
    name: 'api',
    path: '/api',
  },
] 

export default function createRoutes(store) {
  return (
    <CoreLayout routes={routesNavigation}>
      <Switch>
        <Route exact path={'/'} component={TodoForm.component} />
        {
        	[
        	TodoForm,
          TodoList,
        	].map((setting, index) => <Route key={`route-${index}`} {...setting} />)
        }
        <Route component={NotFoundRoute.component} /> 
      </Switch>
    </CoreLayout>
  )
}
