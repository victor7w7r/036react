import type { FC } from 'react';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../redux';
import { DataState } from '../types';

import brand from '../assets/brand.png';

import HomeStyle from '../styles/Home.module.scss';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const Home: FC = (): JSX.Element => {

    const textStored: DataState = useTypedSelector(state=>state.data);
    const { dataSend }: DataState = textStored;

    return (
        <>
            <h3 className="text-center mt-3">Happy Hacking! with Typescript?</h3>
            <p className={`text-center mt-3 ${HomeStyle.roboto}`}>SCSS is working? Yes, with Roboto</p>
            {
                dataSend?.data !== '' ? (
                    <p className="text-center mt-3">Redux State: Yes, you write <b>{dataSend?.data || ''}</b></p>
                ) : (
                    <p className="text-center mt-3">Redux State: Not yet.</p>
                ) 
            }
            <div className="row mt-4">
                <div className="col-sm"></div>
                    <div className="col-sm">
                        <h4 className="text-center mt-3">Made with love by</h4>
                            <div className="d-flex justify-content-center">
                                <img src={brand} alt=""/>
                            </div>
                    </div>
                <div className="col-sm"></div>
            </div>
        </>
    );
};