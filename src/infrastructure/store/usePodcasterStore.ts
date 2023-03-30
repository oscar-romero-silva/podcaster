import {useState} from 'react';
import {IPodcasterApi} from '@/api/IPodcasterApi';
import {IPodcastStore} from './IPodcasterStore';
import Podcast from '@/domain/Podcast';
import Episode from '@/domain/Episode';
import {EpisodeResponse, PodcastResponse} from '@/api/types';
import {canFetch, errorHandler, getFromLocalStorage, setToLocalStorage} from './utils';

type DataToSave = {
  savedDate: Date;
  data: PodcastResponse[] | Podcast;
  episodes?: EpisodeResponse[] | null;
};

const usePodcasterStore = (api: IPodcasterApi): IPodcastStore => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [podcast, setPodcast] = useState<Podcast | null>(null);
  const [podcastEpisodes, setPodcastEpisodes] = useState<Episode[]>([]);
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [loading, setLoading] = useState(false);
  const [isFetchError, setIsFetchError] = useState(false);

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
    setIsFetchError(false);
    if (canFetch('podcasts')) {
      setLoading(true);
      try {
        const data = await api.getAllPodcasts();
        const dataToSave: DataToSave = {savedDate: new Date(), data};
        setToLocalStorage('podcasts', dataToSave);
      } catch (error) {
        errorHandler(error);
      } finally {
        setLoading(false);
      }
    }
    updateToPodcast(getFromLocalStorage('podcasts').data);
  };

  const fetchEpisodes = async (id: number) => {
    setLoading(true);
    setIsFetchError(false);
    try {
      return await api.getPodcast(id);
    } catch (error) {
      errorHandler(error);
      setIsFetchError(true);
      return null;
    } finally {
      setLoading(false);
    }
  };
  const getSavedEpisodes = () => {
    return (
      getFromLocalStorage('podcast').episodes?.map((e: EpisodeResponse) => {
        return new Episode(e);
      }) || []
    );
  };

  const isSamePodcast = (id: number) => {
    const {data} = getFromLocalStorage('podcast');
    if (!data) {
      return false;
    }
    const updateToPodcastType = new Podcast(data.podcast);
    return id === updateToPodcastType.id;
  };

  const getPodcast = async (id: number) => {
    setIsFetchError(false);
    if (canFetch('podcast') || !isSamePodcast(id) || !isFetchError) {
      const episodes = await fetchEpisodes(id);
      const podcastResult = findPodcast(id);

      if (podcastResult) {
        const dataToSave: DataToSave = {
          savedDate: new Date(),
          data: podcastResult,
          episodes,
        };
        setToLocalStorage('podcast', dataToSave);
      }
    }
    const savedPodcast = getFromLocalStorage('podcast');
    setPodcast(new Podcast(savedPodcast.data.podcast));
    const savedEpisodes = getSavedEpisodes();
    setPodcastEpisodes(savedEpisodes);
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
    isFetchError,
  };
};

export default usePodcasterStore;
