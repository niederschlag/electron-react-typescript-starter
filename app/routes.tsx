import * as React from 'react';
import {Route, Switch} from 'react-router';
import App from './containers/App';
import E2EPage from "./containers/E2EPage";
import HomePage from './containers/HomePage';

export default () => (
    <App>
        <Switch>
            <Route path="/e2e" component={E2EPage}/>
            <Route path="/" component={HomePage}/>
        </Switch>
    </App>
);
