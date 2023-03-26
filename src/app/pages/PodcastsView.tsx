import PodcastCard from '../components/PodcastsView/PodcastCard';
import {usePodcasterContext} from '../../infrastructure/PodcastContextProvider';
import PodcastsNotFound from '../components/PodcastsView/PodcastsNotFound';

function PodcastsView() {
  const {podcasts} = usePodcasterContext();

  return (
    <div>
      {podcasts.length ? (
        <div className="flex flex-wrap justify-center gap-10">
          {podcasts.map(podcast => {
            return <PodcastCard key={podcast.id} podcast={podcast} />;
          })}
        </div>
      ) : (
        <PodcastsNotFound />
      )}
    </div>
  );
}

export default PodcastsView;
