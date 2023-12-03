import type { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';

import '@/common/styles/global.css';

export const App: FC = () => <RouterProvider router={router} />;
