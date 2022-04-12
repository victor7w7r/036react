import { FC, createContext, useReducer, Reducer, ReactNode } from "react";

import type { DataContextProps, DataState, DataActions } from "../types";
import { DataReducer } from './dataReducer';

export const dataInitialState: DataState = {
    data: undefined,
    loading: false,
    success: false
};

export const DataContext = createContext<DataContextProps>( {} as DataContextProps );

export const DataProvider: FC<{children: ReactNode}> = ({ children }): JSX.Element => {
    
    const [dataState, dispatch] = useReducer<Reducer<DataState,DataActions>>(DataReducer, dataInitialState);

    const success = (data: string) => {
        dispatch({ type: 'DATA_SEND_SUCCESS', payload: data });
    };

    return (
        <DataContext.Provider value = {{ dataState, success }}>
            {children}
        </DataContext.Provider>
    );
};