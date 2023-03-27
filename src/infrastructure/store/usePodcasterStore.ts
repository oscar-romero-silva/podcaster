import {useState} from 'react';
import {differenceInHours} from 'date-fns';
import {IPodcasterApi} from '@/api/IPodcasterApi';
import {IPodcastStore} from './IPodcasterStore';
import Podcast from '@/domain/Podcast';
import Episode from '@/domain/Episode';
import {PodcastResponse} from '@/api/types';

const usePodcasterStore = (api: IPodcasterApi): IPodcastStore => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [podcast, setPodcast] = useState<Podcast | null>(null);
  const [podcastEpisodes, setPodcastEpisodes] = useState<Episode[]>([]);

  const [loading, setLoading] = useState(false);
  const canFetch = () => {
    const savedPodcasts = JSON.parse(localStorage.getItem('podcasts') as string);
    if (savedPodcasts) {
      const actualDate = new Date();
      const savedDate = new Date(savedPodcasts.savedDate);
      return differenceInHours(actualDate, savedDate) > 24;
    }
    return true;
  };

  const updateToPodcast = (podcastsResponse: PodcastResponse[]) => {
    const newPodcasts = podcastsResponse.map(p => {
      return new Podcast(p);
    });
    setPodcasts(newPodcasts);
  };

  const findPodcast = (id: number): Podcast | null => {
    const pod = podcasts.find(p => p.id === id);
    if (!pod) {
      return null;
    }
    return pod;
  };

  const getAllPodcasts = async () => {
    if (canFetch()) {
      setLoading(true);
      try {
        const {data} = await api.getAllPodcasts();
        localStorage.setItem(
          'podcasts',
          JSON.stringify({savedDate: new Date(), podcasts: data.feed.entry})
        );
      } catch (error) {
        throw new Error(error as string);
      } finally {
        setLoading(false);
      }
    }
    updateToPodcast(JSON.parse(localStorage.getItem('podcasts') as string).podcasts);
  };

  const getPodcast = async (id: number) => {
    const podcastResult = findPodcast(id);

    if (podcastResult) {
      setPodcast(findPodcast(id));
    }
    try {
      const {data} = await api.getPodcast(id);
      const episodes = data.results.map(e => new Episode(e));
      setPodcastEpisodes(episodes);
    } catch (error) {
      throw new Error(error as string);
    }
  };
  return {podcasts, getAllPodcasts, getPodcast, loading, podcast, podcastEpisodes};
};

export default usePodcasterStore;
