import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import useSWR from 'swr';

type TProps = { advServ: string, cookServ: string };

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export const RequestTable: FC<TProps> = (props): JSX.Element => {
    
    const [ advice, setAdvice ] = useState<string>('');
    const [ cookie, setCookie ]= useState<string>('--');
    const { data, error } = useSWR('/api', fetcher);

    useEffect(() => {
        const fetchApi = () => {
            setAdvice(data?.advice || '');
        };

        fetchApi();
        setCookie(Cookies.get('cookie') || '--');
    }, [props, data]);

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-3">
                    <h3 className="text-center mt-3">What is in Next.js API?</h3>
                    <br />
                    <table className="table table-sm table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Request</th>
                                <th scope="col">advice</th>
                                <th scope="col">cookies</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Client Req</th>
                                <td>{advice}</td>
                                <td>{cookie}</td>
                            </tr>
                            <tr>
                                <th scope="row">Server Req</th>
                                <td>{props.advServ}</td>
                                <td>{props.cookServ}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};