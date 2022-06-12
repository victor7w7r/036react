import type { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { DataProvider, ThemeProvider } from './context';

import { Home } from './pages/Home';
import { Store } from './pages/Store';

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
      <Route path="/store" element={<Store />} />
      <Route path="/" element={<Home />}/>
  </Routes>;