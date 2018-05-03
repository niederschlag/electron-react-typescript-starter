import {routerReducer as routing} from 'react-router-redux';
import {combineReducers, Reducer} from 'redux';
import E2ECounter, {TState as TCounterState } from './E2ECounter';

const rootReducer = combineReducers({
    E2ECounter,
    routing: routing as Reducer<any>
});

export interface IState {
    E2ECounter: TCounterState
}

export default rootReducer;
