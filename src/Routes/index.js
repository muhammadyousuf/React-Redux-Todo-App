import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Login from '../Component/Screens/Login/Login';
import Signup from '../Component/Screens/Signup/Signup';
import Dashboard from '../Component/Screens/Dashboard/Dashboard';
import HoverIncrement from '../Component/Screens/Hover-Increment/Hover-Increment';
import ButtonIncrement from '../Component/Screens/Button-Increment/Button-Increment';

const Routers = () => (
    <Router>
        <Switch>
            <Route exact component={Login} path="/" />
            <Route exact component={HoverIncrement} path="/Hover" />
            <Route exact component={ButtonIncrement} path="/Button" />
            <Route exact component={Signup} path="/Signup" />
            <Route exact component={Dashboard} path="/Dashboard" />
        </Switch>
    </Router>
)

export default Routers;