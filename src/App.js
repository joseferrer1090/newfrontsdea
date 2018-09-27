import React, { Component } from 'react'
import { Switch, HashRouter, Route } from "react-router-dom";

// Components for Sessions
import Login from './components/Session/Login/Login';
import Forgot from "./components/Session/Forgot/Forgot";
import Register from './components/Session/Register/Register';

export default class App extends Component {
    render() {
        return (
            <Switch>
                <HashRouter>
                    <div>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/forgot" component={Forgot} />
                        <Route exact path="/register" component={Register} />
                    </div>
                </HashRouter>
            </Switch>
        )
    }
}
