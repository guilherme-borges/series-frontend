import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './pages/SignIn';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={SignIn}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;