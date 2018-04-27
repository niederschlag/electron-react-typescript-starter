import * as React from 'react';
import {Route, Switch} from 'react-router';
import App from './containers/App';
import Electron from "./containers/ElectronPage";
import HomePage from './containers/HomePage';

export default () => (
    <App>
        <Switch>
            <Route path="/electron" component={Electron}/>
            <Route path="/" component={HomePage}/>
        </Switch>
    </App>
);
