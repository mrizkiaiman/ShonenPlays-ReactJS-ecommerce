import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//Pages
import {SignIn, SignUp} from './pages/auth'
import {Home} from './pages/main'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
