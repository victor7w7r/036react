import type { FC } from 'react';

import { Header } from "../Header";

export const MainLayout: FC = ({ children }): JSX.Element => {

    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};