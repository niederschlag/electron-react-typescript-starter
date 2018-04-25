import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import {Link} from 'react-router-dom';

export class ElectronPage extends React.Component<RouteComponentProps<any>, void> {
    render() {
        return (
            <div>
                <Link to="/">Hello</Link>
                <a>Electron</a>
            </div>
        );
    }
}

export default (ElectronPage as any as React.StatelessComponent<RouteComponentProps<any>>);
