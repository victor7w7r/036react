import type { FC } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { MainLayout } from './components/layouts/MainLayout';

import { Home } from './pages/Home';
import { ReduxEx } from './pages/ReduxEx';

import './styles/style.scss';

export const App: FC = (): JSX.Element => {

  return (
    <Router>
        <MainLayout>
          <Routes>
            <Route path="/redux" element={<ReduxEx />} />
            <Route path="/" element={<Home />}/>
          </Routes>
        </MainLayout>
    </Router>
  );
};