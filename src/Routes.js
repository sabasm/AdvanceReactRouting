import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/home';
import Login from './components/login';
import CharactersList from './components/characters/characterslist';
import CharactersDetail from './components/characters/charactersDetail';


const Routes = () =>
    <Switch>
<Route exact path="/" component={Home}/>
<Route exact path="/login" component={Login}/>
<Route exact path='/' component={Home}/>
<Route exact path='/characters' component={CharactersList}/>
<Route path='/characters/:id' component={CharactersDetail}/>
</Switch>

export default Routes