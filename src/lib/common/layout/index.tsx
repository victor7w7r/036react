import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout: FC = () => (
  <main>
    Hello
    <Outlet />
  </main>
);
