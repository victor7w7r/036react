import type { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { DataProvider, ThemeProvider } from './context';

import { Home } from './pages/Home';
import { StoreEx } from './pages/StoreEx';

import './index.scss';

export const App: FC = (): JSX.Element => 
  <Router>
    <DataProvider>
      <ThemeProvider>
          <Routing />
      </ThemeProvider>
    </DataProvider>
  </Router>;

const Routing: FC = (): JSX.Element =>
  <Routes>
      <Route path="/store" element={<StoreEx />} />
      <Route path="/" element={<Home />}/>
  </Routes>;