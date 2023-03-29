import {useEffect, useState} from 'react';
import PodcastCard from '../components/PodcastsView/PodcastCard';
import {usePodcasterContext} from '../../infrastructure/PodcastContextProvider';
import PodcastsNotFound from '../components/PodcastsView/PodcastsNotFound';
import Podcast from '@/domain/Podcast';

function PodcastsView() {
  const {podcasts} = usePodcasterContext();
  const [filteredPodcasts, setFilteredPodcasts] = useState<Podcast[]>([]);

  useEffect(() => {
    setFilteredPodcasts([...podcasts]);
  }, [podcasts]);

  const filterPodcasts = async (value: string) => {
    const searchedPodcasts = podcasts.filter(
      pod =>
        pod.artist.toLowerCase().includes(value.toLowerCase()) ||
        pod.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPodcasts(searchedPodcasts);
  };

  return (
    <div>
      <div className="flex justify-center md:justify-end items-center gap-3 w-full min-w-[300px] mb-5">
        <span className="bg-sky-700 text-white text-lg font-bold rounded-lg h-min px-2">
          {filteredPodcasts.length}
        </span>
        <input
          type="text"
          placeholder="Filter podcasts..."
          className="block shadow-custom rounded-lg px-3 py-2 focus:border-sky-700 focus:outline-none focus:ring focus:ring-sky-700 focus:ring-opacity-40"
          onChange={e => filterPodcasts(e.target.value)}
        />
      </div>
      {filteredPodcasts.length ? (
        <div className="flex flex-wrap justify-center md:justify-between">
          {filteredPodcasts.map(podcast => {
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
