import { FC, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { ThemeContext } from '../context';
import { DarkModeToggler } from './DarkModeToggler';

import logo from '../assets/logo.png';

export const Header: FC = (): JSX.Element => {
    
    const { darkMode, controlBackground } = useContext(ThemeContext);

    return (
        <div className="flex items-center justify-center">
            <nav className={`navbar ${controlBackground}`}>
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex-1 flex items-stretch justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <img src={logo} className={`block h-8 w-auto mr-5 ${!darkMode && "brightness-0 "}`} alt="" />
                                <NavLink to="/" className="font-medium adaptable-text">React + TS Template</NavLink>
                            </div>
                        </div>
                        <div className="items-center mt-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <DarkModeToggler />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};