import type { FC } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';

export const Header: FC = (): JSX.Element => {
    
    return (
        <div className="navbar navbar-dark bg-dark">
            <div className="navbar-brand">
                <img src={logo} width="45" height="45" className="d-inline-block align-top" alt="" />
                <Link to="/"><a className="btn btn-dark mr-2 oneclass"> &nbsp; React + TS Template</a></Link>
            </div>
            <div className="d-flex">
                <Link to="/redux"><a className="btn btn-dark mr-2">Redux Example</a></Link>
            </div>
        </div>
    );
};