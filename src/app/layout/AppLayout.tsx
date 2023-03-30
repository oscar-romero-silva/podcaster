import {Outlet} from 'react-router-dom';
import Header from '../components/Layout/Header';
import Loading from '../components/Loading';
import {usePodcasterContext} from '@/infrastructure/PodcastContextProvider';

function AppLayout() {
  const {loading} = usePodcasterContext();

  return (
    <div className="m-5 mt-20 md:m-20">
      <Header />
      {loading ? <Loading /> : <Outlet />}
    </div>
  );
}

export default AppLayout;
