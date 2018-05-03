import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CounterActions from '../actions/E2ECounter';
import { E2ECounter, IProps } from '../components/E2ECounter';
import { IState } from '../reducers';

function mapStateToProps(state: IState): Partial<IProps> {
    return {
        E2ECounter: state.E2ECounter
    };
}

function mapDispatchToProps(dispatch: Dispatch<IState>): Partial<IProps> {
    return bindActionCreators(CounterActions as any, dispatch);
}

export default (connect(mapStateToProps, mapDispatchToProps)(E2ECounter) as any as React.StatelessComponent<IProps>);