import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation'



const App = () => {
  return (
    <div className='App'>
      <Navigation/>
      <Switch>
        <Route/>
      </Switch>
    </div>
  )
}

export default App