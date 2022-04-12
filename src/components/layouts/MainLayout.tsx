import { FC, ReactNode } from 'react';

import { Header } from "../Header";

type Props = { children?: ReactNode };

export const MainLayout: FC<Props> = ({ children }): JSX.Element => (
    <>
        <Header />
        <main>{children}</main>
    </>
);