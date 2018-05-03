import { actionCreatorVoid } from './helpers';

export const increment = actionCreatorVoid('INCREMENT_COUNTER');
export const decrement = actionCreatorVoid('DECREMENT_COUNTER');

export function incrementIfOdd() {
    return (dispatch: any, getState: any) => {
        const { E2ECounter } = getState();

        if (E2ECounter % 2 === 0) {
            return;
        }

        dispatch(increment());
    };
}

export function incrementAsync(delay: number = 1000) {
    return (dispatch: any) => {
        setTimeout(() => {
            dispatch(increment());
        }, delay);
    };
}