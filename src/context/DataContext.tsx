import { FC, createContext, useReducer, Reducer } from "react";
import { DataContextProps, DataState, DataActions } from "../types";
import { DataReducer } from './dataReducer';

export const dataInitialState: DataState = {
    data: undefined,
    loading: false,
    success: false
};

export const StoreContext = createContext<DataContextProps>( {} as DataContextProps );

export const DataContext: FC = ({ children }): JSX.Element => {
    
    const [dataState, dispatch] = useReducer<Reducer<DataState,DataActions>>(DataReducer, dataInitialState);

    const success = (data: string) => {
        dispatch({ type: 'DATA_SEND_SUCCESS', payload: data });
    };

    return (
        <StoreContext.Provider value = {{ dataState, success }}>
            {children}
        </StoreContext.Provider>
    );
};