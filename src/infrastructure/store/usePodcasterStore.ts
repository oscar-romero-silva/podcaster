import {useState} from 'react';
import {differenceInHours} from 'date-fns';
import {IPodcasterApi} from '../../api/IPodcasterApi';
import {IPodcastStore} from './IPodcasterStore';
import Podcast from '../../domain/Podcast';
import {PodcastResponse} from '../../api/types';

const usePodcasterStore = (api: IPodcasterApi): IPodcastStore => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

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
    const newPodcasts = podcastsResponse.map(podcast => {
      return new Podcast(podcast);
    });
    setPodcasts(newPodcasts);
  };

  const getAllPodcasts = async () => {
    if (canFetch()) {
      const {data} = await api.getAllPodcasts();
      localStorage.setItem(
        'podcasts',
        JSON.stringify({savedDate: new Date(), podcasts: data.feed.entry})
      );
    }
    updateToPodcast(JSON.parse(localStorage.getItem('podcasts') as string).podcasts);
  };

  return {podcasts, getAllPodcasts};
};

export default usePodcasterStore;
