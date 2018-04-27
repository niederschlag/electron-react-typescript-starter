import * as React from 'react';
import {Link} from 'react-router-dom';

export default class E2EPage extends React.Component {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <Link to="/">Back</Link><br/>
                <p id="counter">...</p>
                <button key="+">+</button>
                <button key="-">-</button>
                <a>Electron</a>
            </div>
        );
    }
}
