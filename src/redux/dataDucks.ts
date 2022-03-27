import { Dispatch } from 'react';
import { DataState, ActionTypeData, ActionData, TData } from '../types';

export function dataReducer(state: DataState = {}, action: ActionData): DataState {

    switch(action.type) {
        case ActionTypeData.DATA_SEND_REQUEST:
            return {
                loading: true
            };
        case ActionTypeData.DATA_SEND_SUCCESS:
            return {
                dataSend: action.payload, loading: false
            };
        case ActionTypeData.DATA_SEND_FAIL:
            return {
                dataSend: action.payload, loading: false
            };
        default: 
            return state;  
    }
}

export const getData = (parameter: TData) => (dispatch: Dispatch<ActionData>) => {
    dispatch({
        type: ActionTypeData.DATA_SEND_REQUEST 
    });
    
    try {
        dispatch({ 
            type: ActionTypeData.DATA_SEND_SUCCESS, 
            payload: parameter 
        });

    } catch (error: any) {
        dispatch({ 
            type: ActionTypeData.DATA_SEND_FAIL, 
            payload: error.message 
        });
    }
};