import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/logo.png';

export const Header: FC = (): JSX.Element => (
    <div className="navbar navbar-dark bg-dark">
        <div className="navbar-brand">
            <img src={logo} width="45" height="45" className="d-inline-block align-top" alt="" />
            <NavLink className="btn btn-dark mr-2 oneclass" to="/">&nbsp; React + TS Template</NavLink>
        </div>
        <div className="d-flex">
            <NavLink className="btn btn-dark mr-2" to="/store">Store Example</NavLink>
        </div>
    </div>
);