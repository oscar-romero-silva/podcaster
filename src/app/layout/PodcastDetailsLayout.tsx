import {Outlet, useMatch, useNavigate, useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {usePodcasterContext} from '@/infrastructure/PodcastContextProvider';
import PodcastCardDetails from '../components/PodcastsDetailsView/PodcastCardDetails';
import Loading from '../components/Loading';

function PodcastDetailsLayout() {
  const {podcastId} = useParams();
  const {getPodcast, podcast, loading} = usePodcasterContext();

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

  return loading ? (
    <Loading />
  ) : (
    <div className="flex flex-col lg:flex-row h-screen gap-y-10 lg:gap-20">
      <div className="lg:w-1/5 w-full">
        <PodcastCardDetails podcast={podcast} onClick={() => navigateBack()} />
      </div>
      <div className="lg:w-4/5 w-ful">
        <Outlet />
      </div>
    </div>
  );
}

export default PodcastDetailsLayout;
