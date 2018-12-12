import React from 'react'
import {Route} from 'react-router-dom'
import Home from './components/home';
import Login from './components/login';
const Routes = () =>
    <switch>
<Route exact path="/" component={Home}/>
<Route exact path="/login" component={Login}/>
</switch>

export default Routes