import { Route, Switch } from 'react-router-dom';
import React from 'react';

import App from './components/App';
import Project from './components/Project/';
import Page404 from './components/Page404/';
import Home from './components/Home'

const AppRoutes = () =>
    <App>
        <Switch>
        <Route exact path = "/" component = { Home } />
        <Route exact path = "/proyectos" component ={ Project } />
        <Route component = { Page404 } />
        </Switch>
    </App>;
export default AppRoutes;