import type { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainLayout } from './components/layouts/MainLayout';
import { DataProvider } from './context/DataContext';

import { Home } from './pages/Home';
import { StoreEx } from './pages/StoreEx';

import './styles/style.scss';

export const App: FC = (): JSX.Element => {

  return (
    <Router>
      <DataProvider>
        <MainLayout>
          <Routes>
            <Route path="/store" element={<StoreEx />} />
            <Route path="/" element={<Home />}/>
          </Routes>
        </MainLayout>
      </DataProvider>
    </Router>
  );
};