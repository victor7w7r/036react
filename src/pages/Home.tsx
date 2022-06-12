import { FC } from 'react';
import { Subscribe } from '@react-rxjs/core';

import { BinanceCall } from '../components/BinanceCall';
import { Spinner } from '../components/Spinner';

import { useHome } from '../hooks/useHome';

import brand from '../assets/brand.png';
import brandwhite from '../assets/brandwhite.png';
import tailwind from '../assets/tailwind.png';
import tailwindWhite from '../assets/tailwindwhite.png';

export const Home: FC = (): JSX.Element => {

    const { 
        dataState, darkMode, controlBackground, blueChange,
        purpleChange, redChange, emeraldChange, changeToStore
    } = useHome();

    return (
        <div className="absolute h-screen inset-0 backdrop-blur-xl">
            <div className='flex flex-col lg:flex-row items-center mt-24 tall:mt-32 lg:items-stretch lg:justify-evenly lg:h-3/6'>
                <div className={`card-container ${controlBackground}`}>
                    <p className="adaptable-center-text text-lg tall:text-xl lg:text-3xl font-amina">Made with love by</p>
                    <img src={darkMode ? brandwhite : brand} alt="" className="scale-75 lg:scale-100" />
                    <h3 className="adaptable-center-text text-base lg:text-xl font-semibold mb-4">Happy Hacking! with Typescript?</h3>
                    <p className="adaptable-center-text text-base lg:text-xl font-roboto mb-8">Roboto Font works with</p>
                    <img src={darkMode ? tailwindWhite : tailwind} alt="" className="scale-50 tall:scale-75 lg:scale-75" />
                </div>
                <div className={`card-container ${controlBackground}`}>
                    {
                    dataState.data
                        ? <p className="adaptable-center-text text-base lg:text-xl font-semibold">Store State: Yes, you write <b>{dataState.data || ''}</b></p>
                        : <p className="adaptable-center-text text-base lg:text-xl font-semibold">Store State: Not yet.</p>
                    }
                    <div className='lg:w-[28rem] w-[32rem]'></div>
                    <h3 className="adaptable-center-text text-lg lg:text-3xl font-semibold my-4">Lets see bitcoin price</h3>
                        <Subscribe fallback={<Spinner appendClass='data' />}>
                            <BinanceCall />
                        </Subscribe>
                </div>
            </div>
            <div className='flex items-center justify-center my-8 tall:my-12'>
                <button className="standard-button" onClick={changeToStore}>Go to store</button>
            </div>
            <div className='flex flex-row items-center justify-center'>
                <button className="blue-button" onClick={blueChange}></button>
                <button className="purple-button" onClick={purpleChange}></button>
                <button className="red-button" onClick={redChange}></button>
                <button className="emerald-button" onClick={emeraldChange}></button>
            </div>
        </div> 
    );
};