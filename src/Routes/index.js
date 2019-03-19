import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import Login from '../Component/Screens/Login';
import Signup from '../Component/Screens/Signup';
import ADDTODO from '../Component/Screens/ADD TODO';
import HoverIncrement from '../Component/Screens/HOVER INCREMENT/Hover-Increment';
import ButtonIncrement from '../Component/Screens/BUTTON INCREMENT/Button-Increment';

const Routers = () => (
    <Router>
        <Switch>
            <Route exact component={Login} path="/" />
            <Route exact component={HoverIncrement} path="/Hover" />
            <Route exact component={ButtonIncrement} path="/Button" />
            <Route exact component={Signup} path="/Signup" />
            <Route exact component={ADDTODO} path="/ADDTODO" />
        </Switch>
    </Router>
)

export default Routers;