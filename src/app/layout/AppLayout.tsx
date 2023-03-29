import {Outlet} from 'react-router-dom';
import Header from '../components/Layout/Header';

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 m-5 md:m-10">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
