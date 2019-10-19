import React from 'react'
import { Route, Switch } from 'react-router-dom'
// We will create these two pages in a moment
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import SignUp from './form/SignUp';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/:id" component={UserPage} />
    </Switch>
  )
}
