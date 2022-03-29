import { FC, useContext, ChangeEvent, useEffect, useState } from 'react';

import { StoreContext } from '../store';
import { DataActionsType } from '../types';

export const StoreEx: FC = (): JSX.Element => {

    const [text, setText] = useState<string>('');

    const {state, dispatch} = useContext(StoreContext);

    const submitRedux = (e: ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault();
        dispatch({type: DataActionsType.Success, payload: text});
    };

    useEffect(() => {}, [text]);

    return (
        <>
            <h3 className="text-center mt-3">Store Example</h3>
            <p className="text-center mt-3">Write anything in this form and send!</p>
            <form onSubmit={submitRedux}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm"></div>
                        <div className="col-sm">
                                <input type="text" className="form-control mb-4" onChange={(e) => setText(e.target.value)} required placeholder="here" />
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary text-center">Submit</button>
                                </div>
                                {
                                    state.data !== '' ? (
                                        <p className="text-center mt-3">Store State: Yes, you write <b>{state.data || ''}</b></p>
                                    ) : (
                                        <p className="text-center mt-3">Store State: Not yet.</p>
                                    ) 
                                }
                        </div>
                        <div className="col-sm"></div>
                    </div>
                </div>
            </form>
        </>
    );
};