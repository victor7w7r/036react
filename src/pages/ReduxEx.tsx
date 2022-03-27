import type { FC } from 'react';
import { ChangeEvent, useEffect, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { getData, RootState } from '../redux';
import { DataState } from '../types';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const ReduxEx: FC = (): JSX.Element => {

    const [text, setText] = useState<string>('');
    const textStored: DataState = useTypedSelector(state=>state.data);
    const { dataSend }: DataState = textStored;

    const dispatch = useDispatch();

    const submitRedux = (e: ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault();
        dispatch(getData({data: text}));
    };

    useEffect(() => {}, [text]);

    return (
        <>
            <h3 className="text-center mt-3">Redux Example</h3>
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
                                    dataSend?.data !== '' ? (
                                        <p className="text-center mt-3">Redux State: Yes, you write <b>{dataSend?.data || ''}</b></p>
                                    ) : (
                                        <p className="text-center mt-3">Redux State: Not yet.</p>
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