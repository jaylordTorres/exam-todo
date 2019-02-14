import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CoreLayout from '../layout/CoreLayout'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoApi from './TodoApi'
import NotFoundRoute from './NotFound'

const routesNavigation = [
  {
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
    title: TodoApi.title,
    name: TodoApi.name,
    path: TodoApi.path,
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
          TodoApi,
        	].map((setting, index) => <Route key={`route-${index}`} {...setting} />)
        }
        <Route component={NotFoundRoute.component} /> 
      </Switch>
    </CoreLayout>
  )
}
