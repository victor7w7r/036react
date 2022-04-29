import { FC, useContext } from 'react';
import { Subscribe } from '@react-rxjs/core';

import { BinanceCall } from '../components/BinanceCall';
import { DataContext } from '../context';

import brand from '../assets/brand.png';

import HomeStyle from '../styles/Home.module.scss';

export const Home: FC = (): JSX.Element => {

    const { dataState } = useContext(DataContext);

    return (
        <>
            <h3 className="text-center mt-3">Happy Hacking! with Typescript?</h3>
            <p className={`text-center mt-3 ${HomeStyle.roboto}`}>SCSS is working? Yes, with Roboto</p>
            {
                dataState.data
                    ? <p className="text-center mt-3">Store State: Yes, you write <b>{dataState.data || ''}</b></p>
                    : <p className="text-center mt-3">Store State: Not yet.</p>
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
            <br />
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-3">
                        <h3 className="text-center mt-3">Lets see bitcoin price</h3>
                        <br />
                        <Subscribe fallback={<p className='text-center'>Loading...</p>}>
                            <BinanceCall />
                        </Subscribe>
                    </div>
                </div>
            </div>
        </>
    );
};