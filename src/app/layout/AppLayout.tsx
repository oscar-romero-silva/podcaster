import {Outlet} from 'react-router-dom';
import {useEffect} from 'react';
import Header from '../components/Layout/Header';
import {usePodcasterContext} from '@/infrastructure/PodcastContextProvider';

function AppLayout() {
  const {getAllPodcasts} = usePodcasterContext();

  useEffect(() => {
    getAllPodcasts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="m-5 mt-20 md:m-20">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
