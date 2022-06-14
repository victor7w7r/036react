import { FC, useContext } from 'react';

import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import { ThemeContext } from '../context';
import { DarkModeToggler } from './DarkModeToggler';

export const Header: FC = (): JSX.Element => {

    const { darkMode, controlBackground } = useContext(ThemeContext);
   
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Web site created using create-react-app" />
                <title>036nextjs</title>
            </Head>
            <div className="flex items-center justify-center">
                <nav className={`navbar ${controlBackground}`}>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            <div className="flex-1 flex items-stretch justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <Image src="/header.png" width="45" height="45" 
                                        className={`block h-8 w-auto mr-5 ${!darkMode && "brightness-0 "}`} alt="" />
                                    <Link href="/"><a className="font-medium adaptable-text">Next.js + TS Template</a></Link>
                                    <Link href="/middle"><a className="font-medium adaptable-text">Middleware Test</a></Link>
                                </div>
                            </div>
                            <div className="items-center mt-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <DarkModeToggler />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};
