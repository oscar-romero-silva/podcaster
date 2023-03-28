import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {usePodcasterContext} from '@/infrastructure/PodcastContextProvider';

function EpisodeDetailsView() {
  const {episodeId} = useParams();
  const {getEpisode, episode} = usePodcasterContext();

  useEffect(() => {
    getEpisode(Number(episodeId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const htmlDecode = (content: string) => {
    const e = document.createElement('div');
    e.innerHTML = content;
    return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
  };
  return (
    episode && (
      <div className="flex flex-col w-full shadow-custom mb-6 p-4 divide-y">
        <div className="pb-5">
          <h1 className="text-2xl font-bold pb-2">{episode.name}</h1>
          {/* eslint-disable-next-line react/no-danger */}
          <p dangerouslySetInnerHTML={{__html: htmlDecode(episode.description) || ''}} />
        </div>
        <div className="pt-5">
          <audio className="w-full" controls src={episode.episodeTrackUrl}>
            <track default kind="captions" />
            Your browser does not support the <code>audio</code> element.
          </audio>
        </div>
      </div>
    )
  );
}

export default EpisodeDetailsView;
