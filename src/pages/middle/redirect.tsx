import type { NextPage } from 'next';

import { MainLayout } from '../../components/layouts/MainLayout';

const Middle: NextPage = (): JSX.Element => {

    return (
        <MainLayout>
            <h3 className="text-center mt-3">Redirected by Middleware</h3>
        </MainLayout>
    );
};

export default Middle;