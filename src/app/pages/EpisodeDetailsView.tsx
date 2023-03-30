import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {usePodcasterContext} from '@/infrastructure/PodcastContextProvider';
import Description from '../components/EpisodeDetailsView/Description';

function EpisodeDetailsView() {
  const {episodeId} = useParams();
  const {getEpisode, episode} = usePodcasterContext();
  useEffect(() => {
    getEpisode(Number(episodeId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    episode && (
      <div className="flex flex-col w-auto shadow-custom mb-6 p-4 divide-y">
        <div className="max-h-[75vh] overflow-auto">
          <h1 className="text-2xl font-bold pb-2">{episode.name}</h1>
          <Description description={episode.description} />
        </div>
        <div className="pt-5">
          {episode.episodeTrackUrl && (
            <audio className="w-full" controls src={episode.episodeTrackUrl} preload="metadata">
              <track default kind="captions" />
              Your browser does not support the <code>audio</code> element.
            </audio>
          )}
        </div>
      </div>
    )
  );
}

export default EpisodeDetailsView;
