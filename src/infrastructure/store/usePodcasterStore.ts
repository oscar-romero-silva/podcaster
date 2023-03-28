import {useState} from 'react';
import {IPodcasterApi} from '@/api/IPodcasterApi';
import {IPodcastStore} from './IPodcasterStore';
import Podcast from '@/domain/Podcast';
import Episode from '@/domain/Episode';
import {EpisodeResponse, PodcastResponse} from '@/api/types';
import {canFetch, getFromLocalStorage, setToLocalStorage} from './utils';

const usePodcasterStore = (api: IPodcasterApi): IPodcastStore => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [podcast, setPodcast] = useState<Podcast | null>(null);
  const [podcastEpisodes, setPodcastEpisodes] = useState<Episode[]>([]);
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [loading, setLoading] = useState(false);

  const updateToPodcast = (podcastsResponse: PodcastResponse[]) => {
    const newPodcasts = podcastsResponse.map(p => {
      return new Podcast(p);
    });
    setPodcasts(newPodcasts);
  };

  const findPodcast = (id: number): Podcast | null => {
    return podcasts.find(p => p.id === id) || null;
  };

  const getAllPodcasts = async () => {
    setLoading(true);
    if (canFetch('podcasts')) {
      try {
        const {data} = await api.getAllPodcasts();
        setToLocalStorage('podcasts', {savedDate: new Date(), podcasts: data.feed.entry});
      } catch (error) {
        throw new Error(error as string);
      }
    }
    updateToPodcast(getFromLocalStorage('podcasts').podcasts);
    setLoading(false);
  };

  const fetchEpisodes = async (id: number) => {
    try {
      const {data} = await api.getPodcast(id);
      return data.results;
    } catch (error) {
      throw new Error(error as string);
    }
  };
  const getSavedEpisodes = () => {
    return getFromLocalStorage('podcast').episodes.map((e: EpisodeResponse) => {
      return new Episode(e);
    });
  };

  const getPodcast = async (id: number) => {
    setLoading(true);
    if (canFetch('podcast')) {
      const episodes = await fetchEpisodes(id);
      const podcastResult = findPodcast(id);
      if (podcastResult) {
        setToLocalStorage('podcast', {savedDate: new Date(), podcast: podcastResult, episodes});
      }
    }
    const savedPodcast = getFromLocalStorage('podcast');
    setPodcast(new Podcast(savedPodcast.podcast.podcast));

    const savedEpisodes = getSavedEpisodes();

    setPodcastEpisodes(savedEpisodes);
    setLoading(false);
  };

  const getEpisode = async (id: number) => {
    setLoading(true);
    const savedEpisodes = getSavedEpisodes();
    const findEpisode = savedEpisodes.find((e: Episode) => e.id === id) || null;
    setEpisode(findEpisode);
    setLoading(false);
  };

  return {
    podcasts,
    getAllPodcasts,
    getPodcast,
    loading,
    podcast,
    podcastEpisodes,
    episode,
    getEpisode,
  };
};

export default usePodcasterStore;
