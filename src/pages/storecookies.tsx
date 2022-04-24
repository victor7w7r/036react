import type { GetServerSideProps, NextPage } from 'next';

import { useFormChanger } from '../hooks/useFormChanger';

import { MainLayout } from '../components/layouts/MainLayout';
import { RequestTable } from '../components/RequestTable';

import type { TApi } from '../types';

const ReduxCookies: NextPage<TApi> = (props): JSX.Element => {

    const { handleSubmit, handleChange, dataState } = useFormChanger();

    return (
        <MainLayout>
            <h3 className="text-center mt-3">Store/Cookies Example</h3>
            <p className="text-center mt-3">Write anything in this form and send!</p>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm"></div>
                        <div className="col-sm">
                                <input type="text" className="form-control mb-4" onChange={({target}) => handleChange(target.value)} required placeholder="here" />
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary text-center">Submit</button>
                                </div>
                                {
                                    dataState.data
                                        ? <p className="text-center mt-3">Store State: Yes, you write <b>{dataState.data || ''}</b></p>
                                        : <p className="text-center mt-3">Store State: Not yet.</p>
                                }
                        </div>
                        <div className="col-sm"></div>
                        <br />
                        <RequestTable advServ={props.advice} cookServ={props.cookie || '--'} />
                    </div>
                </div>
            </form>
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

export default ReduxCookies;