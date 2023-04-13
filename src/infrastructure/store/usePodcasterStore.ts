import {useState} from 'react';
import {IPodcasterApi} from '@/api/IPodcasterApi';
import {IPodcastStore} from './IPodcasterStore';
import Podcast from '@/domain/Podcast';
import Episode from '@/domain/Episode';
import {EpisodeResponse, PodcastResponse} from '@/api/types';
import errorHandler from './utils';
import useLoading from '../hooks/useLoading';
import useLocalStorage from '../hooks/useLocalStorage';

type DataToSave = {
  data: PodcastResponse[] | Podcast;
  episodes?: EpisodeResponse[] | null;
};

const usePodcasterStore = (api: IPodcasterApi): IPodcastStore => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [podcast, setPodcast] = useState<Podcast | null>(null);
  const [podcastEpisodes, setPodcastEpisodes] = useState<Episode[]>([]);
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [isFetchError, setIsFetchError] = useState(false);
  const {canFetch, setToLocalStorage, getFromLocalStorage} = useLocalStorage();

  const {updateLoading} = useLoading();

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
    if (canFetch()) {
      updateLoading(true);
      try {
        const data = await api.getAllPodcasts();
        const dataToSave: DataToSave = {data};
        setToLocalStorage('podcasts', dataToSave);
      } catch (error) {
        errorHandler(error);
      } finally {
        updateLoading(false);
      }
    }
    updateToPodcast(getFromLocalStorage('podcasts').data);
  };

  const fetchEpisodes = async (id: number) => {
    updateLoading(true);
    setIsFetchError(false);
    try {
      return await api.getPodcast(id);
    } catch (error) {
      errorHandler(error);
      setIsFetchError(true);
      return null;
    } finally {
      updateLoading(false);
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
    const data = getFromLocalStorage('podcast');

    if (!data) {
      return false;
    }
    const updateToPodcastType = new Podcast(data.data.podcast);
    return id === updateToPodcastType.id;
  };

  const getPodcast = async (id: number) => {
    setIsFetchError(false);
    if (canFetch() || !isSamePodcast(id) || !isFetchError) {
      const episodes = await fetchEpisodes(id);
      const podcastResult = findPodcast(id);

      if (podcastResult) {
        const dataToSave: DataToSave = {
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
    const savedEpisodes = getSavedEpisodes();
    const findEpisode = savedEpisodes.find((e: Episode) => e.id === id) || null;
    setEpisode(findEpisode);
  };

  return {
    podcasts,
    getAllPodcasts,
    getPodcast,
    podcast,
    podcastEpisodes,
    episode,
    getEpisode,
    isFetchError,
  };
};

export default usePodcasterStore;
