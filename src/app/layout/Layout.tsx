import {ReactNode} from 'react';
import Header from '../components/layout/Header';

function Layout({children}: {children: ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}

export default Layout;
