import * as React from 'react';
import {Route, Switch} from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import Electron from "./containers/ElectronPage";

export default () => (
    <App>
        <Switch>
            <Route path="/electron" component={Electron}/>
            <Route path="/" component={HomePage}/>
        </Switch>
    </App>
);
