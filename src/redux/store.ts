import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import { dataReducer } from './dataDucks';

const initialState = {
    data: { 
        dataSend: { data: "" }
    }
};

const reducer = combineReducers({
    data: dataReducer,
});

export type RootState = ReturnType<typeof reducer>;
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
export default store;