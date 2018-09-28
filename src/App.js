import React, { Component } from 'react'
import { Switch, HashRouter, Route } from "react-router-dom";
import { browserHistory } from "react-router"


// Components for Sessions
import Login from './components/Session/Login/Login';
import Forgot from "./components/Session/Forgot/Forgot";
import Register from './components/Session/Register/Register';
import ErrorPage from "./components/ErrorPage/404";

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/register" component={Register}></Route>
                    <Route exact path="/forgot" component={Forgot}></Route>
                    <Route component={ErrorPage}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
