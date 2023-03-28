import {useParams, useNavigate} from 'react-router-dom';
import {usePodcasterContext} from '@/infrastructure/PodcastContextProvider';
import EpisodesTable from '../components/PodcastsDetailsView/EpisodesTable';
import Episode from '@/domain/Episode';

function PodcastDetailsView() {
  const {podcastId} = useParams();
  const {podcastEpisodes} = usePodcasterContext();

  const navigate = useNavigate();
  const onTitleClick = (episode: Episode) => {
    navigate(`/podcast/${podcastId}/episode/${episode.id}`);
  };

  return (
    <>
      <div className="flex items-center w-full h-12 shadow-custom mb-6 p-4">
        <h1 className="text-2xl font-bold">Episodes: {podcastEpisodes.length}</h1>
      </div>
      <EpisodesTable
        headings={[
          {value: 'Title', id: 'name'},
          {value: 'Date', id: 'releaseDate'},
          {value: 'Duration', id: 'duration'},
        ]}
        data={podcastEpisodes}
        onTitleClick={onTitleClick}
      />
    </>
  );
}

export default PodcastDetailsView;
