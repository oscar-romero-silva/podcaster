import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {usePodcasterContext} from '@/infrastructure/PodcastContextProvider';
import DetailsLayout from '../components/PodcastsDetailsView/DetailsLayout';
import EpisodesTable from '../components/PodcastsDetailsView/EpisodesTable';

function PodcastDetailsView() {
  const {podcastId} = useParams();
  const {getPodcast, podcast, podcastEpisodes} = usePodcasterContext();

  useEffect(() => {
    getPodcast(Number(podcastId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [podcastId]);
  return (
    <DetailsLayout podcast={podcast}>
      <div>
        <div className="flex items-center w-full h-12 shadow-custom mb-6 p-4">
          <h1 className="text-2xl font-bold">Episodes: {podcastEpisodes.length}</h1>
        </div>
        <EpisodesTable
          headings={[
            {value: 'Title', id: 'name', url: 'episodeTrackUrl'},
            {value: 'Date', id: 'releaseDate'},
            {value: 'Duration', id: 'duration'},
          ]}
          data={podcastEpisodes}
        />
      </div>
    </DetailsLayout>
  );
}

export default PodcastDetailsView;
