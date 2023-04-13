import {Outlet, useMatch, useNavigate, useParams, ScrollRestoration} from 'react-router-dom';
import {useEffect} from 'react';
import {usePodcasterContext} from '@/infrastructure/PodcastContextProvider';
import PodcastCardDetails from '../components/PodcastsDetailsView/PodcastDetailsCard';
import useLoading from '@/infrastructure/hooks/useLoading';

function PodcastDetailsLayout() {
  const {podcastId} = useParams();
  const {getPodcast, podcast} = usePodcasterContext();
  const {loading} = useLoading();
  useEffect(() => {
    getPodcast(Number(podcastId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [podcastId]);

  const navigate = useNavigate();
  const location = useMatch('/podcast/:podcastId');
  const navigateBack = () => {
    if (!location) {
      navigate(-1);
    }
  };

  return !loading ? (
    <div className="flex flex-col lg:flex-row h-screen gap-y-10 lg:gap-20">
      <div className={`lg:w-1/5 w-full min-w-[300px] ${location && 'pointer-events-none'}`}>
        <PodcastCardDetails podcast={podcast} onClick={() => navigateBack()} />
      </div>
      <div className="lg:w-4/5 w-full h-auto min-w-[300px]">
        <Outlet />
        <ScrollRestoration />
      </div>
    </div>
  ) : null;
}

export default PodcastDetailsLayout;
