import { FC, createContext, useReducer, Dispatch, Reducer } from "react";

import type { DataState, DataActions } from '../types';
import { DataReducer } from './dataReducer';

type valueContext = {
    state: DataState, 
    dispatch: Dispatch<DataActions>
};

const initialState: DataState = {
    data: ""
};

const initialContext: valueContext = {
    state: initialState, 
    dispatch: () => initialState
};

export const StoreContext = createContext<valueContext>(initialContext);

export const Store: FC = ({ children }): JSX.Element => {
    
    const [state, dispatch] = useReducer<Reducer<DataState,DataActions>>(DataReducer, initialState);

    return (
        <StoreContext.Provider value = {{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};