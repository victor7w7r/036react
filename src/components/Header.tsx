import type { FC } from 'react';

import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

export const Header: FC = (): JSX.Element => (
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Web site created using create-react-app" />
            <title>036nextts</title>
        </Head>
        
        <div className="navbar navbar-dark bg-dark">
            <div className="navbar-brand">
                <Image src="/header.png" width="45" height="45" className="d-inline-block align-top" alt="" />
                <Link href="/"><a className="btn btn-dark mr-2 oneclass"> &nbsp; Next.js + TS Template</a></Link>
            </div>
            <div className="d-flex">
                <Link href="/middle"><a className="btn btn-dark mr-2">Middleware</a></Link>
                <Link href="/storecookies"><a className="btn btn-dark mr-2">Store/Cookies Example</a></Link>
            </div>
        </div>
    </>
);
