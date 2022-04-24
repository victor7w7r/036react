import { useContext } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';

import { MainLayout } from '../components/layouts/MainLayout';
import { RequestTable } from '../components/RequestTable';

import { DataContext } from '../context';
import type { TApi } from '../types';

import HomeStyle from '../styles/Home.module.scss';

const Home: NextPage<TApi> = ( props ): JSX.Element => {

    const { dataState } = useContext(DataContext);

    return (
        <MainLayout>
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
                                <Image alt="static" src="/brand.png" width={514} height={114} />
                            </div>
                    </div>
                <div className="col-sm"></div>
            </div>
            <br />
            <RequestTable advServ={props.advice} cookServ={props.cookie || '--'} />
        </MainLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({req}) => {

    const res = await fetch('http://localhost:3000/api');
    const { advice } = await res.json();

    let cookie: string = ''
    req.cookies.cookie && (cookie = req.cookies.cookie);

    return {
        props: {
            advice,
            cookie
        }
    }
}

export default Home;