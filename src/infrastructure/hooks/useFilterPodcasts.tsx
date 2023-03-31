import {useEffect, useState} from 'react';
import {usePodcasterContext} from '../PodcastContextProvider';
import Podcast from '@/domain/Podcast';

function useFilterPodcast() {
  const {podcasts} = usePodcasterContext();
  const [filteredPodcasts, setFilteredPodcasts] = useState<Podcast[]>([]);

  useEffect(() => {
    setFilteredPodcasts([...podcasts]);
  }, [podcasts]);

  const filterPodcasts = (value: string) => {
    const searchedPodcasts = podcasts.filter(
      pod =>
        pod.artist.toLowerCase().includes(value.toLowerCase()) ||
        pod.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredPodcasts(searchedPodcasts);
  };

  return {filterPodcasts, filteredPodcasts};
}

export default useFilterPodcast;
