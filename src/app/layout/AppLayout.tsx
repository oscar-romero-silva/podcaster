import {Outlet} from 'react-router-dom';
import Header from '../components/layout/Header';

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-5 md:p-10">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
