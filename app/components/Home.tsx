
import * as React from 'react';
import {Link} from 'react-router-dom';

const styles = require('./Home.scss');

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.container} data-tid="container">
                    <p>Hello</p>
                    <Link to="/e2e" style={{display: "none"}} id={"e2e"}>Go to e2e</Link>
                </div>
            </div>
        );
    }
}
