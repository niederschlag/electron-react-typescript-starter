import * as React from 'react';
import {RouteComponentProps} from "react-router";
import {Link} from 'react-router-dom';

export interface IProps extends RouteComponentProps<any> {
    E2ECounter: number,

    increment(): void,
    incrementIfOdd(): void,
    incrementAsync(): void,
    decrement(): void
}

export class E2ECounter extends React.Component<IProps> {
    public render() {
        const { increment, incrementIfOdd, incrementAsync, decrement, E2ECounter } = this.props;
        return (
            <div>
                <Link to="/" data-e2eid="backButton">Back</Link><br/>
                <p id="counter" data-e2eid="counter">{E2ECounter}</p>
                <button key="+" onClick={increment} data-e2eclass="btn">+</button>
                <button key="-" onClick={decrement} data-e2eclass="btn">-</button>
                <button key="+odd" onClick={incrementIfOdd} data-e2eclass="btn">+odd</button>
                <button key="+async" onClick={() => incrementAsync() } data-e2eclass="btn">+async</button>
            </div>
        );
    }
}
