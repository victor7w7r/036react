import { DataState, DataActions, DataActionsType } from '../types';

export const DataReducer = (state: DataState, action: DataActions): DataState => {

    switch(action.type) {
        case DataActionsType.Request:
            return {
                loading: true
            };
        case DataActionsType.Success:
            return {
                ...state,
                data: action.payload, 
                loading: false
            };
        case  DataActionsType.Error:
            return {
                data: action.payload, 
                loading: false
            };
        default: return state;  
    }
};